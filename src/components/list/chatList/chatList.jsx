import './chatList.css';
import AddUser from './addUser/addUser.jsx';
import {useState} from 'react';


const ChatList=()=>{
	const [addMode, setAddMode]=useState(false);


	return(
		<div className="chatList">
		<div className="search">
		<div className="searchBar">
		<img src="./search.png"/>
		<input type="text" placeholder="Search"/>
		</div>
		<img className="add" src={addMode?"./minus.png":"./plus.png"} alt="add" onClick={()=>setAddMode(prev=>!prev)}/>
		</div>
		<div className="item">
			<img src="avatar.png" alt="image"/>
			<div class="texts">
			<span>John Doe</span>
			<p>Text</p>
		</div>

		</div>
		<div className="item">
			<img src="avatar.png" alt="image"/>
			<div class="texts">
			<span>John Doe</span>
			<p>Text</p>
		</div>

		</div>
		<div className="item">
			<img src="avatar.png" alt="image"/>
			<div class="texts">
			<span>John Doe</span>
			<p>Text</p>
		</div>

		</div>
		<div className="item">
			<img src="avatar.png" alt="image"/>
			<div class="texts">
			<span>John Doe</span>
			<p>Text</p>
		</div>

		</div>
		<div className="item">
			<img src="avatar.png" alt="image"/>
			<div class="texts">
			<span>John Doe</span>
			<p>Text</p>
			</div>

		</div>
		





		<AddUser/>
		</div>
		)

}
export default ChatList;