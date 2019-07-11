import React, { Component } from 'react';
import onClickOutside from "react-onclickoutside";

import './Sidemenu.scss';

class Sidemenu extends Component {

    state = {
        sidemenu: "close"
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
                
            </div>
        );
    }
}

export default onClickOutside(Sidemenu);
