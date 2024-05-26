import "./App.css";
import logo from "./logo.svg";
import { useState, useEffect } from "react";

function App(props) {
	const link = "https://reactjs.org";
	const [ativado, setAtivado] = useState(props.ativado);
	const [time, setTime] = useState("");

	const ativa = () => setAtivado(!ativado);

	useEffect(() => {
		const interval = setInterval(relogio, 100);
		return () => clearInterval(interval);
	}, []);

	const relogio = () => {
		const date = new Date();
		const currentTime =
			date.toLocaleTimeString() +
			"." +
			Math.floor(date.getMilliseconds() / 100);
		setTime(currentTime);
	};

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href={link}
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p>{time}</p>
				<button onClick={ativa}>{ativado ? "Desativar" : "Ativar"}</button>
				{ativado && <p>Ativado</p>}
			</header>
		</div>
	);
}

export default App;
