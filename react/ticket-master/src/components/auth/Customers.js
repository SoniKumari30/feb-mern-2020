import React from 'react'
import {connect} from 'react-redux'
import {startCustomers, startGetCustomers,  startRemoveCustomer} from '../../actions/customersAction'

class Customers extends React.Component{
           constructor(props){
               super(props)
               this.state={
                   name:'',
                   email:'',
                   mobile:'',
                   addcust:false


                   
               }
        
           }
          
           handleSubmit=(e)=>{
            e.preventDefault()
            const formData={
                name:this.state.name,
                email:this.state.email,
                mobile:this.state.mobile
                
            }
           // console.log(formData)
           this.props.dispatch(startCustomers(formData))
           this.props.dispatch(startGetCustomers())
          
        }
        handleCust=()=>{
            this.setState({addcust:true})
        }
           handleChange=(e)=>{
            this.setState({
                [e.target.name]:e.target.value
            })
          }
          handleCustShow=(id)=>{
              
               this.props.history.push('/CustomerShow')
               localStorage.setItem('custId',id)
          }
                 render(){
                 return(
                     <div>
                         <h1> Customers-{this.props.customer.length}</h1>
                       
                        <h1>customers</h1>
                        <table border="1">
                            <thead>
                                <tr>
                                    <th>SL.No</th>
                                    <th>Customer Name</th>
                                    <th>Email</th>
                                    <th>Mobile Number</th>
                                    <th>Actions</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.customer.map((cust)=>{
                                        return(
                                            <tr key={cust._id}>
                                        <td>{cust._id}</td>       
                                        <td>{cust.name}</td>
                                        <td>{cust.email}</td>
                                        <td>{cust.mobile}</td>
                                        <td><button onClick={()=>{this.handleCustShow(cust._id)}}>show</button></td>
                                        <button onClick={()=>{this.props.dispatch(startRemoveCustomer(cust._id))}}>remove</button>
                                        </tr>
                                        )
                                    })
                                }
                            </tbody>   

                            
                    
                        </table>

                        <button onClick={this.handleCust} name="addcust">Add customer</button>
                        {this.state.addcust &&(
                              <form onSubmit={this.handleSubmit}>
                                  <lable>name</lable>
                                <input type="text" value={this.state.name} name="name" onChange={this.handleChange}/><br/>
                                 <lable>email</lable>
                                   <input type="text" value={this.state.email} name="email" onChange={this.handleChange}/><br/>
                               <lable>mobile</lable>
                                <input type="text" value={this.state.mobile} name="mobile" onChange={this.handleChange}/><br/>
                                
                                <input type="submit" value="submit"/>
                               </form>
                        )}
                            </div>
        )
    }
}
export const mapStateToProps=(state)=>{
    return{
     customer:state.customers
    }
}
export default connect(mapStateToProps)( Customers)