import axios from '../config/axios'
export const setDepartment=(department)=>{
    return {type: 'SET_DEPT', payload:department}
  }
  export const removeDepartment=(id)=>{
    return {type:'REMOVE_DEPARTMENT',payload:id}
  }
  export const editDepartment=(department)=>{
    return {type:'EDIT_DEPARTMENT',payload:department}
}
  export const startGetDepartments=()=>{
    return (dispatch)=>{
        axios.get('/departments',{
            headers:{
               'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const department=response.data
            dispatch(setDepartment(department))
           

        })
        .catch((err)=>{
            alert(err)
        })
    }
}
export const startEditDepartment=(id,formData)=>{
    return(dispatch)=>{
        axios.put(`/departments/${id}`,formData,{
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
                const department=response.data
                dispatch(editDepartment(department._id,department))
                
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}


export const startRemoveDepartments=(deptId)=>{
    const confirmRemove=window.confirm("Are ypu sure?")
    if(confirmRemove){
        return(dispatch)=>{
            axios.delete(`/departments/${deptId}`,{
                headers:{
                    'x-auth':localStorage.getItem('authToken')
                }
            })
            .then((response)=>{
                const department=response.data
                dispatch(removeDepartment(department._id))
            })
            .catch((err)=>{
                alert(err)
            })
        }
        
    }
    
        
}
export const startDepartments=(formData)=>{
    return(dispatch)=>{
             
                  axios.post('/departments',formData,{
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