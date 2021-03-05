import numReducer from './reducer/numReducer';
import isStatusReducer from "./reducer/isStatusReducer";
var redux = require('redux');

const allReducers = redux.combineReducers({
    num: numReducer,
    isStatus: isStatusReducer,
});

const store1 = redux.createStore(allReducers);
store1.subscribe(() => {
    store1.getState();
});

export default store1;