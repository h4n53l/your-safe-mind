'use client'
import { Navbar } from "flowbite-react";


const Header = () => {
    return (
<Navbar fluid rounded>
      <Navbar.Brand href="/">
        <img
          src="logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Your Safe Mind Logo"
        />
        <span className="self-center whitespace-nowrap text-xl text-green-500 font-semibold dark:text-secondary">
          Your Safe Mind
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/navbars">Book a Session</Navbar.Link>
        <Navbar.Link href="/navbars">About Us</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    );
}

export default Header;