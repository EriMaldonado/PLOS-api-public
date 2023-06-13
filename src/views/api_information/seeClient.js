import React, { Component } from 'react';
import Client from '../../components/api_information/client';
import NavBar from "../../components/Navigation";

class seeClient extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <h2 align="center">Customer information from your computer</h2>
            <Client/>
           </div>
            
        )
}}
export default seeClient;