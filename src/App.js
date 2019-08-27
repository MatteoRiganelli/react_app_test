import React, {Component} from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import MainTemplate from './components/template/mainTemplate'
import Home from './components/home/home'
import Login from './components/login/login'
import Registration from './components/registration/registration'

class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <BrowserRouter>
        <MainTemplate>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/login' component={Login}/>
            <Route path='/registration' component={Registration}/>
          </Switch>
        </MainTemplate>
      </BrowserRouter>
    );
  }

}

export default App;
