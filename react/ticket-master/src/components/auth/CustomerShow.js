import React from 'react'
import {findCustomer} from '../../selectors/customerSelector'
import {  startEditCustomer } from '../../actions/customersAction'
import { connect } from 'react-redux'


class CustomerShow extends React.Component{
    constructor(props){
        super(props)
        this.state={
            
            name:'',
            email:'',
            mobile:'',
            editcust:false
        }
    }
    handleChange=(e)=>{
       this.setState({
           [e.target.name]:e.target.value
       })
    }
    handleCust=()=>{
        this.setState({
            name:this.props.customer.name,
            email:this.props.customer.email,
            mobile:this.props.customer.mobile,
            editcust:true
        })
    }
    handleSubmit=(e)=>{
       e.preventDefault()
       
       const data={
           
           name:this.state.name,
           email:this.state.email,
           mobile:this.state.mobile
       }
       this.props.dispatch(startEditCustomer(this.props.customer._id,data))
       
    }
    render(){
        return(
            <div>
                <h1>CustomerShow</h1>
               
                <button onClick={this.handleCust} name="editcust">edit</button>
                        {this.state.editcust &&(
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
const mapStateToProps = (state) => {
    const custId = localStorage.getItem('custId')
    return{
        customer : findCustomer(state.customers,custId)
    }
}
export default connect(mapStateToProps)(CustomerShow)