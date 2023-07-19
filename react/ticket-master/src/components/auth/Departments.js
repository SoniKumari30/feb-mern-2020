import React from 'react'
import {connect} from 'react-redux'
import {startDepartments,startGetDepartments, startRemoveDepartments} from '../../actions/departmentsAction'

class Departments extends React.Component{
           constructor(props){
               super(props)
               this.state={
                   name:'',
                   adddept:false
                }
        
           }
          
           handleSubmit=(e)=>{
            e.preventDefault()
            const formData={
                name:this.state.name
                
            }
           // console.log(formData)
           this.props.dispatch(startDepartments(formData))
           this.props.dispatch(startGetDepartments())
          this.setState({
              name:this.state.name
          })
        }
        handleDept=()=>{
            this.setState({adddept:true})
        }
        handleDeptShow=(id)=>{
            this.props.history.push('/DepartmentShow')
            localStorage.setItem('deptId',id)
        }
           handleChange=(e)=>{
            this.setState({
                [e.target.name]:e.target.value
            })
          }
         
                 render(){
                 return(
                     <div>
                         <h1> Departments-{this.props.department.length}</h1>
                       
                        
                        <table border="1">
                            <thead>
                                <tr>
                                    <th>name</th>
                                     <th>Actions</th>
                                     <th>remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.department.map((dept)=>{
                                        return(
                                            <tr key={dept._id}>
                                            <td>{dept.name}</td>
                                            <td><button onClick={()=>{this.handleDeptShow(dept._id)}}>show</button></td>
                                             <button onClick={()=>{this.props.dispatch(startRemoveDepartments(dept._id))}}>remove</button>
                                             </tr>
                                            )


                                    })
                                }
                            </tbody>   

                            
                    
                        </table>

                        <button onClick={this.handleDept} name="addcust">Add department</button>
                        {this.state.adddept &&(
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
export const mapStateToProps=(state)=>{
    return{
     department:state.departments
    }
}
export default connect(mapStateToProps)(Departments )