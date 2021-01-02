import React , {Component} from 'react';
import axios from 'axios';
class NewProject extends Component{

    constructor(){
        super();
        this.state = {
            name:'',
            type:'',
            status:'',
            city:'',
            address:'',
            contact:'',
            mobile:'',
            message:''
        }
    }

    postProject=()=>{
        let url = "https://www.firstenquiry.com/api/angular/realstate/saveagentproject.php";
        let input = new FormData();
        input.append("userid" , sessionStorage.getItem("agentid"));
        input.append("name", this.state.name);
        input.append("city", this.state.city);
        input.append("address", this.state.address);
        input.append("type", this.state.type);
        input.append("status", this.state.status);
        input.append("contact", this.state.contact);
        input.append("mobile", this.state.mobile);

        axios.post(url , input).then(response=>{
                this.setState({
                    message : response.data.status,
                    name:'',
                    type:'',
                    status:'',
                    city:'',
                    address:'',
                    contact:'',
                    mobile:'',
                     
                })
        })
    }
    
    

    processName = (n) =>{ this.setState({ name: n.target.value}); }
    processCity = (n) =>{ this.setState({ city: n.target.value}); }
    processAddress = (n) =>{ this.setState({ address: n.target.value}); }
    processType = (n) =>{ this.setState({ type: n.target.value}); }
    processStatus = (n) =>{ this.setState({ status: n.target.value}); }
    processContact = (n) =>{ this.setState({ contact: n.target.value}); }
    processMobile = (n) =>{ this.setState({ mobile: n.target.value}); }

    render(){
        return  <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="text-info">Post New Projects </h3>
                            <p className="text-center">{this.state.message}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-1 col-md-1 col-sm-12 col-12 form-group"></div>
                        <div className="col-lg-10 col-md-10 col-sm-12 col-12 form-group">
                                <div className="card">
                                    <div className="card-header text-primary">
                                       Enter Project Details
                                    </div>
                                    <div className="card-body">
            <div className="row form-group">
              <div className="col-md-4 form-group">
                  <label>Project Name</label>
                  <input type="text" placeholder="Enter Project Name" value={this.state.name} className="form-control" onChange={this.processName}/>
              </div>
              <div className="col-md-4 form-group">
                <label>City</label>
                <input type="text" placeholder="Enter City Name" value={this.state.city} className="form-control" onChange={this.processCity}/>
            </div>
            <div className="col-md-4 form-group">
                <label>Project Address</label>
                <input type="text" placeholder="Enter Project Address" value={this.state.address} className="form-control" onChange={this.processAddress}/>
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-3 form-group">
                <label>Project Type</label>
                <select className="form-control" value={this.state.type} onChange={this.processType}>
                    <option value="">Choose</option>
                    <option value="Plot">Plot</option>
                    <option value="Apartent">Apartment</option>
                    <option value="Villa">Villa</option>
                    <option value="Individual House">Individual House</option>
                </select>
            </div>
            <div className="col-md-3 form-group">
              <label>Project Status</label>
              <select className="form-control" value={this.state.status} onChange={this.processStatus}>
                <option value="">Choose</option>
                <option value="On-Going">On-Going</option>
                <option value="New">New</option>
                <option value="Completed">Completed</option>
                <option value="Sold">Sold</option>
            </select>
          </div>
          <div className="col-md-3 form-group">
            <label>Contact Person</label>
            <input type="text" placeholder="Enter Name" className="form-control"  value={this.state.contact} onChange={this.processContact}/>
        </div>
          <div className="col-md-3 form-group">
              <label>Contact No</label>
              <input type="number" placeholder="Enter Mobile No" className="form-control"  value={this.state.mobile} onChange={this.processMobile}/>
          </div>
        </div>
                                    </div>
        <div className="card-footer text-center">
            <button className="btn btn-primary" onClick={this.postProject}>Save Project</button>
        </div>
                                </div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-12 col-12 form-group"></div>
                    </div>
                </div>
    }
}
export default NewProject;