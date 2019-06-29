import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import './Login.scss';
import request from '../services/service';
import Cookies from 'js-cookie';

class Login extends Component {

    state = {
        email: null,
        password: null,
        selectedOption: null
    }

      handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
      };

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

        const options = [
            { value: '1', label: 'Online' },
            { value: '2', label: 'Away' },
            { value: '3', label: 'Busy' },
            { value: '4', label: 'Offline' },
          ];


        //   const customStyles = {
        //     option: (provided, state) => ({
        //       ...provided,
        //     //   borderBottom: '1px dotted pink',
        //     //   color: state.isSelected ? 'red' : 'blue',
        //       padding: 20,
        //     })
        //   }

        return(
            <div id="login">
                <div className="login-form">
                    <div className="login-inputs">
                        <input type="text" placeholder="E-mail" onChange={e => {this.setState({ email: e.target.value }) }}/>
                        <input type="password" placeholder="Password" onChange={e => {this.setState({ password: e.target.value }) }}/>
                    </div>

                    <Select
                        placeholder="Sign in as"
                        value={this.state.selectedOption}
                        options={options}
                        onChange={this.handleChange}
                    />
                    <div className="login-buttons">
                        <button onClick={this.handleLogin}>Sign in</button>
                        <a>Forgot your password?</a>
                        <span>If you don't have an account 
                            <a> sign up now</a>
                        </span>
                    </div>
                </div>
            </div>

        );
    }
}

export default Login;
