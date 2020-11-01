import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import axios from "axios"
import {Modal, ModalHeader, ModalBody} from "reactstrap"
import './Employee/Employee.css';
// import AsyncSelect from 'react-select/async';
import {BrowserRouter, NavLink, Redirect} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee:[],
            role:null
        }
    }

    checkRole = () => {
        if(this.state.role=="user") {
            this.props.history.push('/profile', { some: 'state' })
        } else if(this.state.role=="admin") {
            this.props.history.push('/jobs', { some: 'state' })
        }
    };


    componentDidMount() {
        this.checkRole();
    }

    render() {
        // const {pIndustry, ePostalCode, pPosition, pLevel, pWorkMode, pSalary, pCurrency, pContract, exTitle, exOrganisation, exStartDate, preferModalVisible, preferences, exContractHours, exCompletionDate, exDescription, exRefereeName, exRefereeEmail, exRefereePhone, eCountry, eInstitution, eDegree, eAward, eStartDate, experience, eCompletionDate, eStatus, eStudyMode, expModalVisible,  status, studyMode, eduEditVisible, eduModalVisible, title, education, firstName, lastName, dateOfBirth, address, country, city, postalCode, contactDetails, personalModalVisible, personalDetails, email, phone, mobile, contactModalVisible} = this.state;

        const login = (event) => {
            axios({
                url: "http://localhost:8080/login",
                method: "post",
                params: {
                    username: event.target[0].value,
                    password: event.target[1].value,
                }
            }).then(res => {
                this.setState({
                    role:res.data
                })
            })
        };


        return (
            <div>
                <h1>Login page</h1>

                <form onSubmit={login}>
                    <label>Username: </label>
                    <input placeholder="Username" required/><br/>
                    <label>Password: </label>
                    <input placeholder="Password" required/><br/>
                    <button>Submit</button>
                </form>
                <h4>{this.state.role}</h4>
                <h5>{this.state.role==""?"Wrong Credentials":""}</h5>
            </div>
        )
    }
}

export default Login;