import { Button } from "antd";
import Link from "next/link";
import React from "react";

function Homepage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-20">
      <div className="px-10 flex flex-col gap-7 justify-center">
        <h1 className="text-4xl font-bold text-primary">
          Welcome to Your Safe Mind
        </h1>
        <p className="text-sm">
          We provide the best medical services for all our patients. We have the
          best doctors and nurses to take care of you. We are open 24/7 to take
          care of you. We are here to serve you. We provide the best medical
          services for all our patients. We have the best doctors and nurses to
          take care of you. We are open 24/7 to take care of you. We are here to
          serve you.
        </p>
        <div className="flex gap-5 flex-wrap">
          <Button>
            <Link href="/services">View Services</Link>
          </Button>
          <Button>
            <Link href="/appointment-confirmation">Download Appointment</Link>
          </Button>
          <Button type="primary">
            <Link href="/book-appointment">Book an Appointment</Link>
          </Button>
        </div>
      </div>
      <div className="flex justify-center">
        <img src="./logo.gif" className="h-[500px]" />
      </div>
    </div>
  );
}

export default Homepage;
