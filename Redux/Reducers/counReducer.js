import { COUNTER_CHANGE, INCREMENTCOUNT, DECREMENTCOUNT } from "../Constants";


const initialStale = {
    count: 1
}

const countReducer = (state = initialStale, action) => {
    switch (action.type) {
        case 'INCREMENTCOUNT':
            return {
                ...state,
                count: state.count + 1
            }
        // case 'INCREMENT_IF_ODD':
        //     return (state % 2 !== 0) ? state.count + 1 : state
        case 'DECREMENTCOUNT':
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state
    }
}
export default countReducer;