import React from 'react';

import { Container } from './styles';
import Chat from '../../components/Chat';
import Contacts from '../../components/Contacts';

export default function Dashboard() {
    return (
        <Container>
            <Contacts />
            <Chat />
        </Container>
    );
}
