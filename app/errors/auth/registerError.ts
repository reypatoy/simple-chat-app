export class RegisterError {
    public static firstNameError: string | undefined
    public static lastNameError: string | undefined
    public static emailError: string | undefined
    public static passwordError: string | undefined
    public static confirmPasswordError: string | undefined
    public static passwordMatchError: string | undefined

    public static _init({firstNameError, lastNameError, emailError, passwordError, confirmPasswordError, passwordMatchError}: typeof RegisterError) {
        this.firstNameError = firstNameError
        this.lastNameError = lastNameError
        this.emailError = emailError
        this.passwordError = passwordError
        this.confirmPasswordError = confirmPasswordError
        this.passwordMatchError = passwordMatchError
    }
}