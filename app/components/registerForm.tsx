import { RegisterError } from '../errors/auth/registerError';
import TextField from './shared/textField';
import ButtonComponent from './shared/button';
import { RegisterAction } from '../actions/auth/registerAction';

export default function RegisterForm() {
    return (
      <form action={RegisterAction} name={'loginForm'} id={'loginForm'} className='w-full flex flex-col items-center px-[20px]'>
        <TextField name='firstname' id='firstname' label={'Firstname'} error={RegisterError.firstNameError} type={'text'}/>
        <TextField name='lastname' id='lastname' label={'Lastname'} error={RegisterError.lastNameError} type={'text'}/>
        <TextField name='email' id='email' label={'email'} error={RegisterError.emailError} type={'text'}/>
        <TextField name='password' id='password' label={'password'} error={RegisterError.passwordMatchError ?? RegisterError.passwordError} type={'password'}/>
        <TextField name='confirmPassword' id='confirmPassword' label={'Confirm-password'} error={RegisterError.passwordMatchError ?? RegisterError.confirmPasswordError} type={'password'}/>
        <ButtonComponent label={'Register'} type={'submit'} />
      </form>            
    );
  }
  