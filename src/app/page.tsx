import { Link} from "@nextui-org/link";
import { Button} from "@nextui-org/button";


export default function Home() {
  return (
    <div className=' h-screen flex justify-center'>
      
      <Button 
        href="./auth/login"
        as={Link}
        color="primary"
        showAnchorIcon
        variant="bordered"
        className="self-center"
      >
        Ir a Login
      </Button>
    </div>

  );
}
