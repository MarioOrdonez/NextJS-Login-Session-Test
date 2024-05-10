import { auth } from "@/auth.config";
import Image from 'next/image';

export default async function Home() {

  const session = await auth();

  return (
    <div className=' h-screen flex flex-col gap-4 justify-center'>
      
      <Image 
          className='place-self-center'
          width={150}
          height={135}
          src={'/logo_so_without_letters.svg'}
          alt='Logo Sales Operations'
      />

      {
        !session?.user 
          ? (
            <h3 className="self-center text-[#eb8600] font-bold">No tienes una sesión iniciada</h3>
          )
          : (
            <h3 className="self-center font-bold">Bienvenido(a) {session.user.names} </h3>
          )
      }
      
    </div>

  );
}
