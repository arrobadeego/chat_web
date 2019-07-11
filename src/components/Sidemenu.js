import React, { Component } from 'react';
import onClickOutside from "react-onclickoutside";
import request from '../services/service';

import './Sidemenu.scss';

class Sidemenu extends Component {

    state = {
        sidemenu: "close",
        contacts: []
    }

    handleClickOutside = evt => {
        this.setState({ sidemenu: "close" });
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.sidemenu);
        this.setState({ sidemenu: nextProps.sidemenu });
    }

    render() {

        return(
            <div id="sidemenu" className={this.state.sidemenu}>
                {this.props.contacts}
            </div>
        );
    }
}

export default onClickOutside(Sidemenu);
