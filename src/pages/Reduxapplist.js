import React from 'react';
import Reduxapp from '../components/Reduxapp';
import ReduxappStore from '../stores/ReduxappStore.js';
import * as ReduxappActions from '../actions/ReduxappActions';

export default class Reduxapplist extends React.Component {
	constructor() {
		super();

		this.state = {
			reduxapps: ReduxappStore.getAll(),
		};
		this.inputContent = '';
	}

	// We start listening to the store changes
	componentWillMount() {
		ReduxappStore.on("change", () => {
			this.setState({
				reduxapps: ReduxappStore.getAll(),
			});
		});
	}

	render() {

		const ReduxappComp = this.state.reduxapps.map(reduxapp => {
			return <Reduxapp key={reduxapp.id} {...reduxapp} />;
		});

		return (
			<div>
				<h1> Reduxapp list</h1>
				<input type="text" onChange=
					{(evt) => this.inputContent = evt.target.value} />
				<button onClick={() => ReduxappActions
					.createReduxapp(this.inputContent)}>Create!</button>
				<ul>{ReduxappComp}</ul>
			</div>
		);
	}
}
