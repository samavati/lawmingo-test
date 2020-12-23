const PostItem = ({ post }) => {
    return (
        <div className="card mb-2">
            <img src={post.image} className="card-img-top" />
            <div className="card-body">
                <p className="card-text">{post.text}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    {post.tags.map(tag => <span class="badge bg-primary mx-1" key={Math.random()}>{tag}</span>)}
                </li>
                <li className="list-group-item">
                    <i class="fas fa-heart"></i> {post.likes} Likes
                </li>
            </ul>
        </div>
    );
}

export default PostItem;