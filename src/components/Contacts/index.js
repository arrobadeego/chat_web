import React from 'react';

import { Container, Header, Content } from './styles';
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
            <Content>
                <img
                    src="https://api.adorable.io/avatars/50/abott@adorable.png"
                    alt=""
                />

                <div>
                    <div>
                        <span>Jobson</span>
                        <span>Pessoal</span>
                    </div>
                    <span>21:59</span>
                </div>
            </Content>
        </Container>
    );
}
