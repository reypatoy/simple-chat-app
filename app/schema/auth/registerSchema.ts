import { z } from "zod";

export const RegisterSchema = z.object({
    firstName: z.string().min(1, {message: 'Firstname must not be empty'}),
    lastName: z.string().min(1, {message: 'Lastname must not be empty'}),
    email: z.string().email(),
    password: z.string().min(1, {message: 'Password must not be empty'}),
    confirmPassword: z.string().min(1, {message: 'Confirm-Password must not be empty'})
})