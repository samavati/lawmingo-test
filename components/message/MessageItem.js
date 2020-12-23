const MessageItem = ({ user }) => {
    return (
        <div className="d-flex">
            <div className="position-relative mx-3">
                <img
                    src={user.picture}
                    alt={user.firstName}
                    className="avatar" />
                <div className="avatar-badge"></div>
            </div>
            <div className="d-flex flex-column">
                <p className="h6 mb-1">{user.firstName}</p>
                <p className="fw-lighter">{user.email}</p>
            </div>
        </div>
    );
}

export default MessageItem;