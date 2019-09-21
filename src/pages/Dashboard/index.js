import React, { useState } from 'react';

import { Container } from './styles';
import Chat from '../../components/Chat';
import Contacts from '../../components/Contacts';
import Sidemenu from '../../components/Sidemenu';
import Profile from '../../components/Profile';

export default function Dashboard() {
    const [CurrentComponent, setCurrentComponent] = useState(
        <Profile handleClickAction={handleSetComponent} />
    );

    // // let CurrentComponent = Profile;

    function handleSetComponent(e) {
        console.log(`Entrou no ${e}`);
        switch (e) {
            case 'Contacts': {
                return setCurrentComponent(
                    <Contacts handleClickAction={() => handleSetComponent} />
                );
            }

            case 'Profile': {
                return setCurrentComponent(
                    <Profile handleClickAction={() => handleSetComponent} />
                );
            }

            default:
        }
    }

    return (
        <Container>
            <Sidemenu children={CurrentComponent} />
            <Chat />
        </Container>
    );
}
