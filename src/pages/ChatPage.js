import "./ChatPage.css"
import Navbar from "../components/navbar/Navbar"

const ChatPage = () => {
  return (
    <div className="conv-page">
      <Navbar height="127px"/>
      <div className="conv-page-wrapper">
        <div className="conv-page-conv-list">
          <div className="conv-page-conv-list-header">

          </div>
          <div className="conv-page-conv-list-search">

          </div>
          <div clasName="conv-page-conv-list-conversations">

          </div>
        </div>
        <div className="conv-page-conv-window">
          <div className="conv-page-conv-window-header">

          </div>
          <div className="conv-page-conv-window-messages">

          </div>
          <div className="conv-page-conv-window-type">

          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatPage