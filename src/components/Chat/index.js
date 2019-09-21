import React from 'react';
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
    return (
        <Container>
            <Header>
                <img
                    src="https://api.adorable.io/avatars/50/abott@adorable.png"
                    alt=""
                />

                <div>
                    <span>Jobson</span>
                    <span>Online</span>
                </div>
            </Header>
            <Content>
                <ChatContent>
                    <ul>
                        <li>
                            <MessageReceived>
                                <span>Pessoal</span>
                                <span>21h59</span>
                            </MessageReceived>
                        </li>
                        <li>
                            <MessageSent>
                                <span>Teu cu</span>
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
