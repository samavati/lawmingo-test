import { connect } from 'react-redux';
import { wrapper } from './../shared/store';
import Layout from "../components/layout";
import MessageList from "../components/message/MessageList";
import StoryList from "../components/story/StoryList";
import customAxios from "../shared/axios.instance";

const Home = ({ users }) => {
  return (
    <Layout title="All Chats">
      <div className="row">
        <StoryList users={users} />
      </div>
      <div className="row">
        <MessageList users={users} />
      </div>
    </Layout>
  );
}
export default connect((state) => state)(Home);

export const getStaticProps = wrapper.getStaticProps(
  async ({ store }) => {
    const res = await customAxios.get('/user');
    const data = await res.data;
    store.dispatch({ type: 'ADD_USER', payload: data.data })
  }
);