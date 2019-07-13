import React, { Component } from 'react';
import './Chat.scss';

class Chat extends Component {

    render() {

        return(
            <div id="chat">
                <div id="contact-chat"></div>
                <div id="chat-chat"></div>
                <div id="input-chat">
                    <textarea />
                </div>
            </div>
        );
    }
}

export default Chat;
