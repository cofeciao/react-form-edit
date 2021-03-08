var redux = require('redux');
const allReducer = redux.combineReducers({
    testConnet: 'connect done'
});

const store1 = redux.createStore(allReducer);
store1.subscribe({

});
export default store1;