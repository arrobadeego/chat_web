import React, { Component } from 'react';
import './Login.scss';
import request from '../services/service';
import Cookies from 'js-cookie';

class Login extends Component {

    state = {
        email: null,
        password: null
    }

    handleLogin = () => {
        console.log(this.state);
        request.Auth.login(this.state.email, this.state.password).then( res => {
            if(res.status === 200){
                Cookies.set('Authorization', res.headers.authorization);
            }
        }).catch(function (response) {
            console.log(response);
        });
    }

    render() {
        return(
            <div id="login">
                <div>
                    <input type="text" placeholder="e-mail" onChange={e => {this.setState({ email: e.target.value }) }}/>
                    <input type="password" placeholder="password" onChange={e => {this.setState({ password: e.target.value }) }}/>
                    <button onClick={this.handleLogin}>Sign in</button>
                    <a>Forgot your password?</a>
                    <span>If you don't have an account 
                        <a> sign up now</a>
                    </span>
                </div>
            </div>
        );
    }
}

export default Login;