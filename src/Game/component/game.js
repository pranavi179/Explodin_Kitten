import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
const Game = () => {
	return (
		<div>
			{/* <Button>
				<Link to={'/'}>Start Game</Link>
			</Button>{' '} */}
			<Button>
				<Link
					to={'/card'}
					style={{ textDecoration: 'none', textAlign: 'center' }}
				>
					Start Game
				</Link>
			</Button>{' '}
		</div>
	);
};

export default Game;
