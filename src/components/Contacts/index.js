import React from 'react';
import { MdMoreVert } from 'react-icons/md';

import { Container, Header } from './styles';

export default function Contacts() {
    return (
        <Container>
            <Header>
                <img
                    src="https://api.adorable.io/avatars/50/abott@adorable.png"
                    alt=""
                />
                <MdMoreVert size={30} />
            </Header>
        </Container>
    );
}
