import Image from 'next/image';

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
            <h1 className="text-2xl font-semibold mb-4">Iniciar sesión</h1>
            <form action="#" method="POST">
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-600">Usuario</label>
                    <input type="text" id="username" name="username" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" placeholder='Ej: MARIO.ORDONEZ'/>
                </div>
        
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-600">Contraseña</label>
                    <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                </div>
        
                <div className="mb-4 flex items-center">
                    <input type="checkbox" id="remember" name="remember" className="text-blue-500"/>
                    <label htmlFor="remember" className="text-gray-600 ml-2">Recordar mi usuario</label>
                </div>
    
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
            </form>
        </div>
    </div>
  );
}