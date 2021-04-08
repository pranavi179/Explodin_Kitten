// start Game
// remove Card
// defuse card
// explode card
// shuffle card
// cat card
// game over
// game won
//initial state

// import { START_GAME } from '../../types';
import * as All from '../../types';
const initialState = { cardArray: [], defuseCard: 0, result: '' };
const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case All.START_GAME:
			return { state, difuseCard: 0 };
		case All.GAME_OVER:
			return { state, result: 'Game Over' };
		case All.GAME_WON:
			return { state, result: 'Congratulations ,You won the game' };
		case All.REMOVE_CARD:
			return { state, cardArray: [] };
		case All.DEFUSE_CARD:
			return { state, defuseCard: 0, res: 'Can use later' };
		case All.EXPLODE_CARD:
			return { state, cardArray: [], res: 'Exploded,Game Over' };
		case All.SHUFFLE_CARD:
			return { state, result: 'Game restart and shuffled' };
		case All.CAT_CARD:
			return { state, cardArray: [], res: 'Remove card and continue playing' };
	}
};
export default rootReducer;
