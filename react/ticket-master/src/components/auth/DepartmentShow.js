import React from 'react'
import {findDepartment} from '../../selectors/departmentSelector'
import { connect } from 'react-redux'
import { startEditDepartment } from '../../actions/departmentsAction'


class DepartmentShow extends React.Component{
    constructor(props){
        super(props)
        this.state={
            
            name:'',
        
            
            editdept:false
        }
    }
    handleChange=(e)=>{
       this.setState({
           [e.target.name]:e.target.value
       })
    }
    handleDept=()=>{
        this.setState({
            name:this.props.department.name,
        
            editdept:true
        })
    }
    handleSubmit=(e)=>{
       e.preventDefault()
       
       const data={
           
           name:this.state.name
           
       }
       this.props.dispatch(startEditDepartment(this.props.department._id,data))
       
    }
    render(){
        return(
            <div>
                <h1>DepartmentShow</h1>
               
                <button onClick={this.handleDept} name="editdept">edit</button>
                        {this.state.editdept &&(
                <form onSubmit={this.handleSubmit}>
                <lable>name</lable>
                 <input type="text" value={this.state.name} name="name" onChange={this.handleChange}/><br/>
    
            <input type="submit" value="submit"/>
                </form>
                        )}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    const deptId = localStorage.getItem('deptId')
    return{
        department : findDepartment(state.departments,deptId)
    }
}
export default connect(mapStateToProps)(DepartmentShow)