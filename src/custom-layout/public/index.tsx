import { UserButton, useUser } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function PublicLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthRoute = pathname.includes("/sign");
  const { isSignedIn, user, isLoaded } = useUser()

  return (
    <div>
      {!isAuthRoute && (
        // <>
        // <div className="flex justify-between items-center py-5 px-10 bg-primary">
          
        //   <Link className="text-white text-2xl font-bold" href="/">
        //     Your Safe Mind
        //   </Link>
        //   { user ?
        //   <UserButton/>
        //   :
        //   <Link className="text-sm text-white underline" href="sign-in">
        //     Sign-in
        //   </Link>
        //   }

        // </div>
        <div className="navbar bg-primary">
        <div className="flex-1">
          {/* <img src="logo.svg" className="h-20"/> */}
          <a className="btn btn-ghost text-xl" href="/">YOUR SAFE MIND</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a>Link</a></li>
          </ul>
        </div>
      </div>
      )}
      {children}
    </div>
  );
}

export default PublicLayout;
