import React from 'react';
import { MdSend } from 'react-icons/md';

import {
    Container,
    Header,
    Content,
    ChatContent,
    MessageSender,
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
                </ChatContent>
                <MessageSender>
                    <input placeholder="type your message" />
                    <MdSend size={25} />
                </MessageSender>
            </Content>
        </Container>
    );
}
