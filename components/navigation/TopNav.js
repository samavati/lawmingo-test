import { useState } from "react";
import SideNav from './../navigation/SIdeNav';

const TopNav = ({ title }) => {
    const [navIsOpen, setNavOpen] = useState(false);
    return (
        <>
            <SideNav isOpen={navIsOpen} close={() => { setNavOpen(false) }} />
            <div className="row">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <span className="navbar-brand mb-0 h1">{title}</span>
                        <button className="btn bg-transparent" onClick={() => { setNavOpen(true) }}>
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default TopNav;