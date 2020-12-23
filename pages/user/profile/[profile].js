import { useRouter } from 'next/router'
import Layout from "../../../components/layout"

const Profile = () => {
    const router = useRouter()
    const { profile } = router.query
    return (
        <Layout title="Profile">
            <div className="row">
                <div className="main-section">
                    <img src="/avatar-exemple.jpg" className="avatar" />
                    <p>Post: {profile}</p>
                </div>
            </div>
        </Layout>
    );
}

export default Profile;