// import { Button } from '@material-ui/core';
import './App.css';
import Card from './Game/component/card';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Game from './Game/component/game';

function App() {
	return (
		<div className='App'>
			<Router>
				<Route exact path='/' component={Game} />
				<Route path='/card' component={Card} />
			</Router>
			{/* <Button color='primary' onClick={handleClick}>
				Enter into the game
			</Button> */}
			{/* <Card /> */}
		</div>
	);
}

export default App;
