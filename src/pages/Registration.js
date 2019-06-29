import React, { Component } from 'react';
import Select from 'react-select';
import './Registration.scss';
import request from '../services/service';
import Cookies from 'js-cookie';

class Registration extends Component {

    state = {
        name: null,
        email: null,
        password: null,
        rePassword: null,
    }

    handleRegistration = () => {
        if(!this.state.name || !this.state.email || !this.state.password || !this.state.rePassword) return console.log("é nulo");

        if(this.state.password !== this.state.rePassword) return console.log("As senhas são diferentes");

        console.log("Foi executado");

        
    }

    render() {

        return(
            <div id="registration">
                <div className="registration-form">
                    <div className="registration-inputs">
                        <input type="text" placeholder="Name" onChange={e => {this.setState({ name: e.target.value }) }}/>
                        <input type="text" placeholder="E-mail" onChange={e => {this.setState({ email: e.target.value }) }}/>
                        <input type="password" placeholder="Password" onChange={e => {this.setState({ password: e.target.value }) }}/>
                        <input type="password" placeholder="Repeat your password" onChange={e => {this.setState({ rePassword: e.target.value }) }}/>
                    </div>
                    <div className="registration-buttons">
                        <button onClick={this.handleRegistration}>Sign up</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default Registration;
