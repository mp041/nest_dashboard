import React from 'react'
import { Route, Switch } from "react-router-dom";
import Navbar from './Navbar';
import Login from './Login';
import Registration from './Registration'
import Profile from './Profile'
import Homepage from './Homepage'
import Error from './Error';
import Menubar from './Menubar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path='/register' component={Registration} />
        <Route path='/home' component={Homepage} />
        <Route path='/Profile/:id' component={Profile} />
        <Route path='/Menubar' component={Menubar} />


        <Route component={Error} />
      </Switch>
    </div>
  )
}

export default App
