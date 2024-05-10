import { auth } from "@/auth.config";
import { CustomNavbar } from "@/components";
import { redirect } from "next/navigation";

export default async function HomeLayout({
 children
}: {
 children: React.ReactNode;
}) {

  const session = await auth();

  if (!session?.user){
    // redirect('/auth/login?returnTo=/home')
    redirect('/auth/login')
  }
  return (
    <>
      <CustomNavbar />
      {children}
    </>
  );
}