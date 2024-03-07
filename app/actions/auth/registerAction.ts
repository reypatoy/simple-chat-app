'use server'

import { RegisterHandler } from "@/app/api/auth/register"
import { redirect } from 'next/navigation'
 
export async function RegisterAction(formData: FormData) {
    const response = await RegisterHandler(formData).catch(() =>  redirect('/pages/register'))
    if(response.succeeded){
        return redirect('/')
    }
    return redirect('/pages/register')
}