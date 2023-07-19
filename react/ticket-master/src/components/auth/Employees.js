import React from 'react'
import {connect} from 'react-redux'
import {startEmployees, startGetEmployees, startRemoveEmployees} from '../../actions/employeesAction'
import { findDepartment } from '../../selectors/departmentSelector'

class Employees extends React.Component{
           constructor(props){
               super(props)
               this.state={
                   id:'',
                   name:'',
                   email:'',
                   mobile:'',
                   department:'',
                   addemp:false
                 }
         }
          
           handleSubmit=(e)=>{
            e.preventDefault()
            const formData={
                id:this.state.id,
                name:this.state.name,
                email:this.state.email,
                mobile:this.state.mobile,
                department:this.state.department
                
                
            }
           // console.log(formData)
           this.props.dispatch(startEmployees(formData))
           this.props.dispatch(startGetEmployees())
          
        }
        handleEmp=()=>{
            this.setState({addemp:true})
        }
           handleChange=(e)=>{
            this.setState({
                [e.target.name]:e.target.value
            })
          }
          handleEmpShow=(id)=>{
              
              this.props.history.push('/EmployeeShow')
               localStorage.setItem('empId',id)
          }
                 render(){
                 return(
                     <div>
                         <h1> Employees-{this.props.employees.length}</h1>
                       
                        <h1>Employees</h1>
                        <table border="1">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Employees Name</th>
                                    <th>Email</th>
                                    <th>Mobile Number</th>
                                    <th>Department</th>
                                    <th>Actions</th>
                                    <th>remove</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.employees.map((emp)=>{
                                        return(

                                            <tr key={emp._id}>
                                        <td>{emp._id}</td>      
                                        <td>{emp.name}</td>
                                        <td>{emp.email}</td>
                                        <td>{emp.mobile}</td>
                                        <td>{findDepartment(this.props.department,emp.department)?.name}</td>
                                         <td><button onClick={()=>{this.handleEmpShow(emp._id)}}>show</button></td>
                                       <button onClick={()=>{this.props.dispatch(startRemoveEmployees(emp._id))}}>remove</button>
                                        </tr>
                                        )
                                    })
                                }
                            </tbody>   

                            
                    
                        </table>

                        <button onClick={this.handleEmp} name="addcust">Add employee</button>
                        {this.state.addemp &&(
                              <form onSubmit={this.handleSubmit}>
                                  <lable>name</lable>
                                <input type="text" value={this.state.name} name="name" onChange={this.handleChange}/><br/>
                                 <lable>email</lable>
                                   <input type="text" value={this.state.email} name="email" onChange={this.handleChange}/><br/>
                               <lable>mobile</lable>
                                <input type="text" value={this.state.mobile} name="mobile" onChange={this.handleChange}/><br/>
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
                               
                                <input type="submit" value="submit"/>
                               </form>
                        )}
                            </div>
        )
    }
}
export const mapStateToProps=(state,props)=>{
    
    return{
    
     employees:state.employees,
     department:state.departments
     
     
    }
}
export default connect(mapStateToProps)(Employees)