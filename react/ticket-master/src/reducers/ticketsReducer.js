const userInitialState=[]
const ticketsReducer=(state=userInitialState, action)=>{
     switch(action.type){
         case 'SET_TICKET':{
             return [].concat(action.payload)
         }
         case 'REMOVE_TICKET':{
            return state.filter((ticket)=>{
                return ticket._id!==action.payload
            })
        }
        case 'EDIT_TICKET':{
            return state.map(ticket=>{
                if(ticket._id===action.payload){
                    console.log(action.payload)
                    return Object.assign({},ticket,action.payload)
                }else{
                    return Object.assign({},ticket)
                }
            })
        }
         default :{
            return [].concat(state)
        }
     }
}
export default ticketsReducer