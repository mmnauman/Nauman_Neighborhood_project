import React, { Component } from 'react';
import Header from './components/header';
import Body from './components/body';
import './App.css';
import * as Load from './functions/loadscript';
import {Route} from 'react-router-dom'
import Readme from './components/navContent';
import {Switch} from 'react-router-dom'
import Errors from  './components/error'

class App extends Component {
  
/*   componentWillMount(){
    Load.loadMap('AIzaSyA5DgeUZVTOYoyKa13oJphBK1Jm52SBTSE');
} */

  render() {
    if(!window.map){
    Load.loadMap('Api-Here');
    }
    // Error Handling For Invalid/ Empty API.
    window.gm_authFailure = function() {
     alert('Google maps failed to load!. This Error is caused due to invalid/Empty Api.');
  }

    return (
      <section className="outerWrap" id="outerWrap">
        <Header/>
        <Switch>
        <Route exact path='/' component={Body}/>
        <Route path='/read-me' component={Readme}/>
        <Route component={Errors}></Route>       
        </Switch>
      </section>
    );
  }
}

export default App;
