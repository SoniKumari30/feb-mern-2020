import axios from '../config/axios'


export const setTickets=(ticket)=>{
    return {type: 'SET_TICKET', payload:ticket}
  }
  export const removeTicket=(id)=>{
    return {type:'REMOVE_TICKET',payload:id}
}
export const editTicket=(ticket)=>{
    return {type:'EDIT_TICKET',payload:ticket}
}
  export const startGetTickets=()=>{
    return (dispatch)=>{
        axios.get('/tickets',{
            headers:{
               'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const ticket=response.data
            dispatch(setTickets(ticket))
           
        })
        .catch((err)=>{
            alert(err)
        })
    }
}
export const startRemoveTicket=(ticketId)=>{
    const confirmRemove=window.confirm("Are ypu sure?")
    if(confirmRemove){
        return(dispatch)=>{
            axios.delete(`/tickets/${ticketId}`,{
                headers:{
                    'x-auth':localStorage.getItem('authToken')
                }
            })
            .then((response)=>{
                const ticket=response.data
                dispatch(removeTicket(ticket._id))
            })
            .catch((err)=>{
                alert(err)
            })
        }
        
    }
    
        
}

export const startEditTicket=(id,data)=>{
    return(dispatch)=>{
        axios.put(`/tickets/${id}`,data,{
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
                const ticket=response.data
                dispatch(editTicket(ticket._id,ticket))
                
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}


export const startTickets=(formData)=>{
    return(dispatch)=>{
             
                  axios.post('/tickets',formData,{
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