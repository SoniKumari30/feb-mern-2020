// npm install redux
const { createStore, combineReducers } = require('redux') 

const countReducer = (state = 0, action) => {
    switch(action.type){
        case 'INCREMENT' : {
            return state + 1
        }
        case 'DECREMENT' : {
            return state - 1
        }
        case 'RESET' : {
            return 0 
        }
        case 'INCREMENT_BY' : {
            return state + action.payload
        }
        default: {
            return state
        }
    }
}

const store = createStore(combineReducers({
    count: countReducer
}))

// get initial state 
console.log(store.getState())

// subscribe to store 
store.subscribe(() => {
    console.log(store.getState())
})

// action generator 
const increment = () => {
    return { type: 'INCREMENT'} // action
}

const decrement = () => {
    return { type: 'DECREMENT'} // action
}

const reset = () => {
    return { type: 'RESET'}
}

const incrementBy = (n) => {
    return { type: 'INCREMENT_BY', payload: n}
}

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(reset())
store.dispatch(incrementBy(10))

// dispatch decrement() to the store, to decrease the value of count by 1

// dispatch reset() to the store, to reset the value of count to 0

// dispatch incrementBy(10) to the store, to add 10 the count 