var redux = require('redux');


var oldState = {
    num : ['alo' , 'cái' , 'xô'],
    isStatus: true
}

var reducer1 = (state = oldState,action) => {
    switch (action.num){
        case 'CHANGE_EDIT_STATUS' :
            return {...state,isStatus: !state.isStatus}
        case 'ADD_NEW' :
            return {...state,num:[...state.num,action.newItem]}
        case 'DELETE' :
            return {...state,num: state.num.filter((value,index) => index !== action.i)}
        default:
            return state
    }
}

var store1 = redux.createStore(reducer1);
store1.subscribe();
export default store1;