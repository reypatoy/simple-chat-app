import { LoginError } from '../errors/auth/loginError';
import TextField from './shared/textField';
import ButtonComponent from './shared/button';
import { LoginAction } from '../actions/auth/loginAction';

export default function LoginForm() {
    return (
      <form action={LoginAction} name={'loginForm'} id={'loginForm'} className='w-full flex flex-col items-center px-[20px]'>
        <TextField name='email' id='email' label={'email'} error={LoginError.emailError} type={'text'}/>
        <TextField name='password' id='password' label={'password'} error={LoginError.passwordError} type={'password'}/>
        <ButtonComponent label={'Login'} type={'submit'} />
      </form>            
    );
  }
  