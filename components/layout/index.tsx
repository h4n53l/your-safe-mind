import CookieFloater from "./CookieFloater";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({children}: any) => {
    return (
        <>
        <Navbar />
        <CookieFloater />
            {children}
        <Footer />
         </>
    );
}

export default Layout;