import { LoginError } from "@/app/errors/auth/loginError"
import { LoginRequest } from "@/app/request/auth/loginRequest";
import { LoginResponse } from "@/app/response/auth/loginResponse"
import { LoginSchema } from "@/app/schema/auth/loginSchema"
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

export async function loginHandler(req: FormData): Promise<LoginResponse> {

    const email =  req.get('email')
    const password =  req.get('password')
       return new Promise(async (res, rej) => {
            try{
                LoginSchema.parse({email, password})
                if(! await isUserValid({email, password} as LoginRequest)){
                    res({succeeded: false})
                }
                res({succeeded: true})
            } catch(e: any){
                const error = {
                    emailError: e.errors?.find((error: any) => error.path[0] === 'email')?.message,
                    passwordError: e.errors?.find((error: any) => error.path[0] === 'password')?.message
                }
                LoginError._init(error as typeof LoginError)
                rej({succeeded: false})
            }
       })
}

async function isUserValid({email, password}: LoginRequest): Promise<boolean> {
    const prisma = new PrismaClient()

    const user = await prisma.user.findFirst({
        where: {
            email: String(email)
        }
    })

    if(!user){
        LoginError._init({emailError: 'Invalid email', passwordError: 'Invalid password'} as typeof LoginError)
        return false
    }

    const isMatch = bcrypt.compareSync(String(password), String(user?.password))
    if(!isMatch){
        LoginError._init({emailError: '', passwordError: 'Invalid password'} as typeof LoginError)
        return false
    }

    LoginError._init({emailError: '', passwordError: ''} as typeof LoginError)
    return true
}