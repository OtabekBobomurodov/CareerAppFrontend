import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import axios from "axios"
import {Modal, ModalHeader, ModalBody} from "reactstrap"
import './Employee.css';
// import AsyncSelect from 'react-select/async';
import {BrowserRouter, NavLink} from 'react-router-dom';
import Pagination from "../Pagination";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:props.username,
            bookmarkedJobs:[],
            followedOrganisations:[],
            sign:null,
            salary: null,
            organisation: "",
            currency: "",
            jobTitle: "",
            location: "",
            description: "",
            contractType: "",
            contractHours: "",
            jobModalVisible: false,

            name:"",
            locationOrg:"",
            industry:"",
            scope:"",
            phone:"",
            email:"",
            website:"",
            postalCode:"",
            orgModalVisible:false
        };
        this.getBookmarkedJobs = this.getBookmarkedJobs.bind(this);
        this.getFollowedOrganisations = this.getFollowedOrganisations.bind(this);
    }


    getBookmarkedJobs = () => {
        axios({
            url: "http://localhost:8080/getBookmarkedJobs",
            method: "get",
            params: {
                username: this.state.username
            }
        }).then(res => {
            this.setState({
                bookmarkedJobs: res.data,
                sign:1
            });
        })
    };

    getFollowedOrganisations = () => {
        axios({
            url: "http://localhost:8080/getFollowedOrganisations",
            method: "get",
            params: {
                username: this.state.username
            }
        }).then(res => {
            this.setState({
                bookmarkedJobs: res.data,
                sign:2
            });
        })
    };

    componentDidMount() {
        // this.getBookmarkedJobs();
        // this.getFollowedOrganisations();
    }



    render() {
        const {username,bookmarkedJobs,followedOrganisations, organisation, salary, currency, jobModalVisible, jobTitle,location,
            description, contractType, contractHours, name, locationOrg, industry, scope, phone, email, website, postalCode, orgModalVisible} = this.state;

        const sideBar = {
            position:"fixed",
            borderWidth:2,
            borderColor:"black",
            borderStyle:"solid",
            borderRadius:5
        };

        const openJobModal = (id) => {
            axios({
                url: "http://localhost:8080/getJobById",
                method: "get",
                params: {
                    id: id
                }
            }).then(res => {
                this.setState({
                    salary: res.data.salary,
                    organisation: res.data.organisation.name,
                    currency: res.data.currency,
                    jobTitle: res.data.jobTitle,
                    location: res.data.location,
                    description: res.data.description,
                    contractType: res.data.contractType,
                    contractHours: res.data.contractHours,
                    jobModalVisible: true
                });
            });
        };

        const openOrganisationModal=(id)=> {
            axios({
                url: "http://localhost:8080/getOrganisationById",
                method: "get",
                params: {
                    id: id
                }
            }).then(res => {
                this.setState({
                    name:res.data.name,
                    locationOrg:res.data.location,
                    industry:res.data.industry,
                    scope:res.data.scope,
                    phone:res.data.phone,
                    email:res.data.email,
                    website:res.data.website,
                    postalCode:res.data.postalCode,
                    orgModalVisible:true
                });
            });
        };

        const close=()=> {
            this.setState({
                jobModalVisible:false,
                orgModalVisible:false
            })
        };

        const handleTypes = (event) => {
            const {name, value, type, checked} = event.target;
            type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value});
        };

        return (
            <div>

                <Modal isOpen={jobModalVisible}>
                    <ModalHeader>
                        Job Details
                    </ModalHeader>
                    <ModalBody>
                        <b>Job Title:</b> {jobTitle}<br/>
                        <b>Organisation:</b> {organisation}<br/>
                        <b>Location:</b> {location}<br/>
                        <b>Contract Type:</b> {contractType.toLowerCase()}<br/>
                        <b>Contract Hours:</b> {contractHours.toLowerCase()}<br/>
                        <b>Description:</b> {description}<br/>
                        <b>Salary:</b> {salary} {currency} <br/>
                        <button onClick={close} className={"btn btn-danger"}>Close</button>
                    </ModalBody>
                </Modal>

                <Modal isOpen={orgModalVisible}>
                    <ModalHeader>
                        Organisation Details
                    </ModalHeader>
                    <ModalBody>
                        <b>Name:</b> {name}<br/>
                        <b>Location:</b> {location}<br/>
                        <b>Industry:</b> {industry.toLowerCase()}<br/>
                        <b>Scope:</b> {scope.toLowerCase()}<br/>
                        <b>Phone:</b> {phone}<br/>
                        <b>Email:</b> {email}<br/>
                        <b>Website:</b> {website} <br/>
                        <b>Postal Code:</b> {postalCode}  <br/>
                        <button onClick={close} className={"btn btn-danger"}>Close</button>
                    </ModalBody>
                </Modal>

                <div style={{backgroundColor:"#ede6d3", height:300}} className="row">
                    <div className={"col col-lg-2"}>
                        <nav style={sideBar} className={"navbar fixed-left navbar-light bg-light"}>
                            <BrowserRouter>
                                <div style={{
                                    backgroundColor: "light",
                                    marginBottom: 20,
                                    width: 150,
                                }}>
                                    <h5>IT resources</h5>
                                    <hr/>
                                    <a href="//islom.uz" style={{fontSize:20, color: "green"}} target="_blank">w3schools.org</a><br/>
                                    <a href="//github.com" style={{fontSize:20, color: "green"}} target="_blank">github.com</a><br/>
                                    <a href="//islom.uz" style={{fontSize:20, color: "green"}} target="_blank">stackoverflow.org</a><br/>
                                    <a href="//islom.uz" style={{fontSize:20, color: "green"}} target="_blank">codacademy.com</a><br/>
                                    <a href="//islom.uz" style={{fontSize:20, color: "green"}} target="_blank">codementor.com</a><br/>

                                </div>
                            </BrowserRouter>
                        </nav>
                    </div>

                    <div className='col col-lg-2'>
                        <table className={'table'}>
                            <thead className={"thead-dark"}>
                            <tr>
                                <th>Dashboard</th>
                            </tr>
                            </thead>
                        </table>
                        <button onClick={this.getBookmarkedJobs}>Jobs</button><br/>
                        <button onClick={this.getFollowedOrganisations}>Organisations</button>
                    </div>

                    <div className='col col-lg-8'>
                        <table className={"table"}>
                            <thead className={"thead-dark"}>
                            <tr>
                                <th>#</th>
                                <th>List of Organisations</th>
                                <th></th>
                            </tr>
                            </thead>

                            <tbody>
                            {
                                bookmarkedJobs.map((item, index) =>
                                   <tr key={item.id}>
                                       <th>{index+1}</th>
                                       <th>{this.state.sign==1?(<b style={{color:"blue", cursor:"pointer"}} onClick={()=>openJobModal(item.id)}>{item.jobTitle}</b>):
                                           (<b style={{color:"blue", cursor:"pointer"}} onClick={()=>openOrganisationModal(item.id)}>{item.name}</b>)}</th>
                                       {/*<th><b onClick={()=>openOrganisationModal(item.id)} style={{color:"blue", cursor: "pointer"}}>{item.name}</b> <br/> {item.location}</th>*/}
                                       {/*<th>*/}
                                       {/*    <button onClick={()=>followOrg(item.id)} className={item.isBook == 1 ?'btn btn-danger btn-sm float-right':'btn btn-success btn-sm float-right'}>{item.isBook == 1 ?'-Unfollow':'+Follow'}</button>*/}
                                       {/*</th>*/}
                                   </tr>
                               )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>



            </div>
        )
    }
}

export default Dashboard;