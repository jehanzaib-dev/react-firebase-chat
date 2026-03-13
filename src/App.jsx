import Login from './components/login/login.jsx';
import List from './components/list/list.jsx';
import Chat from './components/chat/Chat.jsx';
import Details from './components/details/Details.jsx';
import Notification  from './components/notification/notification.jsx';




const App = () => {

    const user=true;
  return (
    <div className='container'>
      {
        user ?(
          <>
          <List/>
          <Chat/>
          <Details/>    
          </>
          ):(
          <Login/>
          )
      }
      <Notification/>

    </div>
  )
}

export default App