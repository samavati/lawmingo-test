import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import Navigation from "./navigation/BottomNav";
import TopNav from './navigation/TopNav';

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Layout = ({ children, title }) => {
    return (
        <div className="container-fluid">
            <Head>
                <title>Test Application</title>
            </Head>
            <TopNav title={title} />
            {children}
            <div className="row">
                <Navigation />
            </div>
        </div>
    );
}

export default Layout;