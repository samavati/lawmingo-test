import Link from "next/link";
import MessageItem from "./MessageItem"

const MessageList = ({ users }) => {
    return (
        <div className="d-flex flex-column message-list">
            {
                users.map(user => {
                    return (
                        <Link href={"/user/posts/" + user.id} key={user.id}>
                            <a>
                                <MessageItem user={user} />
                            </a>
                        </Link>
                    );
                })
            }
        </div>
    );
}

export default MessageList;