import { LoginError } from "@/app/errors/auth/loginError"
import { LoginResponse } from "@/app/response/auth/loginResponse"
import { LoginSchema } from "@/app/schema/auth/loginSchema"

export async function loginHandler(req: FormData): Promise<LoginResponse> {
    const email =  req.get('email')
    const password =  req.get('password')
       return new Promise((res, rej) => {
            try{
                LoginSchema.parse({email, password})
                LoginError._init({emailError: '', passwordError: ''} as typeof LoginError)
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