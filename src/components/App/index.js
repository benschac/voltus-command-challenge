import React from "react";
import {get} from "axios";
/**
 * The Main App Component
 * 
 * @class App
 */
class App extends React.Component {
	async onClick() {
		const APIURL = "http://challenge.voltus.co/facilities/1";
		let response;
		try {
			response = await get(APIURL);
		} catch (err) {
			console.error(`Error in App ${err}`); //eslint-disable-line
		}
    
		console.log({response}, "from try async await");
	}
  
	/** @inheritDoc */
	render() {
		return (
			<button onClick={this.onClick}>Click me!</button>
		);
	}
}

export default App;