/* eslint no-console: ["error", { allow: ["log", warn", "error"] }] */
import React from 'react';
import { render } from 'react-dom';

const MyTitle = function createMyTitle(props) {
	return (
		<div>
			<h1 style={{ color: props.color }}>{props.title}</h1>  
		</div>
	);
};

const MyFirstComponent = function createMyFirstComponent() {
	return (
		<div id="my-first-component">
			<MyTitle title="Game of thrones" color="tomato" />
			<MyTitle title="House of Cards" color="rebeccapurple" />
			<MyTitle title="Orange is the New Black" color="peru" />
			<MyTitle title="Stranger Things" color="burlywood" />
		</div>
	);
};

render(<MyFirstComponent/>, document.getElementById('app'));
