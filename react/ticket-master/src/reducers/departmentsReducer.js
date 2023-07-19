const userInitialState=[]
const departmentsReducer=(state=userInitialState, action)=>{
     switch(action.type){
         case 'SET_DEPT':{
             return [].concat(action.payload)
         }
         case 'REMOVE_DEPARTMENT':{
            return state.filter((dept)=>{
                return dept._id!==action.payload
            })
        }
        case 'EDIT_DEPARTMENT':{
            return state.map(dept=>{
                if(dept._id===action.payload){
                   // console.log(action.payload)
                    return Object.assign({},dept,action.payload)
                }else{
                    return Object.assign({},dept)
                }
            })
        }
        default :{
            return [].concat(state)
        }
     }
}
export default departmentsReducer