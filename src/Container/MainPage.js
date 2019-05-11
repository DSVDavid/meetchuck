import React from 'react';

function MainPage(props){

	return(
		<div className="App-main">
			{props.children}
		</div>

		);
}

export default MainPage;