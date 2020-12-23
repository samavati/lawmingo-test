import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

const BottomNav = () => {
    const { route } = useRouter();
    const path = route.split('/')[1];
    return (
        <div className="navigation fixed-bottom d-flex justify-content-around align-items-center">
            <Link href="/profile">
                <a className={"btn bg-transparent " + (path === 'profile' ? 'active' : '')}>
                    <i className="fas fa-user"></i>
                </a>
            </Link>
            <Link href="/">
                <a className={"btn bg-transparent " + (path === '' ? 'active' : '')}>
                    <i className="fas fa-comment"></i>
                </a>
            </Link>
            <Link href="/settings">
                <a className={"btn bg-transparent " + (path === 'settings' ? 'active' : '')}>
                    <i className="fas fa-cog"></i>
                </a>
            </Link>
        </div>
    );
}

export default BottomNav;