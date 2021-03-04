const isStatusInitialState = false;
const isStatusReducer = (state = isStatusInitialState,action) => {
    switch (action) {
        case "CHANGE_EDIT_STATUS":
            return !state;
        default:
            return state;
    }
}
export default isStatusReducer();