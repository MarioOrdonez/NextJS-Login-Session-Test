import { Link} from "@nextui-org/link";
import { Button} from "@nextui-org/button";
import { auth } from "@/auth.config";

export default async function Home() {

  const session = await auth();

  return (
    <div className=' h-screen flex justify-center'>
      
      <h1>Home page</h1>
      
    </div>

  );
}
