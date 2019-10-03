import React from 'react';
import { useSelector } from 'react-redux';
import { MdSend } from 'react-icons/md';

import {
    Container,
    Header,
    Content,
    ChatContent,
    MessageSender,
    MessageReceived,
    MessageSent,
} from './styles';

export default function Chat() {
    const contact = useSelector(state => state.user.contact);
    console.log(contact);

    return (
        <Container>
            <Header>
                <img
                    src={
                        contact.avatar ||
                        'https://api.adorable.io/avatars/50/abott@adorable.png'
                    }
                    alt=""
                />

                <div>
                    <span>{contact ? contact.name : null}</span>
                    <span>Online</span>
                </div>
            </Header>
            <Content>
                <ChatContent>
                    <ul>
                        <li>
                            <MessageReceived>
                                <span>Oi</span>
                                <span>21h59</span>
                            </MessageReceived>
                        </li>
                        <li>
                            <MessageSent>
                                <span>Oi</span>
                                <span>21h59</span>
                            </MessageSent>
                        </li>
                    </ul>
                </ChatContent>
                <MessageSender>
                    <input placeholder="type your message" />
                    <MdSend size={25} />
                </MessageSender>
            </Content>
        </Container>
    );
}
