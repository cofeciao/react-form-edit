const numInitialState = ['alo' , 'cái' , 'xô'];
const numReducer = (state = numInitialState,action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state,action.newItem];
        case 'DELETE' :
            return state.num.filter((value,index) =>
                index !== action.index
            );
        default :
                return state;
    }
}
export default numReducer();