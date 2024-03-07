'use server'

import { loginHandler } from "@/app/api/auth/login"
import { redirect } from 'next/navigation'
 
export async function LoginAction(formData: FormData) {
    const response = await loginHandler(formData).catch(() =>  redirect('/'))
    if(response.succeeded){
        return redirect('/pages/home')
    }
   
}