import { Button } from '@material-ui/core';
import React from 'react';

const Card = () => {
	const numberOfCards = 5;
	const makeCard = () => {
		const cardArray = [];
		// function getRandomInt(min, max) {
		// 	min = Math.ceil(min);
		// 	max = Math.floor(max);
		// 	return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
		// }
		// Math.random number
		const cards = { 1: 'Cat', 2: 'Diffuse', 3: 'shuffle', 4: 'explode' };
		const random = () => {
			return Math.floor(Math.random() * (5 - 1) + 1);
		};
		console.log(random());
		for (let i = 0; i < numberOfCards; i++) cardArray.push(cards[random()]);
		console.log(cardArray);

		return cardArray;
	};
	return (
		<div>
			<h3>this is card</h3>
			<h3>You need to play in this file</h3>
			<button onClick={makeCard}>random</button>
			{/* {images.map(({ id, src, title }) => (
				<img key={id} src={src} title={title} />
			))} */}
		</div>
	);
};

export default Card;
