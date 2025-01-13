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

	const  handleClick = (card)  => {

	}

	return (
		<div>
			{cardData.map((item) => (
				<div
					key={item.id}	
					className="card"
					onClick={()=>handleClick(item)}
				>
					{item.content}
				</div>
			))}
		</div>

	);
};

export default Home;
