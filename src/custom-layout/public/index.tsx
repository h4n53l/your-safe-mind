import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function PublicLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthRoute = pathname.includes("/sign");
  return (
    <div>
      {!isAuthRoute && (
        <div className="flex justify-between items-center py-5 px-10 bg-primary">
          <Link className="text-white text-2xl font-bold" href="/">
            Your Safe Mind
          </Link>
          <Link className="text-sm text-white underline" href="/sign-in">
            Sign-in
          </Link>
        </div>
      )}
      {children}
    </div>
  );
}

export default PublicLayout;
