import React from 'react'
import {connect} from 'react-redux'
import {startLoginUser} from '../../actions/userAction'

class Login extends React.Component{
          constructor(props){
              super(props)
              this.state={
                  email:'',
                  password:''
              }
          }
          handleSubmit=(e)=>{
            e.preventDefault()
            const formData={
                email:this.state.email,
                password:this.state.password
            }
          const redirect=()=>{
              return this.props.history.push('/')
          }
         // console.log(formData)
         this.props.dispatch(startLoginUser(formData,redirect))
          }
          handleChange=(e)=>{
           this.setState({
               [e.target.name]:e.target.value
           })
          }
    render(){
        return(
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                 <lable>email</lable> 
                 <input type="text" value={this.state.email} name="email" onChange={this.handleChange}/><br/>
                 <lable>password</lable>
                 <input type="password" value={this.state.password} name="password" onChange={this.handleChange}/><br/>
                 <input type="submit" value="login"/> 
                </form>
            </div>
        )
    }
}
export default connect()(Login)