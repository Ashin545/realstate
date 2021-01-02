import React , {Component} from 'react';
import axios from 'axios';
class Project extends Component{
    constructor(){
        super();
        this.state = {
            projectList:[]
        }
    }

    getProject(){
        let url = "https://www.firstenquiry.com/api/angular/realstate/agentproject.php";
        let input = new FormData();
        input.append("userid" , sessionStorage.getItem("agentid"));
        axios.post(url , input).then(response=>{
            if(response.data.length>0){
                this.setState({
                    projectList : response.data
                })
            }
        })
    }

    componentDidMount(){
        this.getProject();
    }

    render(){
        return  <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="text-info">{this.state.projectList.length} -: My Projects </h3>
                        </div>
                    </div>
                   {
                       this.state.projectList.map((row , index)=>{
                           return <div className="row border-bottom mb-4 p-2 table-hover" key={index}>
                                        <div className="col-md-3 text-center">
                                            <i className="fa fa-building fa-3x text-warning"></i>
                                            <h4 className="text-info">{row.name}</h4>
                                        </div>
                                        <div className="col-md-3">
                                            <p>Project Type : {row.type} </p>
                                            <p>Project Status : {row.status} </p>
                                        </div>
                                        <div className="col-md-3">
                                            <p>City : {row.city} </p>
                                            <p>Project Address : {row.address} </p>
                                        </div>
                                        <div className="col-md-3">
                                            <p>Contact Person : {row.contactname} </p>
                                            <p>Contact No : {row.mobile} </p>
                                        </div>
                                   </div>
                       })
                   }
                </div>
    }
}

export default Project;