import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import Users from './user/Users'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import PrivateRoute from './auth/PrivateRoute'
import Menu from './core/Menu'
import AddAdmin from './user/AddAdmin'

const MainRouter = () => {
    return (<div>
      <Menu/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <PrivateRoute  path="/users" component={Users}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/addadmin" component={AddAdmin}/>
        <Route path="/signin" component={Signin}/>
      </Switch>
    </div>)
}

export default MainRouter
