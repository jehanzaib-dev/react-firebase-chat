import List from './components/list/list.jsx';
import Chat from './components/chat/Chat.jsx';
import Details from './components/details/Details.jsx';




const App = () => {
  return (
    <div className='container'>
      <List/>
      <Chat/>
      <Details/>

    </div>
  )
}

export default App