import './chat.css';
import EmojiPicker from 'emoji-picker-react';
import {useState} from 'react';

const Chat=()=>{
	const [open, setOpen]=useState(false);
	const [text, setText]=useState('');


	const handleEmoji=(e)=>{
		setText(prev=>prev+e.emoji);
		setOpen(false);
	}

	return(
		<div className='chat'>
		<div className="top">
			<div className="user">
			<img src="./avatar.png" alt="image"/>
			<div className="texts">
				<span>John Doe</span>
				<p>hello from my side</p>
			</div>
		</div>
			<div className="icons">
			<img src="./phone.png" alt="phone"/>
			<img src="./video.png" alt="video"/>
			<img src="./info.png" alt="info"/>
		</div>
		</div>
		<div className="center">
				Center
		</div>
		<div className="bottom">
			<div className="icons">
				<img src="./img.png" alt="image"/>
				<img src="./camera.png" alt="camera"/>
				<img src="./mic.png" alt="mic"/>
			</div>
			<input type="text" value={text} placeholder="Type a message..." onChange={(e)=>setText(e.target.value)}/>
			<div className="emoji">
				<img src="emoji.png" alt="emoji" onClick={()=>setOpen(prev=>!prev)}/>
				<div className="pickerContainer">
				<EmojiPicker open={open} onEmojiClick={handleEmoji}/>
					</div>
			</div>
			<button className="sendButton">Send</button>
		</div>	
		






		</div>
		)
}
export default Chat;