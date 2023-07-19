// redux - redux store - store 
// global object - properties & methods

const store = {
    state: {
        count: 0
    },
    getState: function(){
        return this.state
    },
    dispatch: function(action){
        switch(action.type) {
            case 'INCREMENT' : {
                this.state.count++ 
                return this.state 
            }
            case 'DECREMENT' : {
                this.state.count-- 
                return this.state
            }
            case 'RESET' : {
                this.state.count = 0
                return this.state
            }
            case 'INCREMENT_BY' : {
                this.state.count += action.payload 
                return this.state
            }
            default: {
                return this.state 
            }
        }
        // if(action.type == 'increment') {
        //     this.state.count++ 
        // } else if(action.type == 'decrement') {
        //     this.state.count--
        // } else if(action.type == 'reset') {
        //     this.state.count = 0
        // } else if(action.type == 'increment_by') {
        //     this.state.count += action.payload
        // }
    }
}

console.log(store)
console.log(store.getState())

// action generator or action creator 
// a function that returns an action 
function increment() {
    return { type: 'INCREMENT' } // actions are objects which contain a type property, it indicates what type of action is to be performed on the state
}

function decrement() {
    return { type: 'DECREMENT'}
}

function reset() {
    return { type: 'RESET'}
}

function incrementBy(n) {
    return { type: 'INCREMENT_BY', payload: n} 
    // payload property, contains the info to be used inside the store
}

store.dispatch(increment())
store.dispatch(increment())
console.log(store.getState())

store.dispatch(decrement())
console.log(store.getState())

store.dispatch(reset())
console.log(store.getState()) // 0

store.dispatch(incrementBy(5))
console.log(store.getState())

store.dispatch(incrementBy(3))
console.log(store.getState())