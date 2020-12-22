import MessageList from "../components/message/MessageList";
import Navigation from "../components/navigation/BottomNav";
import SideNav from "../components/navigation/SIdeNav";
import StoryList from "../components/story/StoryList";

export default function Home() {
  return (
    <div className="container-fluid">
      <SideNav />
      <div className="row">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">All Chat</span>
            <button className="btn bg-transparent">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </nav>
      </div>
      <div className="row">
        <StoryList />
      </div>
      <div className="row">
        <MessageList />
      </div>
      <div className="row">
        <Navigation />
      </div>
    </div>
  )
}
