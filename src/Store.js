import numReducer from './reducer/numReducer';
import isStatusReducer from "./reducer/isStatusReducer";

var redux = require('redux');
var oldState = {
    num : ['alo' , 'cái' , 'xô'],
    isStatus: true
}

var reducer1 = (state = oldState,action) => {
    switch (action.num){
        case "ADD_NEW" :
            return [...state,action.newItem];
        case 'DELETE' :
            return state.num.filter((value,index) =>
                index !== action.index
            );
        default:
            return state
    }
}

// const numInitialState = ['alo' , 'cái' , 'xô'];
// const numReducer = (state = numInitialState,action) => {
//     switch (action.type) {
//         case "ADD_NEW" :
//             return [...state,action.newItem];
//         case 'DELETE' :
//             return state.num.filter((value,index) =>
//                 index !== action.index
//             );
//     }
// }
//
// const isStatusInitialState = ['alo' , 'cái' , 'xô'];
// const isStatusReducer = (state = isStatusInitialState,action) => {
//     switch (action.type) {
//         case "CHANGE_EDIT_STATUS" :
//             return {...state,isStatus:!state.isStatus};
//     }
// }

const allReducers = redux.combineReducers({
    num: numReducer,
    isStatus: isStatusReducer,
})

var store1 = redux.createStore(reducer1);
store1.subscribe(() => {
    store1.getState();
});




store1.dispatch({type: "CHANGE_EDIT_STATUS"});
store1.dispatch({type: "ADD_NEW",
                        newItem: 'tai trau'
                        });
export default store1;