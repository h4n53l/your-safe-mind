const Navbar = () => {
    return (
<div className="navbar bg-base-100">
  <div className="flex-1">
<div className="avatar">
  <div className="w-16 rounded-full">
    <img src="logo.svg" />
  </div>
</div>
    <a href="/"><h1 className="text-3xl font-bold font-serif uppercase px-2 text-primary">Your Safe Mind</h1></a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 font-semibold text-primary">
      <li><a>About Us</a></li>
      <li><a>Book a Session</a></li>
      <li><a>Privacy Policy</a></li>
    </ul>
  </div>
</div>
    );
}

export default Navbar;