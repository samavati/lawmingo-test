import { useState } from "react";
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import Navigation from "./navigation/BottomNav";
import SideNav from "./navigation/SIdeNav";

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Layout = ({ children, title }) => {
    const [navIsOpen, setNavOpen] = useState(false);
    return (
        <div className="container-fluid">
            <Head>
                <title>Test Application</title>
            </Head>
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
            {children}
            <div className="row">
                <Navigation />
            </div>
        </div>
    );
}

export default Layout;