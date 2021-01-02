import React , {Component} from 'react';
import {Link} from 'react-router-dom'; //new line

class Header extends Component{

    logout = () =>{
      sessionStorage.clear();// to clear all data from session storage
      window.location.href="http://localhost:3000/#/login"; // redirect to login page
      window.location.reload();// to refresh after logout
    }

    render(){
         let menuLink;
         if(sessionStorage.getItem("agentid")==null){
           menuLink = <>
                        <li className="nav-item mr-4">
                          <Link className="nav-link text-white" to="/signup"><i className="fa fa-user-plus"></i> Sign Up</Link>
                        </li>
                        <li className="nav-item mr-4">
                          <Link className="nav-link text-white" to="/login"><i className="fa fa-lock"></i> Login</Link>
                        </li>
                      </>
         }else{
          menuLink = <>
                   <li className="nav-item mr-4">
                      <Link className="nav-link text-white" to="/myproject"><i className="fa fa-home"></i> Home</Link>
                    </li>
                      <li className="nav-item mr-4">
                        <Link className="nav-link text-white" to="/new-project"><i className="fa fa-plus"></i> Post Your Project</Link>
                      </li>
                      <li className="nav-item mr-4">
                        <a className="nav-link text-white" onClick={this.logout}>
                          <i className="fa fa-user ml-2"></i>Welcome -: { sessionStorage.getItem("fullname")} 
                          <i className="fa fa-power-off text-danger ml-4"></i> Logout
                        </a>
                      </li>
                      </>
         }
        return <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <Link className="navbar-brand ml-5" href="/"> <i className="fa fa-building fa-lg"></i> Real eSate App</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                  <ul className="navbar-nav ml-auto mr-5">
                   
                  {menuLink}
                  </ul>
                </div>
              </nav>
    }
}

export default Header;