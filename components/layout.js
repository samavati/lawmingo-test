import { useState } from "react";
import Navigation from "./navigation/BottomNav";
import SideNav from "./navigation/SIdeNav";
const Layout = ({ children }) => {
    const [navIsOpen, setNavOpen] = useState(false);
    return (
        <div className="container-fluid">
            <SideNav isOpen={navIsOpen} close={() => { setNavOpen(false) }} />
            <div className="row">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <span className="navbar-brand mb-0 h1">All Chat</span>
                        <button className="btn bg-transparent" onClick={() => { setNavOpen(true) }}>
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                </nav>
            </div>
            {children}
            <div className="row">
                <Navigation />
            </div>
        </div>
    );
}

export default Layout;