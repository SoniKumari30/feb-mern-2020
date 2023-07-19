const userInitialState=[]
const customersReducer=(state=userInitialState, action)=>{
     switch(action.type){
         case 'SET_CUSTOMER':{
             return [].concat[action.payload]
         }
         case 'REMOVE_CUSTOMER':{
             return state.filter((cust)=>{
                 return cust._id!==action.payload
             })
         }
         case 'EDIT_CUSTOMER':{
             return state.map(cust=>{
                 if(cust._id===action.payload){
                     console.log(action.payload)
                     return Object.assign({},cust,action.payload)
                 }else{
                     return Object.assign({},cust)
                 }
             })
         }
        default :{
            return [].concat(state)
        }
     }
}
export default customersReducer