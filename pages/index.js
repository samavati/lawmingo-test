import Layout from "../components/layout";
import MessageList from "../components/message/MessageList";
import StoryList from "../components/story/StoryList";

export default function Home() {
  return (
    <Layout title="All Chats">
      <div className="row">
        <StoryList />
      </div>
      <div className="row">
        <MessageList />
      </div>
    </Layout>
  );
}


// dummy api app-id: 5fe305f7853604ae46f461d9