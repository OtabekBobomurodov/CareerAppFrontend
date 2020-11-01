import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import axios from "axios"
import {Modal, ModalHeader, ModalBody} from "reactstrap"
import './Employee.css';
// import AsyncSelect from 'react-select/async';
import {BrowserRouter, NavLink} from 'react-router-dom';
import Pagination from "../Pagination";

class Organisations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: [],
            username: props.username,
            jobModalVisible: false,
            jobId: null,
            salary: null,
            currency: "",
            jobTitle: "",
            location: "",
            description: "",
            contractType: "",
            contractHours: "",
            organisation: "",
            currentPage: 1,
            totalPages: 0,
            totalElements: 0,
            postsPerPage: 3,
            filterName: "",
            filterJobTitle: "",
            filterContractHours: "",
            filterContractType: "",
            bookmarkId: null,
            bookmarkedJobs: []
        };
        this.getJobs = this.getJobs.bind(this);
        this.getJobsAll = this.getJobsAll.bind(this)
    }

    // getJobs = (event) => {
    //     axios({
    //         url: "http://localhost:8080/getJobs",
    //         method: "get",
    //         params: {
    //             page: 1,
    //             jobTitle: "",
    //             contractHours:"",
    //             contractType:""
    //         }
    //     }).then(res => {
    //         this.setState({
    //             jobs: res.data.jobs,
    //             currentPage: 1,
    //             totalPages: res.data.totalPages,
    //             totalElements: res.data.overallElements
    //         });
    //     })
    // };

    getJobsAll = () => {
        axios({
            url: "http://localhost:8080/getJobsAll",
            method: "get",
            params: {
                page: 1,
                username: this.state.username,
                jobTitle: "",
                contractHours: "",
                contractType: ""
            }
        }).then(res => {
            this.setState({
                jobs: res.data.jobs,
                currentPage: 1,
                totalPages: res.data.totalPages,
                totalElements: res.data.overallElements
            });
        })
    };

    getJobs = (a, b, c) => {
        axios({
            url: "http://localhost:8080/getJobs",
            method: "get",
            params: {
                page: 1,
                username: this.state.username,
                jobTitle: a,
                contractHours: b,
                contractType: c
            }
        }).then(res => {
            this.setState({
                jobs: res.data.jobs,
                currentPage: 1,
                totalPages: res.data.totalPages,
                totalElements: res.data.overallElements
            });
        })
    };


    componentDidMount() {
        this.getJobsAll();
    }


    render() {
        const {jobs, salary, username, postsPerPage, currentPage, totalElements, totalPages, filterJobTitle, filterContractHours, filterContractType, organisation, currency, jobTitle, contractHours, location, description, contractType, jobModalVisible} = this.state;

        const sideBar = {
            position: "fixed",
            borderWidth: 2,
            borderColor: "black",
            borderStyle: "solid",
            borderRadius: 5
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

        const bookmark = (id) => {
            this.componentDidMount();
            axios({
                url: "http://localhost:8080/bookmarkJob",
                method: "put",
                params: {
                    jobId: id,
                    username: username
                }
            });
            this.componentDidMount();
        };

        const page = (page) => {

            axios({
                url: "http://localhost:8080/getJobs",
                method: "get",
                params: {
                    page: page,
                    jobTitle: jobTitle,
                    contractHours: contractHours,
                    contractType: contractType
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

        // const filterChange = (event) => {
        //
        //     axios({
        //         url: "http://localhost:8080/getJobs",
        //         method: "get",
        //         params: {
        //             page: 1,
        //             jobTitle: event.target[0].value,
        //             contractHours:"FULL_TIME",
        //             contractType:"PERMANENT"
        //         }
        //     }).then(res => {
        //         this.setState({
        //             jobs: res.data.jobs,
        //             currentPage: 1,
        //             totalPages: res.data.totalPages,
        //             totalElements: res.data.overallElements
        //         });
        //     })
        // };

        const close = () => {
            this.setState({
                jobModalVisible: false
            })
        };

        const handleTypes = (event) => {
            const {name, value, type, checked} = event.target;
            type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value});
        };


        const saveFile=(event)=> {
            const bodyFormData = new FormData();
            bodyFormData.append('file', event.target.files[0]);
            axios({
                url: "http://localhost:8080/upload/save",
                method: "post",
                params: {
                    file: bodyFormData
                },
                headers: { "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryqTqJIxvkWFYqvP5s"}
            })
        };
        //
        // const saveFile = (event) => {
        //     const formData = new FormData();
        //     formData.append('file', event.target.files[0]);
        //     const options = {
        //         onUploadProgress: (progressEvent) => {
        //             const {loaded, total} = progressEvent;
        //             console.log(loaded)
        //         }
        //     };
        //     options.headers = {
        //         "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryqTqJIxvkWFYqvP5s"
        //     };
        //     let data = formData;
        //     options.method = 'post';
        //     axios.post("http://localhost:8080/upload/save", data, options)
        //
        // }

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
                        <button style={{marginLeft: 30}} className={"btn btn-success"}>Apply</button>
                    </ModalBody>
                </Modal>

                <div style={{backgroundColor: "#ede6d3", height: 400}} className="row">
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
                                    <a href="//islom.uz" style={{fontSize: 20, color: "green"}}
                                       target="_blank">w3schools.org</a><br/>
                                    <a href="//github.com" style={{fontSize: 20, color: "green"}}
                                       target="_blank">github.com</a><br/>
                                    <a href="//islom.uz" style={{fontSize: 20, color: "green"}}
                                       target="_blank">stackoverflow.org</a><br/>
                                    <a href="//islom.uz" style={{fontSize: 20, color: "green"}}
                                       target="_blank">codacademy.com</a><br/>
                                    <a href="//islom.uz" style={{fontSize: 20, color: "green"}}
                                       target="_blank">codementor.com</a><br/>

                                </div>
                            </BrowserRouter>
                        </nav>
                    </div>
                    <div className='col col-lg-10'>
                        <form>
                            <input style={{height: 30, marginRight: 10}} name='filterJobTitle' onChange={handleTypes}
                                   type={"text"} placeholder={"Search by job title..."}/>
                            <select style={{height: 30, marginRight: 10}} onChange={handleTypes}
                                    name='filterContractHours'>
                                <option value="">Search by contract hours</option>
                                <option value='FULL_TIME'>Full-time</option>
                                <option value='PART_TIME'>Part-time</option>
                                <option value='CASUAL'>Casual</option>
                            </select>
                            <select style={{height: 30, marginRight: 10}} onChange={handleTypes}
                                    name='filterContractType'>
                                <option value="">Search by contract type</option>
                                <option value='PERMANENT'>Permanent</option>
                                <option value='TEMPORARY'>Temporary</option>
                            </select>
                            <button type='button'
                                    onClick={() => this.getJobs(filterJobTitle, filterContractHours, filterContractType)}
                                    className='btn btn-success'>Submit
                            </button>
                        </form>

                        {/*<form onSubmit={saveFile}>*/}
                        {/*    <input type='file'/>*/}
                        {/*    <button>Save</button>*/}
                        {/*</form>*/}
                        <table className={"table"}>
                            <thead className={"thead-dark"}>
                            <tr>
                                <th>#</th>
                                <th>List of Jobs</th>
                                <th></th>
                            </tr>
                            </thead>

                            <tbody>
                            {
                                jobs.map((item, index) =>
                                    <tr key={item.id}>
                                        <th>{index + 1}</th>
                                        <th><b onClick={() => openJobModal(item.id)}
                                               style={{color: "blue", cursor: "pointer"}}>{item.jobTitle}</b>
                                            <br/> {item.description}</th>
                                        <th style={{float: "right"}}>
                                            Location - {item.location} <br/>
                                            Closes - {item.deadline} <br/>
                                            <i style={{float: "right", fontSize: 25}} onClick={() => bookmark(item.id)}
                                               className={item.isBook == 1 ? "fa fa-bookmark" : "fa fa-bookmark-o"}/>
                                        </th>
                                    </tr>
                                )
                            }
                            </tbody>
                        </table>

                        <Pagination postsPerPage={postsPerPage} totalPosts={totalElements}
                                    paginate={page} pageNumber={currentPage}/>
                    </div>
                </div>


            </div>
        )
    }
}

export default Organisations;