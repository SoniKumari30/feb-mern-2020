import axios from '../config/axios'

export const setEmployees=(employee)=>{
    return {type: 'SET_EMP', payload:employee}
}
export const removeEmployees=(id)=>{
    return {type:'REMOVE_EMPLOYEES',payload:id}
}
export const editEmployee=(employee)=>{
    return {type:'EDIT_EMPLOYEES',payload:employee}
}
export const startGetEmployees=()=>{
    return (dispatch)=>{
        axios.get('/employees',{
            headers:{
               'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const employee=response.data
            dispatch(setEmployees(employee))
           

        })
        .catch((err)=>{
            alert(err)
        })
    }
}
export const startEditEmployees=(empId,data)=>{
    return(dispatch)=>{
        axios.put(`/employees/${empId}`,data,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            console.log(response)
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
                
            }
            else{
                const employee=response.data
                dispatch(editEmployee(employee))
                
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const startRemoveEmployees=(id)=>{
    const confirmRemove=window.confirm("Are ypu sure?")
    if(confirmRemove){
        return(dispatch)=>{
            axios.delete(`/employees/${id}`,{
                headers:{
                    'x-auth':localStorage.getItem('authToken')
                }
            })
            .then((response)=>{
                const employee=response.data
                dispatch(removeEmployees(employee._id))
            })
            .catch((err)=>{
                alert(err)
            })
        }
        
    }
    
        
}
export const startEmployees=(formData)=>{
    return(dispatch)=>{
             
                  axios.post('/employees',formData,{
                     headers:{
                         'x-auth':localStorage.getItem('authToken')
                         
                     } 
                  })
                  .then((response)=>{
                      if(response.data.hasOwnProperty('errors')){
                          alert(response.data.message)
                      }else{
                          alert('you have registered successfully')
                         
                      }
                  })
                  .catch((err)=>{
                      console.log(err)
                  })
           
    }
  
}