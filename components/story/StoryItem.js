const StoryItem = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center px-1">
            <div className="position-relative">
                <img
                    src="/avatar-exemple.jpg"
                    alt="Picture of the author"
                    className="avatar bordered" />
                <div className="avatar-badge"></div>
            </div>

            <span><strong><small>Ehsan</small></strong></span>
        </div>
    );
}
export default StoryItem;