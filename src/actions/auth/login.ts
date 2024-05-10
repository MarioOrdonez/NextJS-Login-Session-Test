'use server'

import { signIn } from '@/auth.config';
import { sleep } from '@/utils';
 
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    console.log(Object.fromEntries(formData))
    //await sleep(5)
    await signIn('credentials', {
      ...Object.fromEntries(formData),
      redirect: false
    });
    
    return 'Success'
  } catch (error) {
    // console.log(error)
    // if (error instanceof AuthError) {
    //   switch (error.type) {
    //     case 'CredentialsSignin':
    //       return 'Invalid credentials.';
    //     default:
    //       return 'Something went wrong.';
    //   }
    // }
    // throw error;

    if ((error as any).type === 'CredentialsSignin'){
      return 'CredentialsSignin'
    }

    return 'UnknownError'
  }
}