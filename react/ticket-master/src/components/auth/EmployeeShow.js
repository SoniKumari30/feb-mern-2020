import React from 'react'
import {findEmployee} from '../../selectors/employeeSelector'
//import {  startEditEmployees } from '../../actions/employeesAction'
import { connect } from 'react-redux'
import { startEditEmployees } from '../../actions/employeesAction'


class EmployeeShow extends React.Component{
    constructor(props){
        super(props)
        this.state={
            
            name:'',
            email:'',
            mobile:'',
            department:'',
            editemp:false
        }
    }
    handleChange=(e)=>{
       this.setState({
           [e.target.name]:e.target.value
       })
    }
    handleEmp=()=>{
        this.setState({
            
            name:this.props.employees.name,
            email:this.props.employees.email,
            mobile:this.props.employees.mobile,
            department:this.props.employees.department,
            editemp:true
        })
    }
    handleSubmit=(e)=>{
       e.preventDefault()
       
       const data={
           
           name:this.state.name,
           email:this.state.email,
           mobile:this.state.mobile,
           dipartment:this.state.department
       }
       this.props.dispatch(startEditEmployees(this.props.employees._id,data))
       
    }
    render(){
        return(
            <div>
                
               
                <button onClick={this.handleEmp} name="editemp">edit</button>
                        {this.state.editemp &&(
                <form onSubmit={this.handleSubmit}>
                <lable>name</lable>
                 <input type="text" value={this.state.name} name="name" onChange={this.handleChange}/><br/>
                <lable>email</lable>
            <input type="text" value={this.state.email} name="email" onChange={this.handleChange}/><br/>
            <lable>mobile</lable>
        <input type="text" value={this.state.mobile} name="mobile" onChange={this.handleChange}/><br/>
        <lable>department</lable>
        <input type="text" value={this.state.department} name="department" onChange={this.handleChange}/><br/>
            <input type="submit" value="submit"/>
                </form>
                        )}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    const empId = localStorage.getItem('empId')
    return{
        employees: findEmployee(state.employees,empId)
    }
}
export default connect(mapStateToProps)(EmployeeShow)