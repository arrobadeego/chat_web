import React, { Component } from 'react';
import request from '../services/service';
import './Main.scss';
import Menu from '../components/Menu';
import Sidemenu from '../components/Sidemenu';

class Main extends Component {

    state = {
        sidebarOpen: true,
        contacts: []
    };

    componentDidMount = () => {
        request.Contacts.getContacts().then( res => {
            if(res.status === 200){
                console.log(res.data.contacts);
                this.setState({contacts: res.data.contacts})
            }
        }).catch(function (response) {
            this.setState({ errors: { className: "errors" } });
            console.log(response);
        });
    }

    render() {

        const contactsList = this.state.contacts.map(contact => (<ul><li>{contact.name}</li></ul>))

        return(
            <div id="main">
                <Menu />
                <Sidemenu />
            </div>
        );
    }
}

export default Main;
