import {BrowserRouter, Link, NavLink} from "react-router-dom";
import React, {Component} from "react";
import styled from 'styled-components';

const navigation= {
    backgroundColor: "#f5e1bf",
    color: "red",
    marginBottom:5,
    height: 50,
    borderBottomWidth:2,
    borderBottomColor:"black",
    borderBottomStyle:"solid",
    borderBottomRadius:5,
};

const activeStyleColor={
    color:"white",
    backgroundColor: "#918e8d",
    borderWidth:2,
    borderColor:"#918e8d",
    borderStyle:"solid",
    borderRadius:5,
};

const navLinkStyle={
    paddingLeft:10, paddingRight:10, fontSize:20, color:"green",
  };



function EmployeeNav() {
        return (
                <div style={navigation}>
                    <h3 style={{color:"red"}}>Welcome to IT career website!</h3>
                    <div style={{marginTop: -40, marginLeft:830}}>
                        <NavLink style={navLinkStyle} to="/profile" activeStyle={activeStyleColor} exact={true}>Profile</NavLink>
                        <NavLink style={navLinkStyle} to="/jobs" activeStyle={activeStyleColor} exact={true}>Jobs</NavLink>
                        <NavLink style={navLinkStyle} to="/organisations" activeStyle={activeStyleColor} exact={true}>Organisations</NavLink>
                        {/*<NavLink style={navLinkStyle} to="/events" activeStyle={activeStyleColor} exact={true}>Events</NavLink>*/}
                        <NavLink style={navLinkStyle} to="/dashboard" activeStyle={activeStyleColor} exact={true}>Dashboard</NavLink>
                        <button style={{marginBottom:5, marginLeft:10}} className={"btn btn-danger"}>Log out</button>
                    </div>
                </div>
        )
}

export default EmployeeNav;