import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import axios from "axios"
import {Modal, ModalHeader, ModalBody} from "reactstrap"
import './Employee/Employee.css';
// import AsyncSelect from 'react-select/async';
import {BrowserRouter, NavLink} from 'react-router-dom';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }



    componentDidMount() {

    }

    render() {
        // const {pIndustry, ePostalCode, pPosition, pLevel, pWorkMode, pSalary, pCurrency, pContract, exTitle, exOrganisation, exStartDate, preferModalVisible, preferences, exContractHours, exCompletionDate, exDescription, exRefereeName, exRefereeEmail, exRefereePhone, eCountry, eInstitution, eDegree, eAward, eStartDate, experience, eCompletionDate, eStatus, eStudyMode, expModalVisible,  status, studyMode, eduEditVisible, eduModalVisible, title, education, firstName, lastName, dateOfBirth, address, country, city, postalCode, contactDetails, personalModalVisible, personalDetails, email, phone, mobile, contactModalVisible} = this.state;





        return (
            <div>


                <h1>Hello Register!</h1>

            </div>
        )
    }
}

export default Register;