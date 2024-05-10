import { auth } from "@/auth.config";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (!session?.user){
    // redirect('/auth/login?returnTo=/home')
    redirect('/dashboard')
  }

  return (
    <>
      <span className="text-3xl">He iniciado sesión</span>

      <pre>
        {
          JSON.stringify(session.user, null, 2)
        } 
      </pre>
    </>
  );
}
