import React, { Component } from 'react';
import request from '../services/service';
import './Main.scss';
import Menu from '../components/Menu';
import Sidemenu from '../components/Sidemenu';

class Main extends Component {

    state = {
        sidemenu: "close",
        contacts: [],
        profile: null
    };

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
                // this.setState({profile: res.data.contacts})
            }
        }).catch(function (response) {
            //this.setState({ errors: { className: "errors" } });
            console.log(response);
        });
    }

    onHamburguerClicked = (e) => {
        this.setState({ sidemenu: "open" });
    }

    render() {

        const contactsList = this.state.contacts.map(contact => (<ul><li>{contact.name}</li></ul>))

        return(
            <div id="main">
                <Menu isHamburguerClicked={this.onHamburguerClicked} />
                <Sidemenu sidemenu={this.state.sidemenu} contacts={contactsList} />
            </div>
        );
    }
}

export default Main;
