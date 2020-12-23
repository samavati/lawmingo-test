import Link from "next/link";
import MessageItem from "./MessageItem"

const MessageList = () => {
    return (
        <div className="d-flex flex-column message-list">
            <Link href="/user/posts/Ehsan">
                <MessageItem />
            </Link>
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />

        </div>
    );
}

export default MessageList;