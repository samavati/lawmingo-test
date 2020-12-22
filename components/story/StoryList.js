import StoryItem from './StoryItem'

const StoryList = () => {
    return (
        <div className="d-flex flex-row py-3 story-list">
            <div className="d-flex flex-column justify-content-center align-items-center position-relative px-1">
                <div className="add-story d-flex justify-content-center align-items-center"><i className="fas fa-plus"></i></div>
                <span><strong><small>Your Story</small></strong></span>
            </div>
            <StoryItem />
            <StoryItem />
            <StoryItem />
            <StoryItem />
            <StoryItem />
            <StoryItem />
            <StoryItem />
            <StoryItem />
            <StoryItem />
            <StoryItem />
            <StoryItem />
            <StoryItem />
            <StoryItem />
        </div>
    );
};
export default StoryList;