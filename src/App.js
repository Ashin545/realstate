import React from 'react';
import {HashRouter , Route} from 'react-router-dom';

import Login from './login';
import Header from './header';
import Home from './home';
import Signup from './signup'; //new
import NewProject from './newproject';

function App() {
  let menus;
  if(sessionStorage.getItem("agentid")==null){
    menus = <>
              <Route exact path="/" component={Login}/>
              <Route path="/login" component={Login}/>
              <Route path="/signup" component={Signup}/>
            </>
  }else{
    menus = <>
               <Route path="/myproject" component={Home}/>
               <Route path="/new-project" component={NewProject}/>
            </>
  }
  return <HashRouter>
            <Header/>
            {menus}
         </HashRouter>;
}
export default App;
