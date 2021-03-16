import GetDatareducer from './reducer/GetDatareducer';
var redux = require('redux');

const allReducers = redux.combineReducers({
    getData: GetDatareducer
});

const store1 = redux.createStore(allReducers);
store1.subscribe(() => {
    store1.getState();
});
export default store1;