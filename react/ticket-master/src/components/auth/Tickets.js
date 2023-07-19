import React from 'react'
import {connect} from 'react-redux'
import { startGetTickets ,startTickets, startRemoveTicket} from '../../actions/ticketsAction'

class Tickets extends React.Component{
    constructor(props){
        super(props)
        this.state={
        
            
            code:'',
            customer:'',
            department:'',
            employees:'',
            message:'',
            priority:'', 
            addticket:false  
        }
        
  }
   
    handleSubmit=(e)=>{
     e.preventDefault()
     const formData={
         code:this.state.code,
         customer:this.state.customer,
        department:this.state.department,
         employees:{_id:this.state.employees},
         priority:this.state.priority,
         message:this.state.message
         
         
     }
    // console.log(formData)
 this.props.dispatch(startTickets(formData))
    this.props.dispatch(startGetTickets())
   
 }
 handleTicket=()=>{
     this.setState({addticket:true})
 }
    handleChange=(e)=>{
     this.setState({
         [e.target.name]:e.target.value
     })
   }
 handleTicketShow=(id)=>{
       
       this.props.history.push('/TicketShow')
        localStorage.setItem('ticketId',id)
   }
          render(){
          return(
              <div>
                  <h1> tickets-{this.props.tickets.length}</h1>
                
                 
                 <table border="1">
                     <thead>
                         <tr>
                             <th>code</th>
                             <th>Customer</th>
                             <th>Department</th>
                             <th>Employees</th>
                             <th>Messages</th>
                             <th>priority</th>
                             <th>actions</th>
                             <th>remove</th>
                             
                         </tr>
                     </thead>
                     <tbody>
                         {
                             this.props.tickets.map((ticket)=>{
                                 return(

                                     <tr key={ticket._id}>
                                    <td>{ticket.code}</td>  
                                 
                                 <td>{this.props.customer.map(ele=>{
                                     return(
                                         (ele._id === ticket.customer)&& ele.name
                                     )
                                 })}</td>
                                  <td>{this.props.department.map(ele=>{
                                     return(
                                         (ele._id === ticket.department)&& ele.name
                                     )
                                 })}</td>
                                 <td>{this.props.employees.map(ele=>{
                                     return(
                                         (ele._id === ticket.employees)&& ele.name
                                     )
                                 })}</td>
                                 
                                 
                                <td>{ticket.message}</td>
                                <td>{ticket.priority}</td>
                                <td><button onClick={()=>{this.handleTicketShow(ticket._id)}}>show</button></td>
                                <button onClick={()=>{this.props.dispatch(startRemoveTicket(ticket._id))}}>remove</button>
                                 </tr>
                                 )
                             })
                         }
                     </tbody>   

                     
             
                 </table>

                 <button onClick={this.handleTicket} name="addticket">Add ticket</button>
                 {this.state.addticket &&(
                       <form onSubmit={this.handleSubmit}>
                           <lable>code</lable>
                         <input type="text" value={this.state.code} name="code" onChange={this.handleChange}/><br/>
                        <lable>Customers</lable>
                         <select id="customer" name="customer" onChange={this.handleChange} 
                         value={this.state.customer}>
                             <option value="--select--">select</option>
                             {
                                 this.props.customer.map(cust=>{
                                     return(
                                     <option value={cust._id} key={cust._id}>{cust.name}</option>
                                     )
                                 })
                             }
                         </select><br/>
                         <lable>Department</lable>
                         <select id="department" name="department" onChange={this.handleChange} 
                         value={this.state.department}>
                             <option value="--select--">select</option>
                             {
                                 this.props.department.map(dept=>{
                                     return(
                                     <option value={dept._id} key={dept._id}>{dept.name}</option>
                                     )
                                 })
                             }
                         </select><br/>
                         <lable>Employees</lable>
                         <select id="employees" name="employees" onChange={this.handleChange} 
                         value={this.state.employees}>
                             <option value="--select--">select</option>
                             {
                                 this.props.employees.map(emp=>{
                                     return(
                                     <option value={emp._id} key={emp._id}>{emp.name}</option>
                                     )
                                 })
                             }
                         </select><br/>
                         <lable>Messages</lable>
                            <input type="text" value={this.state.message} name="message" onChange={this.handleChange}/><br/>
                            <lable>priority</lable><br/>
                            <input type="radio" value="High" name="priority" onChange={this.handleChange}/>High<br/>
                            <input type="radio" value="medium" name="priority" onChange={this.handleChange}/>Medium<br/>
                            <input type="radio" value="Low" name="priority" onChange={this.handleChange}/>Low<br/>
                            <input type="checkbox"/><br/>
                         <input type="submit" value="submit"/>
                        </form>
                 )}
                     </div>
 )
}
}
export const mapStateToProps=(state,props)=>{

return{
tickets:state.tickets,
customer:state.customers,
employees:state.employees,
department:state.departments


}
}
export default connect(mapStateToProps)(Tickets)