const Footer = () => {
    return (
<footer className="footer bg-neutral text-neutral-content items-center p-4">
  <aside className="grid-flow-col items-center">
  <div className="avatar">
  <div className="w-16 rounded-full">
    <img src="logo.svg" />
  </div>
</div>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a>
      <text>About Us</text>
    </a>
    <a>
      <text>Contact Us</text>
    </a>
    <a>
      <text>Privacy Policy</text>
    </a>
    <a>
      <text>Careers</text>
    </a>
  </nav>
</footer>
    );
}

export default Footer;