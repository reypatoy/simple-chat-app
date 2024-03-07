export class LoginError {
    public static emailError: string | undefined
    public static passwordError: string | undefined
    public static loginError: string | undefined

    public static _init({emailError, passwordError, loginError}: typeof LoginError) {
        this.emailError = emailError
        this.passwordError = passwordError
        this.loginError = loginError
    }
}