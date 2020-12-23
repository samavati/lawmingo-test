import Link from 'next/link';
import StoryItem from './StoryItem'

const StoryList = ({ users }) => {
    return (
        <div className="d-flex flex-row py-3 story-list">
            <div className="d-flex flex-column justify-content-center align-items-center position-relative px-1">
                <div className="add-story d-flex justify-content-center align-items-center"><i className="fas fa-plus"></i></div>
                <span><strong><small>Your Story</small></strong></span>
            </div>
            {
                users.map(user => {
                    return (
                        <Link href={"/user/profile/" + user.id} key={user.id}>
                            <a>
                                <StoryItem user={user} />
                            </a>
                        </Link>
                    );
                })
            }
        </div>
    );
};
export default StoryList;