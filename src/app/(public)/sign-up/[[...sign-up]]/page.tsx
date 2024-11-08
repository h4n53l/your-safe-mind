import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignUp fallbackRedirectUrl="/admin/dashboard" />;
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-0 left-0 right-0 w-full"
      >
        <path
          fill="#04936E"
          fillOpacity="1"
          d="M0,32L40,69.3C80,107,160,181,240,202.7C320,224,400,192,480,154.7C560,117,640,75,720,85.3C800,96,880,160,960,170.7C1040,181,1120,139,1200,128C1280,117,1360,139,1400,149.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
