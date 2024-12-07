import Bottom from "./Bottom";
import Navbar from "./Header";

const Layout = ({children}: any) => {
    return (
        <>
        <Navbar />
            {children}
        <Bottom />
         </>
    );
}

export default Layout;