import dispatcher from "../dispatcher";

/* Create task function */
export function createReduxapp(text) {
	dispatcher.dispatch({
		type: "CREATE_REDUXAPP",
		text,
	});
}

/* Delete task function */
export function deleteReduxapp(id) {
	dispatcher.dispatch({
		type: "DELETE_REDUXAPP",
		id,
	});
}
