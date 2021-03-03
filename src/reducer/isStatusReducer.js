const isStatusInitialState = false;
const isStatusReducer = (state = isStatusInitialState,action) => {
    switch (action.type) {
        case "CHANGE_EDIT_STATUS":
            return !state;
        default:
            return state;
    }
}
export default isStatusReducer();