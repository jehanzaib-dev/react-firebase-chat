import Login from './components/login/login.jsx';
import List from './components/list/list.jsx';
import Chat from './components/chat/Chat.jsx';
import Details from './components/details/Details.jsx';




const App = () => {

    const user=false;
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
      

    </div>
  )
}

export default App