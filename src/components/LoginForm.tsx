import Image from 'next/image';
import {Input} from '@nextui-org/input'
import {Checkbox} from '@nextui-org/checkbox'
import {Button} from '@nextui-org/button';

export function LoginForm() {
  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
    
        <div className="w-1/2 h-screen hidden lg:flex flex-col justify-center bg-[#00377d]">
            <Image 
                className='h-[105px] place-self-center'
                width={300}
                height={105}
                src={'/logo_so.png'}
                alt='Logo Sales Operations'
            />
        </div>

        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
            <form action="#" method="POST">
                <div className="mb-4">
                    <Input 
                        isRequired
                        type='text' 
                        label='Usuario:' 
                        placeholder='Ej: MARIO.ORDONEZ'
                        variant='underlined'
                        color='primary'
                    />
                </div>
        
                <div className="mb-4">
                    <Input 
                        isRequired
                        type='password' 
                        label='Contraseña:'
                        variant='underlined'
                        color='primary'
                    />
                </div>
        
                <div className="mb-4 flex items-center">
                    <Checkbox color='primary'>Recordar mi usuario</Checkbox>
                </div>

                <Button variant='flat' className='w-full' color='primary' size='lg'>Iniciar sesión</Button>
            </form>
        </div>
    </div>
  );
}