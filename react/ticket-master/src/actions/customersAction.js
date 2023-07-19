import axios from '../config/axios'


export const setCustomer=(customer)=>{
    return {type: 'SET_CUSTOMER', payload:customer}
  }
  export const removeCustomer=(id)=>{
      return {type:'REMOVE_CUSTOMER',payload:id}
  }
  export const editCustomer=(customer)=>{
      return {type:'EDIT_CUSTOMER',payload:customer}
  }

  export const startGetCustomers=()=>{
    return (dispatch)=>{
        axios.get('/customers',{
            headers:{
               'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const customer=response.data
            dispatch(setCustomer(customer))
           

        })
        .catch((err)=>{
            alert(err)
        })
    }
}
 
export const startRemoveCustomer=(custId)=>{
    const confirmRemove=window.confirm("Are ypu sure?")
    if(confirmRemove){
        return(dispatch)=>{
            axios.delete(`/customers/${custId}`,{
                headers:{
                    'x-auth':localStorage.getItem('authToken')
                }
            })
            .then((response)=>{
                const customer=response.data
                dispatch(removeCustomer(customer._id))
            })
            .catch((err)=>{
                alert(err)
            })
        }
        
    }
    
        
}
  
export const startEditCustomer=(id,data)=>{
       return(dispatch)=>{
           axios.put(`/customers/${id}`,data,{
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
                   const customer=response.data
                   dispatch(editCustomer(customer._id,customer))
                   
               }
           })
           .catch((err)=>{
               console.log(err)
           })
       }
}


  export const startCustomers=(formData)=>{
      return(dispatch)=>{
               
                    axios.post('/customers',formData,{
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
