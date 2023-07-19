const userInitialState=[]
const employeesRecucer=(state=userInitialState, action)=>{
     switch(action.type){
         case 'SET_EMP':{
             return [].concat(action.payload)
         }
         case 'REMOVE_EMPLOYEES':{
            return state.filter((emp)=>{
                return emp._id!==action.payload
            })
        }
        case 'EDIT_EMPLOYEES':{
            return state.map(emp=>{
                if(emp._id===action.payload){
                   // console.log(action.payload)
                    return Object.assign({},emp,action.payload)
                }else{
                    return Object.assign({},emp)
                }
            })
        }
        default :{
            return [].concat(state)
        }
     }
}
export default employeesRecucer