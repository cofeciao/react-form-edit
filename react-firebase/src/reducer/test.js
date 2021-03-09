const testInitialState = 'test connect done';
const testReducer = (state = testInitialState,action) => {
    switch (action) {
        case 'TEST_CONNECT':
            return state;
        default:
            return state;
    }
}
export default testReducer;