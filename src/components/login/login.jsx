import './login.css';
import {useState} from 'react';
import {toast} from 'react-toastify';



const Login=()=>{

	const [avatar, setAvatar]=useState({
		file:null,
		url:""
	});

	const handleAvatar=(e)=>{
		if(e.target.files[0]){
		setAvatar({
			file:e.target.files[0],
			url:URL.createObjectURL(e.target.files[0])
		});
		}
	}
	const handleSubmit=(e)=>{
		e.preventDefault();
	}

	return(
		<div className="login">
		<div className="item">
		<h2>Welcome Back,</h2>
		<form onSubmit={handleSubmit}>
		<input type="email" placeholder="Email" name="email"/>
		<input type="password" placeholder="Password" name="password"/>
		<button>Sign In</button>

		</form>
		</div>
		<div className="seperator">

		</div>
		<div className="item">
		<h2>Create an Account</h2>
		<form>
		
		<label for="file"><img src={avatar.url || "./avatar.png"} alt="image"/>Upload a file</label>
		<input type="file" id="file" style={{display:"none"}} onChange={handleAvatar}/>
		<input type="text" placeholder="Username" name="username"/>
		<input type="email" placeholder="Email" name="email"/>
		<input type="password" placeholder="Password" name="password"/>
		<button>Sign Up</button>
		</form>
		</div>








		</div>
	)
}
export default Login;