import React, { Component } from 'react';
import onClickOutside from "react-onclickoutside";
import request from '../services/service';

import './Sidemenu.scss';

class Sidemenu extends Component {

    state = {
        sidemenu: "close",
        contacts: [],
        profile: null
    }

    componentDidMount = () => {
        request.Contacts.getContacts().then( res => {
            if(res.status === 200){
                console.log(res.data.contacts);
                this.setState({contacts: res.data.contacts})
            }
        }).catch(function (response) {
            //this.setState({ errors: { className: "errors" } });
            console.log(response);
        });

        request.Auth.getProfile().then( res => {
            if(res.status === 200){
                console.log(res.data);
                this.setState({profile: res.data})
            }
        }).catch(function (response) {
            //this.setState({ errors: { className: "errors" } });
            console.log(response);
        });
    }

    handleClickOutside = evt => {
        this.setState({ sidemenu: "close" });
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.sidemenu);
        this.setState({ sidemenu: nextProps.sidemenu });
    }

    render() {
        // const contactsList = this.state.contacts.map(contact => (<ul><li>{contact.name}</li></ul>))
        const contactsList = (<ul>
                                <li><div></div>Jason</li>
                                <li><div></div>Triny</li>
                                <li><div></div>Kimberly</li>
                                <li><div></div>Zack</li>
                                <li><div></div>Billy</li>
                            </ul>)

        return(
            <div id="sidemenu" className={this.state.sidemenu}>
                <div id="profile">
                    { this.state.profile === null ? null : <div id="photo"><img src={this.state.profile.photo} /></div> }
                    { this.state.profile === null ? null : <label>{this.state.profile.name}</label> }
                </div>
                <div id="contact-list">
                    <label>Concacts</label>
                    {contactsList}
                </div>
            </div>
        );
    }
}

export default onClickOutside(Sidemenu);
