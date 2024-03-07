import { RegisterError } from "@/app/errors/auth/registerError"
import { RegisterResponse } from "@/app/response/auth/registerResponse"
import { RegisterSchema } from "@/app/schema/auth/registerSchema"
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

export async function RegisterHandler(req: FormData): Promise<RegisterResponse> {
    const prisma = new PrismaClient();

    const firstName =  req.get('firstname')
    const lastName =  req.get('lastname')
    const email =  req.get('email')
    const password =  req.get('password')
    const confirmPassword =  req.get('confirmPassword')
       return new Promise(async (res, rej) => {
            try{
                RegisterSchema.parse({firstName, lastName, email, password, confirmPassword})
                const isPasswordValid: boolean = password === confirmPassword
                RegisterError._init({
                    firstNameError: '', 
                    lastNameError: '',  
                    emailError: '', 
                    passwordError: '', 
                    confirmPasswordError: '',
                    passwordMatchError: isPasswordValid ? '' : `Password didn't match`
                } as typeof RegisterError)
                if(!isPasswordValid){
                    res({succeeded: false})
                }
                const encryptedPassword = await bcrypt.hash(String(password), 10);
                await prisma.user.create({
                    data: {
                        firstName: String(firstName),
                        lastName: String(lastName),
                        email: String(email),
                        password: encryptedPassword
                    }
                  })
                  
                res({succeeded: true})
            } catch(e: any){
                const error = {
                    firstNameError: e.errors?.find((error: any) => error.path[0] === 'firstName')?.message, 
                    lastNameError: e.errors?.find((error: any) => error.path[0] === 'lastName')?.message,  
                    emailError: e.errors?.find((error: any) => error.path[0] === 'email')?.message,
                    passwordError: e.errors?.find((error: any) => error.path[0] === 'password')?.message,
                    confirmPasswordError: e.errors?.find((error: any) => error.path[0] === 'confirmPassword')?.message,
                }
                RegisterError._init(error as typeof RegisterError)
                rej({succeeded: false})
            }
       })
}