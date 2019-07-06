import React, { Component } from 'react';
import request from '../services/service';
import './Contacts.scss';

class Contacts extends Component {

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

    onSetSidebarOpen = (open) => {
        this.setState({ sidebarOpen: open });
    }

    render() {

        const contactsList = this.state.contacts.map(contact => (<ul><li>{contact.name}</li></ul>))

        return(
            <div id="contacts">
                
            </div>
        );
    }
}

export default Contacts;
