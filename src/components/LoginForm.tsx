'use client'

import { useFormState, useFormStatus } from 'react-dom';
import Image from 'next/image';
import {Input} from '@nextui-org/input'
import {Checkbox} from '@nextui-org/checkbox'
import {Button} from '@nextui-org/button';
import {IoAlertCircle} from 'react-icons/io5'
import {TbBrandOffice, TbLogin2} from 'react-icons/tb';
import { authenticate } from '@/actions';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function LoginForm() {
    const router = useRouter()
    const [state, dispatch] = useFormState(authenticate, undefined);
    console.log({state})

    useEffect(() => {
        if (state === 'Success'){
            //redireccionar
            router.replace('/dashboard')
        }
    },[state])

    return (
        <div className="ui-Login-page 
                        bg-gray-50 h-screen flex flex-col items-center gap-16
                        lg:flex lg:flex-row lg:items-center">
        
            <div className="ui-Login-logo-column w-full h-auto px-5 py-3 flex justify-center
                            lg:w-1/4 lg:h-screen lg:flex lg:flex-col lg:justify-center">
                <Image 
                    className='w-52
                               lg:place-self-center'
                    width={300}
                    height={105}
                    src={'/logo_so.svg'}
                    alt='Logo Sales Operations'
                />
            </div>
            <div className="w-full flex flex-col items-center align-middle px-8
                            md:px-48
                            lg:w-3/4 lg:px-60
                            xl:px-92">
                <Button 
                    variant='faded' 
                    className='flex item-center gap-4 px-12 mb-5 w-full rounded-full self-cente bg-gray-50 hover:bg-gray-200' size='lg'
                    >
                    <TbBrandOffice size={32} className='text-cyan-600'/>
                    <span className='bg-gradient-to-tr from-cyan-600 to-violet-900 bg-clip-text text-transparent'>Iniciar con Microsoft 365</span>
                </Button>
                <p className='self-center text-sm text-gray-400 mb-3'>o utiliza tu cuenta local</p>
                
                <form action={dispatch} className='p-10 w-full flex flex-col rounded-xl shadow-xl bg-gray-50'>
                    
                    <div className="mb-4">
                        <Input 
                            isRequired
                            type='text' 
                            label='Usuario:'
                            name='user'
                            variant='bordered'
                        />
                    </div>
            
                    <div className="mb-4">
                        <Input 
                            isRequired
                            type='password' 
                            label='Contraseña:'
                            variant='bordered'
                            name='password'
                        />
                    </div>
            
                    <div className="mb-4 flex items-center">
                        <Checkbox color='primary'>Recordar mi usuario</Checkbox>
                    </div>

                    <div
                        className='flex h-8 items-end space-x-1'
                        aria-live='polite'
                        aria-atomic="true"
                    >
                        {
                            (state === 'CredentialsSignin' || state === 'UnknownError') && (
                                <div className='flex flex-row mb-4'>
                                    <IoAlertCircle className='h-5 w-5 text-red-500' size={24}/>
                                    <p className="text-sm text-red-500">Crendenciales incorrectas, favor corregir.</p>
                                </div>
                            )

                        }
                    </div>
                    <LoginButton />
                </form>
            </div>
        </div>
  );
}

function LoginButton() {
    const { pending } = useFormStatus();
   
    return (
        <Button 
            type='submit'
            variant='solid' 
            className='flex items-center gap-4 px-12 rounded-full w-ful bg-[#00377d] text-white'
            size='lg'
            isDisabled={pending}
            aria-disabled={pending}>
                <TbLogin2 size={32}/>
                Iniciar sesión
        </Button>
    );
  }