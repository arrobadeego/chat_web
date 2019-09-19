import React from 'react';

import { Container } from './styles';
import Chat from '../../components/Chat';
import Contacts from '../../components/Contacts';
import Sidemenu from '../../components/Sidemenu';

export default function Dashboard() {
    return (
        <Container>
            <Sidemenu children={<Contacts />} />
            <Chat />
        </Container>
    );
}
