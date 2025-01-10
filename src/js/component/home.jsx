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
	return (
		<div
		style={{
			display: "flex",
			flexWrap: "wrap",
			gap: "24px",
			justifyContent: "center",
			alignItems: "center",
			height: "100vh", // Ajustar al tamaño completo de la ventana
			padding: "16px",
			boxSizing: "border-box",
		}}
	>
		{cardData.map((item) => (
			<div
				key={item.id}
				style={{
					width: "calc(25% - 12px)", // Cuatro tarjetas por fila
					height: "calc(25% - 12px)", // Tamaño proporcional para ajustar al viewport
					position: "relative",
					border: "1px solid #ddd",
					borderRadius: "8px",
					backgroundColor: "#f8f9fa",
					boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
				}}
			>
				<div
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<span
						style={{
							fontSize: "calc(1.5vw + 1rem)", // Tamaño dinámico del ícono
						}}
					>
						{item.content}
					</span>
				</div>
			</div>
		))}
	</div>

	);
};

export default Home;
