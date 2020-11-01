import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';
import Switch from "react-bootstrap/Switch";
import EmployeeNav from "./EmployeeNav";
import Employee from "./Employee";
import Jobs from "./Jobs";
import Organisations from "./Organisations";
import Dashboard from "./Dashboard"


function EmployeeApp(props) {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <EmployeeNav/>
                    <Switch>
                        <Route path="/profile" component={()=><Employee username={props.username}/>} exact/>
                        <Route path="/jobs" component={()=><Jobs username={props.username}/>} exact/>
                        <Route path="/organisations" component={()=><Organisations username={props.username}/>} exact/>
                        <Route path="/dashboard" component={()=><Dashboard username={props.username}/>} exact/>
                        {/*<Route component={Error}/>*/}
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default EmployeeApp;
