import { UserButton } from "@clerk/nextjs";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";

function HomePage() {
  return (
    <div>
    <div className="flex justify-between items-center p-5 bg-primary">
<Link 
className="text-white text-2xl font-bold"
href="/"
>
  Your Safe Mind
  </Link>
<Link 
className="text-white text-sm underline"
href="sign-in"
>
  Sign-in
  </Link>
  <UserButton />

    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 mt-48">
      <div className="px-10">
        <h1 className="text-4xl font-bold text-primary">
          Welcome to Your Safe Mind
          </h1>
          <p className="text-sm">
            Blah blah blah
          </p>
          <div className="flex gap-5">
            <Button>View Services</Button>
            <Button>Book an Appointment</Button>
          </div>
      </div>
    </div>
    </div>
  );
}

export default HomePage;