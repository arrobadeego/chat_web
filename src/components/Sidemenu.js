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

    getStatusClas(status) {
        switch (status) {
            case "1":
                return "online";
                break;
            case "2":
                return "away";
                break;
            case "3":
                return "busy";
                break;
            case "4":
                return "offline";
                break;
            default:
                console.log("deu errado");
                break;
        }
    }

    onClickContact = () => {
        console.log("clicou aqui");
    }

    render() {
        const contactsList = this.state.contacts.map(contact => (
                        <li id={contact.id} onClick={this.onClickContact}>
                            <div className={this.getStatusClas(contact.status)}>
                                <img src={contact.photo} />
                            </div>
                            {contact.name}
                        </li>
                    ))

        return(
            <div id="sidemenu" className={this.state.sidemenu}>
                <div id="profile">
                    { this.state.profile === null ? null : <div id="photo"><img src={this.state.profile.photo} /></div> }
                    { this.state.profile === null ? null : <label>{this.state.profile.name}</label> }
                </div>
                <div id="contact-list">
                    <label>Concacts</label>
                    <ul>{contactsList}</ul>
                </div>
            </div>
        );
    }
}

export default onClickOutside(Sidemenu);
