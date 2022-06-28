import { COUNTER_CHANGE, INCREMENTCOUNT, DECREMENTCOUNT } from "../Constants";
export function changeCount(count) {
    console.log('acction')
    return {
        type: COUNTER_CHANGE,
        payload: count
    }
}
export function Increment(count) {
    console.log('acction')
    return {
        type: INCREMENTCOUNT,
        payload: count
    }
}
export function Decrement(count) {
    console.log('acction2')
    return {
        type: DECREMENTCOUNT,
        payload: count
    }
}