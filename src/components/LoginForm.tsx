'use client'

import { useFormState } from 'react-dom';
import Image from 'next/image';
import {Input} from '@nextui-org/input'
import {Checkbox} from '@nextui-org/checkbox'
import {Button} from '@nextui-org/button';
import { authenticate } from '@/actions';

export function LoginForm() {

    const [state, dispatch] = useFormState(authenticate, undefined);
    console.log({state})

    return (
        <div className="bg-gray-100 flex justify-center items-center h-screen">
        
            <div className="w-1/2 px-5 h-screen flex flex-col justify-center bg-[#00377d]">
                <Image 
                    className='h-20 lg:h-28 place-self-center'
                    width={300}
                    height={105}
                    src={'/logo_so.png'}
                    alt='Logo Sales Operations'
                />
            </div>

            <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                <form action={dispatch}>
                    <div className="mb-4">
                        <Input 
                            isRequired
                            type='text' 
                            label='Usuario:'
                            variant='underlined'
                            color='primary'
                            name='user'
                        />
                    </div>
            
                    <div className="mb-4">
                        <Input 
                            isRequired
                            type='password' 
                            label='Contraseña:'
                            variant='underlined'
                            color='primary'
                            name='password'
                        />
                    </div>
            
                    <div className="mb-4 flex items-center">
                        <Checkbox color='primary'>Recordar mi usuario</Checkbox>
                    </div>

                    <Button 
                        type='submit'
                        variant='ghost' 
                        className='w-full' 
                        color='primary' 
                        size='lg'>
                            Iniciar sesión
                    </Button>
                </form>
            </div>
        </div>
  );
}