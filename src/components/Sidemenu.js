import React, { Component } from 'react';
import onClickOutside from "react-onclickoutside";

import './Sidemenu.scss';

class Sidemenu extends Component {

    state = {
        style: "onHide"
    }

    handleClickOutside = evt => {
        console.log(evt);
    };

    render() {

        return(
            <div id="sidemenu" className={this.state.style}>
                
            </div>
        );
    }
}

export default onClickOutside(Sidemenu);
