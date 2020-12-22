const MessageItem = () => {
    return (
        <div className="d-flex">
            <div className="position-relative mx-3">
                <img
                    src="/avatar-exemple.jpg"
                    alt="Picture of the author"
                    className="avatar" />
                <div className="avatar-badge"></div>
            </div>
            <div className="d-flex flex-column">
                <p className="h6 mb-1">Ehsan</p>
                <p className="fw-lighter">samavati.ehsan@yahoo.com</p>
            </div>
        </div>
    );
}

export default MessageItem;