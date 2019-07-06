import React, { Component } from 'react';
import Sidebar from "react-sidebar";
import './Contacts.scss';

class Contacts extends Component {

    state = {
        sidebarOpen: true,
        contacts: []
    };

    componentDidMount() {
        
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
