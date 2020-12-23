const StoryItem = ({ user }) => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center px-1">
            <div className="position-relative">
                <img
                    src={user.picture}
                    alt={user.firstName}
                    className="avatar bordered" />
                <div className="avatar-badge"></div>
            </div>

            <span className="text-truncate"><strong><small>{user.firstName}</small></strong></span>
        </div>
    );
}
export default StoryItem;