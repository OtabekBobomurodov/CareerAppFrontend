import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';
import Switch from "react-bootstrap/Switch";

import Employer from "./Employer";
import EmployeeNav from "../Employee/EmployeeNav";
import Jobs from "../Employee/Jobs";


function EmployerApp(props) {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <EmployeeNav/>
                    <Switch>
                        <Route path="/" component={()=><Employer username={props.username}/>} exact/>
                        <Route path="/vacancies" component={Jobs} exact/>
                        {/*<Route component={Error}/>*/}
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default EmployerApp;
