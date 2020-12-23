import Layout from "../components/layout";
import MessageList from "../components/message/MessageList";
import StoryList from "../components/story/StoryList";

export default function Home() {
  return (
    <Layout>
      <div className="row">
        <StoryList />
      </div>
      <div className="row">
        <MessageList />
      </div>
    </Layout>
  );
}
