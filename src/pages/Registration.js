import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Registration.scss';
import request from '../services/service';
import Cookies from 'js-cookie';

class Registration extends Component {

    state = {
        name: null,
        email: null,
        password: null,
        rePassword: null,
        errors: { name: null, email: null, password: null, rePassword: null, messages: [] }
    }

    handleRegistration = () => {

        let anyErro = false;

        if (!this.state.name) {
            const messages = "Name can't be blank";            
            this.setState({ errors: { name: "errors", messages: [...messages] } });
            anyErro = true;
        }

        if (!this.state.email) {
            const messages = "E-mail can't be blank";
            this.setState({ errors: { email: "errors", messages: [...messages]  } });
            anyErro = true;
        } 

        if (!this.state.password) {
            const messages = "Password can't be blank";
            this.setState({ errors: { password: "errors", messages: [...messages]  } });
            anyErro = true;
        }

        if (!this.state.rePassword) {
            const messages = "Password can't be blank";
            this.setState({ errors: { rePassword: "errors", messages: [...messages]  } });
            anyErro = true;
        }

        if(this.state.password !== this.state.rePassword) {
            const messages = "Passwords don't match";
            this.setState({ errors: { password: "errors", rePassword: "errors", messages: [...messages]  } });
            anyErro = true;
        }

        if(anyErro) return console.log(this.state.errors.messages);

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
