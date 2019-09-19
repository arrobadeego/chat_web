import React from 'react';

import { Container, Header } from './styles';

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
        </Container>
    );
}
