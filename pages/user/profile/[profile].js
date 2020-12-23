import { useRouter } from 'next/router'
import Layout from "../../../components/layout"

const Profile = () => {
    const router = useRouter()
    const { profile } = router.query
    return (
        <Layout title="Profile">
            <div className="row">
                <div className="main-section">
                    <img src="/avatar-exemple.jpg" className="avatar big" />
                    <p>
                        mr. Heinz-Georg Fiedler
                    </p>
                    <p>
                        Gender: Male
                    </p>
                    <p>
                        Date Of Birth: Mar 13 1974
                    </p>
                    <p>
                        Register Date: Mar 07 2020
                    </p>
                    <p>
                        Email: heinz-georg.fiedler@example.com
                    </p>
                    <p>
                        Phone: 0700-3090279
                    </p>
                </div>
            </div>
        </Layout>
    );
}

export default Profile;