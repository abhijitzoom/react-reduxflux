import { EventEmitter } from 'events';
 
import dispatcher from '../dispatcher';
 
class ReduxappStore extends EventEmitter {
    constructor() {
        super();
 
        this.reduxapps = [
            {
                id: 16561,
                text: 'hello'
            },
            {
                id: 16562,
                text: 'another reduxapp'
            },
        ];
    }
 
    createReduxapp(text) {
        const id = Date.now();
 
        this.reduxapps.push({
            id,
            text
        });
 
        this.emit('change');
    }
 
    deleteReduxapp(id) {
        this.reduxapps = this.reduxapps.filter((elm) => {
            return (elm.id !== id);
        });
        this.emit('change');
    }
 
    getAll() {
        return this.reduxapps;
    }
 
    handleActions(action) {
        switch (action.type) {
            case 'CREATE_REDUXAPP': {
                this.createReduxapp(action.text);
                break;
            }
            case 'DELETE_REDUXAPP': {
                this.deleteReduxapp(action.id);
                break;
            }
            default: {
                //action = action;
                break;
            }
        }
    }
}
 
const reduxappStore = new ReduxappStore();
dispatcher.register(reduxappStore.handleActions.bind(reduxappStore));
export default reduxappStore;