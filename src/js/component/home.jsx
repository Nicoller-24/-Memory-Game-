import React, { useState } from "react";
import { useEffect } from "react";




//create your first component
const Home = () => {
	const cardData = [
		{ id: 1, content: '🐶', matched: false },
		{ id: 2, content: '🐶', matched: false },
		{ id: 3, content: '🐱', matched: false },
		{ id: 4, content: '🐱', matched: false },
		{ id: 5, content: '🐰', matched: false },
		{ id: 6, content: '🐰', matched: false },
		{ id: 7, content: '🐸', matched: false },
		{ id: 8, content: '🐸', matched: false },
		{ id: 9, content: '🐧', matched: false },
		{ id: 10, content: '🐧', matched: false },
		{ id: 11, content: '🐽', matched: false },
		{ id: 12, content: '🐽', matched: false },
	];

	const [selected, setSelected] = useState([])
	const [cards, setCards] = useState([])

	useEffect(() => {
		if (selected.length === 2) {
			if (selected[0].content === selected[1].content) {
				selected[0].matched = true;
				selected[1].matched = true;
			}
			setTimeout(() => {
				let aux = 0;
				cards.forEach(element => {
					element.matched ? aux++ : '';
					aux === cards.length && alert('GANASTE!!!!');
				});
			}, 0)
			setTimeout(() => {
				setSelected(prev => prev = []);
			}, 800)
		}
	}, [selected])

	const handleClick = (card) => {
		if (selected.length < 2 && !selected.includes(card)) {
			setSelected(prev => prev = [...prev, card]);
		}
	}

	const shuffle = () => cardData.sort(() => Math.random() -0.5 )

	useEffect (()=>{
		setCards(prev => prev = shuffle())
	}, [])

	return (
		<div className="memory-game">
			{cards.map((card) => (
				<div
					key={card.id}	
					className="card"
					onClick={()=>handleClick(card)}
				>
					{card.content}
				</div>
			))}
		</div>

	);
};

export default Home;
