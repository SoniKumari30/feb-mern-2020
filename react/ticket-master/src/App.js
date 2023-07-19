import React from 'react'
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import Home from './components/static/Home'
import Login from './components/auth/Login'
import CustomerShow from './components/auth/CustomerShow'
import Register from './components/auth/Register'
import Customers from './components/auth/Customers'
import Departments from './components/auth/Departments'
import Employees from './components/auth/Employees'
import {startUserLogout} from './actions/userAction'
import DepartmentShow from './components/auth/DepartmentShow'
import EmployeeShow from './components/auth/EmployeeShow'


function App(props){
  const  handleLogout=()=>{
      props.dispatch(startUserLogout())
    }
    return(
        <BrowserRouter>
        <div>
            <h1>TICKETS MASTER APP</h1>
            <Link to="/" >HOME</Link>
               {
                   Object.keys(props.user).length !==0?(
                       <div>
                        <Link to="/account">Account</Link>
                        <Link to="#" onClick={handleLogout}>Logout</Link>
                       </div>
                   ):(
                       <div>
                            <Link to="/users/register" >REGISTER</Link>|
                             <Link to="/users/login" >LOGIN</Link>
                       </div>
                   )
               }
           
             <Link to="/customers">CUSTOMERS</Link>|
             <Link to="/departments">DEPARTMENTS</Link>|
             <Link to="/employees">EMPLOYEES</Link>
            <Switch>
                <Route path="/" component={Home} exact={true}/>-
                <Route path="/users/register" component={Register}/>
                <Route path="/users/login" component={Login}/>
                <Route path="/customers" component={Customers} exact={true}/>
                <Route path="/customershow" component={CustomerShow}/>
                <Route path="/departments" component={Departments}/>
                <Route path="/departmentshow" component={DepartmentShow}/>
                <Route path="/employees" component={Employees}/>
                <Route path="/employeeshow" component={EmployeeShow}/>
                
                
                


            </Switch>
        </div>
        </BrowserRouter>
    )
}
const mapStateToProps=(state)=>{
    return{
        user:state.user
        
    }
}
export default connect(mapStateToProps)( App)