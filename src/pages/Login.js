import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
    render() {
        return(
            <div id="login">
                <div>
                    <input type="text" placeholder="e-mail"/>
                    <input type="password" placeholder="password"/>
                    <button>Sign in</button>
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