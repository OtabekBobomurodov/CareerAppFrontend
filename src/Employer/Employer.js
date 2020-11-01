import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import axios from "axios"
import {Modal, ModalHeader, ModalBody} from "reactstrap"

// import AsyncSelect from 'react-select/async';
import {BrowserRouter, NavLink} from 'react-router-dom';

class Employer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee:[],
            role:""
        }
    }


    componentDidMount() {

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
                if (res.data!=null) {
                    this.setState({
                        employee:res.data,
                        role: res.data.role
                    });
                    this.componentDidMount();
                }
            })
        };


        return (
            <div>
                <h1>Hello Login!</h1>

                <form onSubmit={login}>
                    <label>Username: </label>
                    <input placeholder="Username"/>
                    <label>Password: </label>
                    <input placeholder="Password"/>
                    <button>Submit</button>
                </form>

            </div>
        )
    }
}

export default Employer;