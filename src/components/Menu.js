import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';
import request from '../services/service';

class Menu extends Component {

    state = {
        
    }

    render() {

        return(
            <div id="menu">
                <button>
                    <i className="material-icons">menu</i>
                </button>

                <a>Link de teste</a>
            </div>

        );
    }
}

export default Menu;
