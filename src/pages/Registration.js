import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        errors: { name: null, email: null, password: null, rePassword: null }
    }

    handleRegistration = () => {

        let anyErro = false;

        if (!this.state.name) {
            this.setState({ errors: { name: "errors" } });
            anyErro = true;
        }

        if (!this.state.email) {
            this.setState({ errors: { email: "errors" } });
            anyErro = true;
        } 

        if (!this.state.password) {
            this.setState({ errors: { password: "errors" } });
            anyErro = true;
        }

        if (!this.state.rePassword) {
            this.setState({ errors: { rePassword: "errors" } });
            anyErro = true;
        }

        if(this.state.password !== this.state.rePassword) {
            this.setState({ errors: { password: "errors", rePassword: "errors" } });
            anyErro = true;
        }

        if(anyErro) return;

        request.Auth.registration(this.state.name, this.state.email, this.state.password).then( res => {
            if(res.status === 200){
                console.log(res)
                Cookies.set('Authorization', res.headers.authorization);
                this.props.history.push("/contacts");
            }
        }).catch(function (response) {
            this.setState({ errors: { className: "errors" } });
            console.log(response);
        });
    }

    render() {

        return(
            <div id="registration">
                <div className="registration-form">
                    <div className="registration-inputs">
                        <input className={ this.state.errors.name } type="text" placeholder="Name" onChange={e => {this.setState({ name: e.target.value }) }}/>
                        <input className={ this.state.errors.email } type="text" placeholder="E-mail" onChange={e => {this.setState({ email: e.target.value }) }}/>
                        <input className={ this.state.errors.password } type="password" placeholder="Password" onChange={e => {this.setState({ password: e.target.value }) }}/>
                        <input className={ this.state.errors.rePassword } type="password" placeholder="Repeat your password" onChange={e => {this.setState({ rePassword: e.target.value }) }}/>
                    </div>
                    <div className="registration-buttons">
                        <button onClick={this.handleRegistration}>Sign up</button>
                        <span>If you already have an account 
                            <Link to="/"> sign in now</Link>
                        </span>
                    </div>
                </div>
            </div>

        );
    }
}

export default Registration;
