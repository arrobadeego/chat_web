import React, { Component } from 'react';
import Sidebar from "react-sidebar";
import request from '../services/service';
import './Contacts.scss';

class Contacts extends Component {

    state = {
        sidebarOpen: true,
        contacts: []
    };

    componentDidMount() {
        request.Contacts.getContacts().then( res => {
            if(res.status === 200){
                console.log("Chamou os contatos");
                console.log(res);
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

        return(
            <div id="contacts">
                <Sidebar
                    sidebar={<b>Sidebar content</b>}
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    styles={{ sidebar: { background: "white" } }}
                >
                    <button onClick={() => this.onSetSidebarOpen(true)}>
                    Open sidebar
                    </button>
                </Sidebar>
            </div>
        );
    }
}

export default Contacts;
