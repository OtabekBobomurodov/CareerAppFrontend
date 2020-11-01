import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import axios from "axios"
import {Modal, ModalHeader, ModalBody} from "reactstrap"
import './Employee.css';
// import AsyncSelect from 'react-select/async';
import {BrowserRouter, NavLink} from 'react-router-dom';
import Pagination from "../Pagination";

class Jobs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            organisations: [],
            orgModalVisible:false,
            jobId:null,
            name:"",
            location:"",
            industry:"",
            scope:"",
            phone:"",
            email:"",
            website:"",
            postalCode:"",
            username:props.username,
            password:"",
            role:"",
            currentPage:1,
            totalPages:0,
            totalElements:0,
            postsPerPage:5,
            filterName:"",
            filterOrgName:"",
            filterIndustry:"",
            filterScope:"",
            isFollowed:false,
            followId:null
        };
        this.getOrganisations = this.getOrganisations.bind(this);
        this.getOrganisationsAll = this.getOrganisationsAll.bind(this);
    }


    getOrganisationsAll = () => {
        axios({
            url: "http://localhost:8080/getOrganisationsAll",
            method: "get",
            params: {
                page: 1,
                username: this.state.username
            }
        }).then(res => {
            this.setState({
                organisations: res.data.jobs,
                currentPage: 1,
                totalPages: res.data.totalPages,
                totalElements: res.data.overallElements
            });
        })
    };

    getOrganisations = (a,b,c) => {
        axios({
            url: "http://localhost:8080/getOrganisations",
            method: "get",
            params: {
                page: 1,
                name: a,
                industry:b,
                scope:c
            }
        }).then(res => {
            this.setState({
                organisations: res.data.jobs,
                currentPage: 1,
                totalPages: res.data.totalPages,
                totalElements: res.data.overallElements
            });
        })
    };

    componentDidMount() {
        this.getOrganisationsAll();
    }



    render() {
        const {jobs, name, phone, organisations, filterOrgName,  filterIndustry, filterScope, industry, email, website, scope, postalCode, username, role, password, postsPerPage, currentPage, totalElements, totalPages, filterJobTitle, filterContractHours, filterContractType, organisation, currency, jobTitle, contractHours, location, description, contractType, orgModalVisible} = this.state;

        const sideBar = {
            position:"fixed",
            borderWidth:2,
            borderColor:"black",
            borderStyle:"solid",
            borderRadius:5
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
                    location:res.data.location,
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

        const page = (page) => {

            axios({
                url: "http://localhost:8080/getOrganisations",
                method: "get",
                params: {
                    page: page,
                    name: name,
                    industry: industry,
                    scope: scope,
                    username: username
                }
            }).then(res => {
                this.setState({
                    jobs: res.data.jobs,
                    currentPage: page,
                    totalPages: res.data.totalPages,
                    totalElements: res.data.overallElements
                });
            })
        };

        const followOrg=(id)=> {
            axios({
                url: "http://localhost:8080/followOrganisation",
                method: "put",
                params: {
                    organisationId: id,
                    username: username
                }
            }).then(res=> {
                this.componentDidMount();
            })
        };


        const close=()=> {
            this.setState({
                orgModalVisible:false
            })
        };

        const handleTypes = (event) => {
            const {name, value, type, checked} = event.target;
            type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value});
        };

        return (
            <div>
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
                    <div className='col col-lg-10'>
                        <form>
                            <input style={{height:30, marginRight:10}} name='filterOrgName' onChange={handleTypes} type={"text"} placeholder={"Search by organisation name..."} />
                            <select style={{height:30, marginRight:10}} onChange={handleTypes} name='filterIndustry'>
                                <option value="">Search by industry...</option>
                                <option value='Accounting'>Accounting</option>
                                <option value='Agriculture'>Agriculture</option>
                                <option value='Education'>Education</option>
                                <option value='Electronics'>Electronics</option>
                                <option value='Engineering'>Engineering</option>
                                <option value='Fashion'>Fashion</option>
                                <option value='Legal_activities'>Legal_activities</option>
                                <option value='Heath'>Heath</option>
                                <option value='Medicine'>Medicine</option>
                                <option value='IT'>IT</option>
                                <option value='Science'>Science</option>
                            </select>
                            <select style={{height:30, marginRight:10}} onChange={handleTypes} name='filterScope'>
                                <option value="">Search by scope...</option>
                                <option value='Local'>Local</option>
                                <option value='National'>National</option>
                                <option value='Regional'>Regional</option>
                                <option value='Multinational'>Multinational</option>
                            </select>
                            <button type='button' onClick={()=>this.getOrganisations(filterOrgName, filterIndustry, filterScope)} className='btn btn-info'>Submit</button>
                        </form>
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
                                organisations.map((item, index) =>
                                    <tr key={item.id}>
                                        <th>{index+1}</th>
                                        <th><b onClick={()=>openOrganisationModal(item.id)} style={{color:"blue", cursor: "pointer"}}>{item.name}</b> <br/> {item.location}</th>
                                        <th>
                                            <button onClick={()=>followOrg(item.id)} className={item.isBook == 1 ?'btn btn-danger btn-sm float-right':'btn btn-success btn-sm float-right'}>{item.isBook == 1 ?'-Unfollow':'+Follow'}</button>
                                        </th>
                                    </tr>

                                )
                            }
                            </tbody>
                        </table>

                        <Pagination postsPerPage={postsPerPage} totalPosts={totalElements}
                                    paginate={page} pageNumber={currentPage} />
                    </div>
                </div>



            </div>
        )
    }
}

export default Jobs;