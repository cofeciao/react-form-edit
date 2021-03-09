import Test from './reducer/test';

var redux = require('redux');

const allReducers = redux.combineReducers({
    testConnect: Test
});

const store1 = redux.createStore(allReducers);
store1.subscribe(() => {
    store1.getState();
});
export default store1;