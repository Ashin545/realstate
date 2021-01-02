import React , {Component} from 'react';
import axios from 'axios';

class Login extends Component{
    constructor(){
        super();
        this.state = {
            email:'',
            password:'',
            msg:''
        }
    }
    processEmail = (obj) =>{
        this.setState({
            email:obj.target.value
        })
    }
    processPassword = (obj) =>{
        this.setState({
            password:obj.target.value
        })
    }

    login = () =>{
        let url = "https://www.firstenquiry.com/api/angular/realstate/agentlogin.php";
        let input = new FormData();
        input.append("email", this.state.email);
        input.append("password", this.state.password);
        axios.post(url, input).then(response=>{
            if(response.data.id==""){
                this.setState({
                    msg:"Fail : Invalid Or Not Exists !"
                }) 
            }else if(response.data.id>0){
                this.setState({
                    msg:"Success : Please wait Redirecting..."
                }) 
                sessionStorage.setItem("fullname", response.data.name); // creating cookin using session storage
                sessionStorage.setItem("agentid", response.data.id);
                window.location.reload(); // to refresh the screen
            }else{
                this.setState({
                    msg:"Backend Error !"
                }) 
            }
        })
    }

    render(){
        return <div className="container mt-4">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header bg-secondary text-white">Login</div>
                        <div className="card-body">
                            <p className="text-center text-danger">{this.state.msg}</p>
                            <div className="form-group">
                                <label>e-Mail Id</label>
                                <input type="text" className="form-control" onChange={this.processEmail} />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" onChange={this.processPassword} />
                            </div>
                        </div>
                        <div className="card-footer text-center">
                            <button className="btn btn-primary" onClick={this.login}>Login</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    }
}

export default Login;