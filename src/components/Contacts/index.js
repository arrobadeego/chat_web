import React from 'react';

import { Container, Header } from './styles';
import Dropdown from '../Dropdown';

export default function Contacts() {
    return (
        <Container>
            <Header>
                <img
                    src="https://api.adorable.io/avatars/50/abott@adorable.png"
                    alt=""
                />

                <Dropdown />
            </Header>
        </Container>
    );
}
