import React, { Component } from 'react';
import request from '../services/service';
import './Main.scss';
import Menu from '../components/Menu';
import Sidemenu from '../components/Sidemenu';
import Chat from './Chat';

class Main extends Component {

    state = {
        sidemenu: "close",
        contacts: [],
        profile: null
    };

    onHamburguerClicked = (e) => {
        this.setState({ sidemenu: "open" });
    }

    render() {

        return(
            <div id="main">
                <Menu isHamburguerClicked={this.onHamburguerClicked} />
                <Sidemenu sidemenu={this.state.sidemenu} />
                <Chat />
            </div>
        );
    }
}

export default Main;
