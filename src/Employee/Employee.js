import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import axios from "axios"
import {Modal, ModalHeader, ModalBody} from "reactstrap"
import './Employee.css';
// import AsyncSelect from 'react-select/async';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';


class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: props.username,
            password: "root123",
            contactModalVisible: false,
            personalModalVisible: false,
            eduModalVisible: false,
            expModalVisible:false,
            preferModalVisible:false,
            colorId: 1,
            contactDetails: [],
            personalDetails: [],
            email: "",
            phone: "",
            mobile: "",
            education:[],
            experience:[],
            status: "",
            studyMode:"",

            title: "",
            firstName: "",
            lastName: "",
            dateOfBirth: null,
            address: "",
            country: "",
            city: "",
            postalCode: null,

            eId:null,
            eCountry:"",
            eInstitution:"",
            eDegree:"",
            eAward:"",
            eStartDate:"",
            eCompletionDate:"",
            eStatus:"",
            eStudyMode:"",
            ePostalCode:"",

            exId:null,
            exTitle:"",
            exOrganisation:"",
            exStartDate:"",
            exCompletionDate:"",
            exContractHours:"",
            exDescription:"",
            exRefereeName:"",
            exRefereeEmail:"",
            exRefereePhone:"",
            preferences:[],

            pIndustry:"",
            pPosition:"",
            pLevel:"",
            pWorkMode:"",
            pSalary:null,
            pCurrency:"",
            pContract:""
        }
    }

    getPersonalDetails = () => {
        axios({
            url: "http://localhost:8080/getEmployee",
            method: "get",
            params: {
                username: this.state.username
            }
        }).then(res => {
            this.setState({
                personalDetails: res.data,
                title: res.data.title,
                firstName: res.data.firstName,
                lastName: res.data.lastName,
                dateOfBirth: res.data.dob,
                address: res.data.address,
                country: res.data.country,
                city: res.data.city,
                postalCode: res.data.postalCode
            })
        })
    };

    getContactDetails = () => {
        axios({
            url: "http://localhost:8080/getContact",
            method: "get",
            params: {
                username: this.state.username
            }
        }).then(res => {
            this.setState({
                contactDetails: res.data,
                email: res.data.email,
                phone: res.data.phone,
                mobile: res.data.mobile
            })
        })
    };

    getEducation=()=> {
        axios({
            url: "http://localhost:8080/getEducation",
            method: "get",
            params: {
                username: this.state.username
            }
        }).then(res => {
            this.setState({
                education: res.data,
            })
        })
    };

    getExperience=()=> {
        axios({
            url: "http://localhost:8080/getExperience",
            method: "get",
            params: {
                username: this.state.username
            }
        }).then(res => {
            this.setState({
                experience: res.data,
            })
        })
    };

    getPreferences=()=> {
        axios({
            url: "http://localhost:8080/getPreferences",
            method: "get",
            params: {
                username: this.state.username
            }
        }).then(res => {
            this.setState({
                preferences: res.data,
                pIndustry:res.data.industry,
                pPosition:res.data.position,
                pLevel:res.data.level,
                pWorkMode:res.data.workMode,
                pSalary:res.data.salary,
                pCurrency:res.data.currency,
                pContract:res.data.contractType
            })
        })
    };

    componentDidMount() {
        this.getPersonalDetails();
        this.getContactDetails();
        this.getEducation();
        this.getExperience();
        this.getPreferences();
    }

    render() {
        const {pIndustry, ePostalCode, pPosition, pLevel, pWorkMode, pSalary, pCurrency, pContract, exTitle, exOrganisation, exStartDate, preferModalVisible, preferences, exContractHours, exCompletionDate, exDescription, exRefereeName, exRefereeEmail, exRefereePhone, eCountry, eInstitution, eDegree, eAward, eStartDate, experience, eCompletionDate, eStatus, eStudyMode, expModalVisible,  status, studyMode, eduEditVisible, eduModalVisible, title, education, firstName, lastName, dateOfBirth, address, country, city, postalCode, contactDetails, personalModalVisible, personalDetails, email, phone, mobile, contactModalVisible} = this.state;

        const openContactModal = () => {
            this.setState({
                contactModalVisible: true
            })
        };

        const openPersonalModal = () => {
            this.setState({
                personalModalVisible: true
            })
        };

        const openEduModal=()=> {
            this.setState({
                eduModalVisible: true
            })
        };

        const openExpModal=()=> {
            this.setState({
                expModalVisible: true
            })
        };

        const openPreferencesModal=()=> {
            this.setState({
                preferModalVisible:true
            })
        };


        const close = () => {
            this.setState({
                contactModalVisible: false,
                personalModalVisible: false,
                eduModalVisible: false,
                expModalVisible:false,
                eCountry:"",
                eInstitution:"",
                eDegree:"",
                eAward:"",
                eStartDate:"",
                eCompletionDate:"",
                eStatus:"",
                eStudyMode:"",
                exTitle:"",
                exOrganisation:"",
                exStartDate:"",
                exCompletionDate:"",
                exContractHours:"",
                exDescription:"",
                exRefereeName:"",
                exRefereeEmail:"",
                exRefereePhone:"",
                preferModalVisible:false
            });
            this.componentDidMount()
        };

        const handleTypes = (event) => {
            const {name, value, type, checked} = event.target;
            type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value});
        };

        const color1 = (event) => {
            this.setState({
                colorId: 1
            })
        };
        const color2 = (event) => {
            this.setState({
                colorId: 2
            })
        };
        const color3 = (event) => {
            this.setState({
                colorId: 3
            })
        };
        const color4 = (event) => {
            this.setState({
                colorId: 4
            })
        };
        const color5 = (event) => {
            this.setState({
                colorId: 5
            })
        };

        const styleHeader = {
            borderRadius: 3,
            backgroundColor: "#737080",
            height: 50,
            paddingTop: 7,
            paddingLeft: 20,
            fontSize: 20
        };

        const styleHeader2 = {
            borderRadius: 3,
            backgroundColor: "#737080",
            height: 50,
            fontSize: 20,
        }

        const styleBody = {
            borderRadius: 3,
            borderWidth: 2,
            borderColor: "black",
            borderStyle: "solid",
            marginTop: 11,
            marginLeft: -20,
            paddingLeft: 10
        }

        const myStyle = {
            color: "white", paddingRight: 10, paddingLeft:10, fontSize: 22, backgroundColor: "grey", borderRadius: 3
        };

        const navStyle={
            fontSize: 20,
            color: "green",
            paddingRight:10,
            paddingLeft:10
        };

        const navigation= {
            position:"fixed",
            borderBottomWidth:2,
            borderBottomColor:"#7d9684",
            borderBottomStyle:"solid",
            borderBottomRadius:5,
            flexDirection: "row"
        };

        const sideBar = {
            position:"fixed",
            borderWidth:2,
            borderColor:"black",
            borderStyle:"solid",
            borderRadius:5
        };

        const contentDetails={
            color: "#556159", fontWeight:"bold", fontSize:20
        };

        const contactAdd = (event) => {
            axios({
                url: "http://localhost:8080/addContact",
                method: "post",
                params: {
                    username: this.state.username,
                },
                data: {
                    email: event.target[0].value,
                    phone: event.target[1].value,
                    mobile: event.target[2].value
                }
            }).then(res => {
                if (res.data.success) {
                    alert(res.data.message);
                    this.componentDidMount();
                } else {
                    alert(res.data.message)
                }
            })
        };

        const contactEdit=(event)=> {
            axios({
                url: "http://localhost:8080/editContact",
                method: "put",
                params: {
                    username: this.state.username,
                },
                data: {
                    email: event.target[0].value,
                    phone: event.target[1].value,
                    mobile: event.target[2].value
                }
            }).then(res => {
                if (res.data.success) {
                    this.componentDidMount();
                } else {
                    alert(res.data.message)
                }
            })
        };

        const editEmployee = (event) => {
            axios({
                url: "http://localhost:8080/editEmployee",
                method: "put",
                params: {
                    username: this.state.username,
                },
                data: {
                    title: event.target[0].value,
                    firstName: event.target[1].value,
                    lastName: event.target[2].value,
                    dob: event.target[3].value,
                    address: event.target[4].value,
                    country: event.target[5].value,
                    city: event.target[6].value,
                    postalCode: event.target[7].value
                }
            }).then(res => {
                if (res.data.success) {
                    this.componentDidMount();
                } else {
                    alert(res.data.message)
                }
            })
        };

        const addEducation=(event)=> {
            axios({
                url: "http://localhost:8080/addEducation",
                method: "post",
                params: {
                    username: this.state.username,
                },
                data: {
                    country: event.target[0].value,
                    institution: event.target[1].value,
                    degree: event.target[2].value,
                    award: event.target[3].value,
                    startDate: event.target[4].value,
                    completionDate: event.target[5].value,
                    status: event.target[6].value,
                    statusMode: event.target[7].value,
                }
            }).then(res => {
                if (res.data.success) {
                    this.componentDidMount();
                } else {
                    alert(res.data.message)
                }
            })
        };

        const addExperience=(event)=> {
            axios({
                url: "http://localhost:8080/addExperience",
                method: "post",
                params: {
                    username: this.state.username,
                },
                data: {
                    title: event.target[0].value,
                    organisationName: event.target[1].value,
                    startDate: event.target[2].value,
                    completionDate: event.target[3].value,
                    contractHours: event.target[4].value,
                    description: event.target[5].value,
                    refereeName: event.target[6].value,
                    refereeEmail: event.target[7].value,
                    refereePhone: event.target[8].value
                }
            }).then(res => {
                if (res.data.success) {
                    this.componentDidMount();
                } else {
                    alert(res.data.message)
                }
            })
        };

        const editEducation=(event)=> {
            axios({
                url: "http://localhost:8080/editEducation",
                method: "put",
                params: {
                    id: this.state.eId,
                },
                data: {
                    country: event.target[0].value,
                    institution: event.target[1].value,
                    degree: event.target[2].value,
                    award: event.target[3].value,
                    startDate: event.target[4].value,
                    completionDate: event.target[5].value,
                    status: event.target[6].value,
                    studyMode: event.target[7].value,
                }
            }).then(res => {
                if (res.data.success) {
                    this.componentDidMount();
                } else {
                    alert(res.data.message)
                }
            })
        };

        const editExperience=(event)=> {
            axios({
                url: "http://localhost:8080/editExperience",
                method: "put",
                params: {
                    id: this.state.exId,
                },
                data: {
                    title: event.target[0].value,
                    organisationName: event.target[1].value,
                    startDate: event.target[2].value,
                    completionDate: event.target[3].value,
                    contractHours: event.target[4].value,
                    description: event.target[5].value,
                    refereeName: event.target[6].value,
                    refereeEmail: event.target[7].value,
                    refereePhone: event.target[8].value,
                }
            }).then(res => {
                if (res.data.success) {
                    this.componentDidMount();
                } else {
                    alert(res.data.message)
                }
            })
        };

        const getEduById=(id)=> {
            axios({
                url: "http://localhost:8080/getEducationById",
                method: "get",
                params: {
                    id: id,
                }
            }).then(res => {
                this.setState({
                    eId:id,
                    eCountry: res.data.country,
                    eInstitution: res.data.institution,
                    eDegree: res.data.degree,
                    eAward: res.data.award,
                    eStartDate: res.data.startDate,
                    eCompletionDate: res.data.completionDate,
                    eStatus: res.data.status,
                    eStudyMode: res.data.studyMode
                })
            });

            openEduModal()
        };

        const getExperienceById=(id)=> {
            axios({
                url: "http://localhost:8080/getExperienceById",
                method: "get",
                params: {
                    id: id,
                }
            }).then(res => {
                this.setState({
                    exId:id,
                    exTitle: res.data.title,
                    exOrganisation: res.data.organisationName,
                    exStartDate: res.data.startDate,
                    exCompletionDate: res.data.completionDate,
                    exContractHours: res.data.contractHours,
                    exDescription: res.data.description,
                    exRefereeName: res.data.refereeName,
                    exRefereeEmail: res.data.refereeEmail,
                    exRefereePhone: res.data.refereePhone
                })
            });

            openExpModal()
        };

        const deleteEducation=(id)=> {
            axios({
                url: "http://localhost:8080/deleteEducation",
                method: "delete",
                params: {
                    id: id,
                }
            }).then(res => {
                if(res.data.success) {
                    this.componentDidMount();
                }
                else {
                    alert(res.data.message);
                }
            })
        };

        const deleteExperience=(id)=> {
            axios({
                url: "http://localhost:8080/deleteExperience",
                method: "delete",
                params: {
                    id: id,
                }
            }).then(res => {
                if(res.data.success) {
                    this.componentDidMount();
                }
                else {
                    alert(res.data.message);
                }
            })
        };

        const addPreferences=(event)=> {
            axios({
                url: "http://localhost:8080/addPreferences",
                method: "post",
                params: {
                    username: this.state.username,
                },
                data: {
                    industry: event.target[0].value,
                    position: event.target[1].value,
                    level: event.target[2].value,
                    workMode: event.target[3].value,
                    salary: event.target[4].value,
                    currency: event.target[5].value,
                    contract: event.target[6].value
                }
            }).then(res => {
                if (res.data.success) {
                    this.componentDidMount();
                } else {
                    alert(res.data.message)
                }
            })
        };

        const editPreferences=(event)=> {
            axios({
                url: "http://localhost:8080/editPreferences",
                method: "put",
                params: {
                    username: this.state.username,
                },
                data: {
                    industry: event.target[0].value,
                    position: event.target[1].value,
                    level: event.target[2].value,
                    workMode: event.target[3].value,
                    salary: event.target[4].value,
                    currency: event.target[5].value,
                    contract: event.target[6].value
                }
            }).then(res => {
                if (res.data.message) {
                    this.componentDidMount();
                } else {
                    alert(res.data.message)
                }
            })
        };

        return (
            <div>
                <Modal isOpen={contactModalVisible}>
                    <ModalHeader>
                        Contact Details
                    </ModalHeader>
                    <ModalBody>
                        <form onSubmit={contactDetails==""?contactAdd:contactEdit}>
                            <label>Email: <b style={{color:"red"}}>*</b></label>
                            <input value={email} name={"email"} onChange={handleTypes} className={"form-control"}
                                   type="text" placeholder="Email address" required/><br/>

                            <label>Phone: <b style={{color:"red"}}>*</b></label>
                            <input value={phone} name={"phone"} onChange={handleTypes} className={"form-control"}
                                   type="number" placeholder="991234567" required/><br/>

                            <label>Mobile: </label>
                            <input value={mobile} name={"mobile"} onChange={handleTypes} className={"form-control"}
                                   type="number" placeholder="Mobile"/><br/>

                            <button type={"button"} className={"btn btn-danger"} onClick={close}>Close</button>
                            <button className={"btn btn-success"}>Submit</button>
                        </form>
                    </ModalBody>
                </Modal>

                <Modal isOpen={personalModalVisible}>
                    <ModalHeader>
                        Personal Details
                    </ModalHeader>
                    <ModalBody>
                        <form onSubmit={editEmployee}>
                            <label>Title: <b style={{color:"red"}}>*</b></label>
                            <select value={title} name={"title"} onChange={handleTypes} className={"form-control"}
                                    type="text" placeholder="Email address" required>
                                <option value={"Mr"}>Mr</option>
                                <option value={"Ms"}>Ms</option>
                                <option value={"Miss"}>Miss</option>
                            </select><br/>

                            <label>First Name: <b style={{color:"red"}}>*</b></label>
                            <input value={firstName} name={"firstName"} onChange={handleTypes}
                                   className={"form-control"} type="text" required/><br/>

                            <label>Last Name: <b style={{color:"red"}}>*</b></label>
                            <input value={lastName} name={"lastName"} onChange={handleTypes} className={"form-control"}
                                   type="text" required/><br/>

                            <label>Date of Birth: </label>
                            <input value={dateOfBirth} name={"dateOfBirth"} onChange={handleTypes}
                                   className={"form-control"} type="date" /><br/>

                            <label>Address: <b style={{color:"red"}}>*</b></label>
                            <input value={address} name={"address"} onChange={handleTypes} className={"form-control"}
                                   type="text" required/><br/>

                            <label>Country: <b style={{color:"red"}}>*</b></label>
                            <input value={country} name={"country"} onChange={handleTypes} className={"form-control"}
                                   type="text" required/><br/>

                            <label>City: <b style={{color:"red"}}>*</b></label>
                            <input value={city} name={"city"} onChange={handleTypes} className={"form-control"}
                                   type="text" required/><br/>

                            <label>Postal Code: <b style={{color:"red"}}>*</b></label>
                            <input value={postalCode} name={"postalCode"} onChange={handleTypes}
                                   className={"form-control"} type="number" required/><br/>

                            <button type={"button"} className={"btn btn-danger"} onClick={close}>Close</button>
                            <button className={"btn btn-success"}>Submit</button>
                        </form>
                    </ModalBody>
                </Modal>

                <Modal isOpen={eduModalVisible}>
                    <ModalHeader>
                        Education
                    </ModalHeader>
                    <ModalBody>
                        <form onSubmit={this.state.eId==null?addEducation:editEducation}>
                            <label>Country: <b style={{color:"red"}}>*</b> </label>
                            <input value={eCountry} name="eCountry" onChange={handleTypes} className={"form-control"} type="text" required/><br/>

                            <label>Institution: <b style={{color:"red"}}>*</b></label>
                            <input value={eInstitution} name="eInstitution" onChange={handleTypes} className={"form-control"} type="text" required/><br/>

                            <label>Degree: <b style={{color:"red"}}>*</b></label>
                            <input value={eDegree} name="eDegree" onChange={handleTypes} className={"form-control"} type="text" required/><br/>

                            <label>Award: </label>
                            <input value={eAward} name="eAward" onChange={handleTypes} className={"form-control"} type="text" /><br/>

                            <label>Start Date: <b style={{color:"red"}}>*</b></label>
                            <input value={eStartDate} name="eStartDate" onChange={handleTypes} className={"form-control"} type="date" required/><br/>

                            <label>Completion Date: </label>
                            <input value={eCompletionDate} name="eCompletionDate" onChange={handleTypes} className={"form-control"} type="date"/><br/>

                            <label>Status: <b style={{color:"red"}}>*</b></label>
                            <select value={eStatus} name={"eStatus"} onChange={handleTypes} className={"form-control"}
                                    type="text" required>
                                <option value={"Completed"}>Completed</option>
                                <option value={"In_Progress"}>In Progress</option>
                                <option value={"Unfinished"}>Unfinished</option>
                            </select><br/>

                            <label>Study Mode: <b style={{color:"red"}}>*</b></label>
                            <select value={eStudyMode} name={"eStudyMode"} onChange={handleTypes}
                                    className={"form-control"} type="text" required>
                                <option value={"Full_time"}>Full-time</option>
                                <option value={"Part_time"}>Part-time</option>
                                <option value={"Retriever"}>Retriever</option></select>
                            <br/>

                            <button type={"button"} className={"btn btn-danger"} onClick={close}>Close</button>
                            <button className={"btn btn-success"}>Submit</button>
                        </form>
                    </ModalBody>
                </Modal>

                <Modal isOpen={expModalVisible}>
                    <ModalHeader>
                        Experience
                    </ModalHeader>
                    <ModalBody>
                        <form onSubmit={this.state.exId==null?addExperience:editExperience}>
                            <label>Job Title: <b style={{color:"red"}}>*</b> </label>
                            <input value={exTitle} name="exTitle" onChange={handleTypes} className={"form-control"} type="text" required/><br/>

                            <label>Organisation: <b style={{color:"red"}}>*</b></label>
                            <input value={exOrganisation} name="exOrganisation" onChange={handleTypes} className={"form-control"} type="text" required/><br/>

                            <label>Start Date: </label>
                            <input value={exStartDate} name="exStartDate" onChange={handleTypes} className={"form-control"} type="date" /><br/>

                            <label>Completion Date: </label>
                            <input value={exCompletionDate} name="exCompletionDate" onChange={handleTypes} className={"form-control"} type="date" /><br/>

                            <label>Contract Hours: <b style={{color:"red"}}>*</b></label>
                            <select value={exContractHours} name={"exContractHours"} onChange={handleTypes} className={"form-control"}
                                    type="text" required>
                                <option value={"FULL_TIME"}>Full-time</option>
                                <option value={"PART_TIME"}>Part-time</option>
                                <option value={"CASUAL"}>Casual</option>
                            </select><br/>

                            <label>Description: <b style={{color:"red"}}>*</b></label>
                            <input value={exDescription} name="exDescription" onChange={handleTypes} className={"form-control"} type="text" required/><br/>

                            <label>Referee Name: </label>
                            <input value={exRefereeName} name="exRefereeName" onChange={handleTypes} className={"form-control"} type="text"/><br/>

                            <label>Referee Email: </label>
                            <input value={exRefereeEmail} name="exRefereeEmail" onChange={handleTypes} className={"form-control"} type="text"/><br/>

                            <label>Referee Phone: </label>
                            <input value={exRefereePhone} name="exRefereePhone" onChange={handleTypes} className={"form-control"} type="text"/><br/>


                            <button type={"button"} className={"btn btn-danger"} onClick={close}>Close</button>
                            <button className={"btn btn-success"}>Submit</button>
                        </form>
                    </ModalBody>
                </Modal>


                <Modal isOpen={preferModalVisible}>
                    <ModalHeader>
                        Preferences
                    </ModalHeader>
                    <ModalBody>
                        <form onSubmit={preferences==""?addPreferences:editPreferences}>
                            <label>Industry: <b style={{color:"red"}}>*</b> </label>
                            <input value={pIndustry} name="pIndustry" onChange={handleTypes} className={"form-control"} type="text" required/><br/>

                            <label>Position: <b style={{color:"red"}}>*</b></label>
                            <input value={pPosition} name="pPosition" onChange={handleTypes} className={"form-control"} type="text" required/><br/>

                            <label>Level: <b style={{color:"red"}}>*</b></label>
                            <select value={pLevel} name={"pLevel"} onChange={handleTypes} className={"form-control"}
                                    type="text" required>
                                <option value={"Junior"}>Junior</option>
                                <option value={"Middle"}>Middle</option>
                                <option value={"Senior"}>Senior</option>
                            </select><br/><br/>

                            <label>Work mode: </label>
                            <select value={pLevel} name={"pLevel"} onChange={handleTypes} className={"form-control"}
                                    type="text" required>
                                <option value={"Internship in-site"}>Internship in-site</option>
                                <option value={"Online"}>Online</option>
                                <option value={"Full-time"}>Full-time</option>
                                <option value={"Part-time"}>Part-time</option>
                            </select><br/><br/><br/>

                            <label>Salary: </label>
                            <input value={pSalary} name="pSalary" onChange={handleTypes} className={"form-control"} type="text" />

                            <label>Currency: <b style={{color:"red"}}>*</b></label>
                            <select value={pCurrency} name={"pCurrency"} onChange={handleTypes} className={"form-control"}
                                    type="text" required>
                                <option value={"UZS"}>UZB</option>
                                <option value={"USD"}>USD</option>
                                <option value={"EUR"}>EUR</option>
                                <option value={"RUB"}>RUB</option>
                            </select><br/>

                            <label>Contract: <b style={{color:"red"}}>*</b></label>
                            <select value={pContract} name={"pContract"} onChange={handleTypes} className={"form-control"}
                                    type="text" required>
                                <option value={"PERMANENT"}>PERMANENT</option>
                                <option value={"TEMPORARY"}>TEMPORARY</option>
                            </select><br/>

                            <button type={"button"} className={"btn btn-danger"} onClick={close}>Close</button>
                            <button className={"btn btn-success"}>Submit</button>
                        </form>
                    </ModalBody>
                </Modal>



                {/*<div style={{backgroundColor: "#ede6d3", height: 800, display: "flex",*/}
                {/*    flexDirection: "column"}} className={"col"}>*/}
                {/*    <div className={"row"}>*/}
                {/*        <div className={"col-lg-12"} style={{width:700, height:65}}>*/}
                {/*            <div style={{position:"fixed", borderBottomWidth:2,*/}
                {/*                borderBottomColor:"#7d9684",*/}
                {/*                borderBottomStyle:"solid",*/}
                {/*                borderBottomRadius:5, flexDirection: "row"}} className={"navbar fixed-top navbar-light bg-light"}>*/}
                {/*                <BrowserRouter>*/}
                {/*                    <h3 style={{color:"red"}}>Welcome to IT career website!</h3>*/}
                {/*                    <div style={{*/}
                {/*                        backgroundColor: "light",*/}
                {/*                        color: "red",*/}
                {/*                    }}>*/}
                {/*                        <NavLink onClick={color1} style={this.state.colorId == 1 ? myStyle : navStyle}*/}
                {/*                                 to="/">Profile</NavLink>*/}
                {/*                        <NavLink onClick={color2} style={this.state.colorId == 2 ? myStyle : navStyle}*/}
                {/*                                 to="/jobs">Jobs</NavLink>*/}
                {/*                        <NavLink onClick={color3} style={this.state.colorId == 3 ? myStyle : navStyle}*/}
                {/*                                 to="/">Organisations</NavLink>*/}
                {/*                        <NavLink onClick={color4} style={this.state.colorId == 4 ? myStyle : navStyle}*/}
                {/*                                 to="/">Events</NavLink>*/}
                {/*                        <NavLink onClick={color5} style={this.state.colorId == 5 ? myStyle : navStyle}*/}
                {/*                                 to="/">Dashboard</NavLink>*/}
                {/*                        <button style={{marginBottom:5, marginLeft:10}} className={"btn btn-danger"}>Log out</button>*/}
                {/*                    </div>*/}
                {/*                </BrowserRouter>*/}
                {/*            </div>*/}

                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className={"row"}>*/}
                {/*        <div className={"col col-lg-2"}>*/}
                {/*            <nav style={{position:"fixed",*/}
                {/*                borderWidth:2,*/}
                {/*                borderColor:"black",*/}
                {/*                borderStyle:"solid",*/}
                {/*                borderRadius:5}} className={"navbar fixed-left navbar-light bg-light"}>*/}
                {/*                <BrowserRouter>*/}
                {/*                    <div style={{*/}
                {/*                        backgroundColor: "light",*/}
                {/*                        marginBottom: 20,*/}
                {/*                        width: 150,*/}
                {/*                    }}>*/}
                {/*                        <h5>IT resources</h5>*/}
                {/*                        <hr/>*/}
                {/*                        <a href="//islom.uz" style={{fontSize:20, color: "green"}} target="_blank">w3schools.org</a><br/>*/}
                {/*                        <a href="//islom.uz" style={{fontSize:20, color: "green"}} target="_blank">github.com</a><br/>*/}
                {/*                        <a href="//islom.uz" style={{fontSize:20, color: "green"}} target="_blank">stackoverflow.org</a><br/>*/}
                {/*                        <a href="//islom.uz" style={{fontSize:20, color: "green"}} target="_blank">codacademy.com</a><br/>*/}
                {/*                        <a href="//islom.uz" style={{fontSize:20, color: "green"}} target="_blank">codementor.com</a><br/>*/}

                {/*                    </div>*/}
                {/*                </BrowserRouter>*/}
                {/*            </nav>*/}

                {/*        </div>*/}
                {/*        <div style={{marginLeft: 0}} className={"col col-lg-5"}>*/}
                {/*            <div >*/}
                {/*                <header style={{color: "#556159", fontWeight:"bold", fontSize:20}}>*/}
                {/*                    Personal Details*/}
                {/*                    <button onClick={openPersonalModal} style={{marginRight: 15}}*/}
                {/*                            className={"btn btn-warning btn-sm float-right"}>Edit</button>*/}
                {/*                </header>*/}
                {/*                <body style={styleBody}>*/}
                {/*                <h6>Title: {personalDetails.title}</h6>*/}
                {/*                <h6>First name: {personalDetails.firstName}</h6>*/}
                {/*                <h6>Last name: {personalDetails.lastName}</h6>*/}
                {/*                </body>*/}
                {/*            </div>*/}

                {/*            <div >*/}
                {/*                <header style={{color: "#556159", fontWeight:"bold", fontSize:20}}>*/}
                {/*                    Education*/}
                {/*                    <button onClick={openEduModal} style={{marginRight: 15}}*/}
                {/*                            className={"btn btn-success btn-sm float-right"}>Add</button>*/}
                {/*                </header>*/}
                {/*                <body style={styleBody}>*/}
                {/*                {education==""?(<h6>Nothing to show</h6>):education.map(item =>*/}
                {/*                    <tr key={item.id}>*/}
                {/*                        <h6>Institution: <b style={{color:"blue"}}>{item.institution}</b></h6>*/}
                {/*                        <h6>Award: {item.award}</h6>*/}
                {/*                        <h6>Start date: {item.startDate}</h6>*/}
                {/*                        <button style={{marginRight:10}} className={"btn btn-warning btn-sm"} onClick={()=>getEduById(item.id)}>Edit</button>*/}
                {/*                        <button className={"btn btn-danger btn-sm"} onClick={()=>deleteEducation(item.id)}>Delete</button>*/}
                {/*                        <hr/>*/}
                {/*                    </tr>*/}
                {/*                )}*/}
                {/*                </body>*/}
                {/*            </div>*/}

                {/*            <div >*/}
                {/*                <header style={{color: "#556159", fontWeight:"bold", fontSize:20}}>*/}
                {/*                    Preferences*/}
                {/*                    <button onClick={openPreferencesModal} style={{marginRight: 15}}*/}
                {/*                            className={preferences==""?"btn btn-success btn-sm float-right":"btn btn-warning btn-sm float-right"}>*/}
                {/*                        {preferences==""?"Add":"Edit"}</button>*/}
                {/*                </header>*/}
                {/*                <body style={styleBody}>*/}
                {/*                <h6>{pIndustry==null?"Nothing to show":"Industry: " + pIndustry}</h6>*/}
                {/*                <h6>{pPosition==null?"":"Position: " + pPosition}</h6>*/}
                {/*                <h6>{pWorkMode==null?"":"WorkMode: " + pWorkMode}</h6>*/}
                {/*                <h6>{pSalary==null?"":"Salary: " + pSalary + " " + pCurrency}</h6>*/}
                {/*                </body>*/}
                {/*            </div>*/}

                {/*        </div>*/}
                {/*        <div className={"col-lg-5"}>*/}
                {/*            <div>*/}
                {/*                <header style={{color: "#556159", fontWeight:"bold", fontSize:20}}>*/}
                {/*                    Contact Details*/}
                {/*                    <button onClick={openContactModal} style={{marginRight: 15}}*/}
                {/*                            className={contactDetails.email == null ? "btn btn-success btn-sm float-right" : "btn btn-warning btn-sm float-right"}>{contactDetails.email == null ? "Add" : "Edit"}</button>*/}
                {/*                </header>*/}
                {/*                <body style={styleBody}>*/}
                {/*                <h6>{contactDetails.email == null ? "Nothing to show" : "Email: " + contactDetails.email}</h6>*/}
                {/*                <h6>{contactDetails.phone == null ? "" : "Phone: " + contactDetails.phone}</h6>*/}
                {/*                </body>*/}
                {/*            </div>*/}

                {/*            <div>*/}
                {/*                <header style={{color: "#556159", fontWeight:"bold", fontSize:20}}>*/}
                {/*                    Experience*/}
                {/*                    <button onClick={openExpModal} style={{marginRight: 15}}*/}
                {/*                            className={"btn btn-success btn-sm float-right"}>Add</button>*/}
                {/*                </header>*/}
                {/*                <body style={styleBody}>*/}
                {/*                {experience==""?(<h6>Nothing to show</h6>):experience.map(item =>*/}
                {/*                    <tr key={item.id}>*/}
                {/*                        <h6>Job Title: <b style={{color:"blue"}}>{item.title}</b></h6>*/}
                {/*                        <h6>Organisation: {item.organisationName}</h6>*/}
                {/*                        <h6>Completion date: {item.completionDate}</h6>*/}
                {/*                        <button style={{marginRight:10}} className={"btn btn-warning btn-sm"} onClick={()=>getExperienceById(item.id)}>Edit</button>*/}
                {/*                        <button className={"btn btn-danger btn-sm"} onClick={()=>deleteExperience(item.id)}>Delete</button>*/}
                {/*                        <hr/>*/}
                {/*                    </tr>*/}
                {/*                )}*/}
                {/*                </body>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*</div>*/}

                <div style={{backgroundColor: "#ede6d3", marginLeft:-27}} className={"col"}>
                    {/*<div className={"row"}>*/}
                    {/*    <div className={"col-lg-12"} style={{width:700, height:65}}>*/}
                    {/*        <div style={navigation} className={"navbar fixed-top navbar-light bg-light"}>*/}
                    {/*            <EmployeeNav />*/}
                    {/*        </div>*/}

                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className={"row"}>
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
                        <div style={{marginLeft: 0}} className={"col col-lg-5"}>
                            <div >
                                <header style={contentDetails}>
                                    Personal Details
                                    <button onClick={openPersonalModal} style={{marginRight: 15}}
                                            className={"btn btn-warning btn-sm float-right"}>Edit</button>
                                </header>
                                <body style={styleBody}>
                                <h6>Title: {personalDetails.title}</h6>
                                <h6>First name: {personalDetails.firstName}</h6>
                                <h6>Last name: {personalDetails.lastName}</h6>
                                </body>
                            </div>

                            <div >
                                <header style={contentDetails}>
                                    Education
                                    <button onClick={openEduModal} style={{marginRight: 15}}
                                            className={"btn btn-success btn-sm float-right"}>Add</button>
                                </header>
                                <body style={styleBody}>
                                {education==""?(<h6>Nothing to show</h6>):education.map(item =>
                                    <tr key={item.id}>
                                        <h6>Institution: <b style={{color:"blue"}}>{item.institution}</b></h6>
                                        <h6>Award: {item.award}</h6>
                                        <h6>Start date: {item.startDate}</h6>
                                        <button style={{marginRight:10}} className={"btn btn-warning btn-sm"} onClick={()=>getEduById(item.id)}>Edit</button>
                                        <button className={"btn btn-danger btn-sm"} onClick={()=>deleteEducation(item.id)}>Delete</button>
                                        <hr/>
                                    </tr>
                                )}
                                </body>
                            </div>

                            <div >
                                <header style={contentDetails}>
                                    Preferences
                                    <button onClick={openPreferencesModal} style={{marginRight: 15}}
                                            className={preferences==""?"btn btn-success btn-sm float-right":"btn btn-warning btn-sm float-right"}>
                                        {preferences==""?"Add":"Edit"}</button>
                                </header>
                                <body style={styleBody}>
                                <h6>{pIndustry==null?"Nothing to show":"Industry: " + pIndustry}</h6>
                                <h6>{pPosition==null?"":"Position: " + pPosition}</h6>
                                <h6>{pWorkMode==null?"":"WorkMode: " + pWorkMode}</h6>
                                <h6>{pSalary==null?"":"Salary: " + pSalary + " " + pCurrency}</h6>
                                </body>
                            </div>

                        </div>
                        <div className={"col-lg-5"}>
                            <div>
                                <header style={contentDetails}>
                                    Contact Details
                                    <button onClick={openContactModal} style={{marginRight: 15}}
                                            className={contactDetails.email == null ? "btn btn-success btn-sm float-right" : "btn btn-warning btn-sm float-right"}>{contactDetails.email == null ? "Add" : "Edit"}</button>
                                </header>
                                <body style={styleBody}>
                                <h6>{contactDetails.email == null ? "Nothing to show" : "Email: " + contactDetails.email}</h6>
                                <h6>{contactDetails.phone == null ? "" : "Phone: " + contactDetails.phone}</h6>
                                </body>
                            </div>

                            <div>
                                <header style={contentDetails}>
                                    Experience
                                    <button onClick={openExpModal} style={{marginRight: 15}}
                                            className={"btn btn-success btn-sm float-right"}>Add</button>
                                </header>
                                <body style={styleBody}>
                                {experience==""?(<h6>Nothing to show</h6>):experience.map(item =>
                                    <tr key={item.id}>
                                        <h6>Job Title: <b style={{color:"blue"}}>{item.title}</b></h6>
                                        <h6>Organisation: {item.organisationName}</h6>
                                        <h6>Completion date: {item.completionDate}</h6>
                                        <button style={{marginRight:10}} className={"btn btn-warning btn-sm"} onClick={()=>getExperienceById(item.id)}>Edit</button>
                                        <button className={"btn btn-danger btn-sm"} onClick={()=>deleteExperience(item.id)}>Delete</button>
                                        <hr/>
                                    </tr>
                                )}
                                </body>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Employee;