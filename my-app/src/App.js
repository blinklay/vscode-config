// Императивный стиль
import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';

// function App() {
// 	return (
// 		// Декларативный стиль
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload.
// 				</p>
// 				<a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Learn React
// 				</a>
// 				<p>Текущий год: {new Date().getFullYear()}</p>
// 			</header>
// 		</div>
// 	);
// }

function App() {
	return createElement(
		"div",
		{ className: "App" },
		createElement(
			"header",
			{ className: "App-header" },
			createElement(
				"img",
				{ src: logo, className: "App-logo", alt: "logo" }
			),
			createElement(
				"p",
				null,
				"Edit ",
				createElement("code", null, "src/App.js"),
				" and save to reload."
			),
			createElement(
				"a",
				{ className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" },
				"Learn React"
			),
			createElement(
				"p",
				null,
				`Текущий год: ${new Date().getFullYear()}`
			)
		)
	)
}

export default App;
