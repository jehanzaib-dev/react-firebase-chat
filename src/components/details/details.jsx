import './details.css';

const Details=()=>{
	return(
		<div className="details">
		<div className="user">
		<img src="./avatar.png" alt="image"/>
		<h2>John Doe</h2>
		<p>the user description</p>
		</div>
		<div className="info">
			<div className="options">
			<div className="title">
			<span>Chat Settings</span>
			<img src="./arrowUp.png" alt="icon"/>
			</div>
			</div>
			<div className="options">
			<div className="title">
			<span>Chat Settings</span>
			<img src="./arrowUp.png" alt="icon"/>
			</div>
			</div>
			<div className="options">
			<div className="title">
			<span>Privacy & help</span>
			<img src="./arrowUp.png" alt="icon"/>
			</div>
			</div>
			<div className="options">
			<div className="title">
			<span>Shared Photos</span>
			<img src="./arrowDown.png" alt="icon"/>
			</div>
			<div className="photos">
			<div className="photoItem">
			<div className="photoDetail">
			<img src="./cat.jpg" alt="cat"/>
			<span>Cat photo</span>
			</div>
			<img src="download.png" alt="download" className="downloadIcon"/>
			</div>
			<div className="photoItem">
			<div className="photoDetail">
			<img src="./cat.jpg" alt="cat"/>
			<span>Cat photo</span>
			</div>
			<img src="download.png" alt="download" className="downloadIcon"/>
			</div>
			<div className="photoItem">
			<div className="photoDetail">
			<img src="./cat.jpg" alt="cat"/>
			<span>Cat photo</span>
			</div>
			<img src="download.png" alt="download" className="downloadIcon"/>
			</div>
			<div className="photoItem">
			<div className="photoDetail">
			<img src="./cat.jpg" alt="cat"/>
			<span>Cat photo</span>
			</div>
			<img src="download.png" alt="download" className="downloadIcon"/>
			</div>
			<div className="photoItem">
			<div className="photoDetail">
			<img src="./cat.jpg" alt="cat"/>
			<span>Cat photo</span>
			</div>
			<img src="download.png" alt="download" className="downloadIcon"/>
			</div>
			
			</div>
			</div>
			<div className="options">
			<div className="title">
			<span>Shared files</span>
			<img src="./arrowUp.png" alt="icon"/>
			</div>
			</div>
		<button>Block User</button>

		</div>








		</div>
		)
}

export default Details;