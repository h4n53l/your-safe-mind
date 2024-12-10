import CookieFloater from "./CookieFloater";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({children}: any) => {
    return (
        <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <div
        className="flex-grow"
        >
        <CookieFloater />
            {children}
            </div>
        <Footer />
         </div>
    );
}

export default Layout;