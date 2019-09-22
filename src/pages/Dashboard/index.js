import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import Chat from '../../components/Chat';
import Contacts from '../../components/Contacts';
import Sidemenu from '../../components/Sidemenu';
import Profile from '../../components/Profile';

export default function Dashboard(props) {

    const { CurrentComponent } = props;

    const [CurrentComponent2, setCurrentComponent2] = useState();

    useEffect(() => {
        handleSetComponent(CurrentComponent);

        return () => {};
    }, []);

    function handleSetComponent(e) {

        switch (e) {
            case 'Contacts': {

                return setCurrentComponent2(
                    <Contacts handleClickAction={handleSetComponent} />
                );
            }

            case 'Profile': {

                return setCurrentComponent2(
                    <Profile handleClickAction={handleSetComponent} />
                );
            }

            default: {
                return setCurrentComponent2(
                    <Contacts handleClickAction={handleSetComponent} />
                );
            }
        }
    }

    return (
        <Container>
            <Sidemenu children={CurrentComponent2} />
            <Chat />
        </Container>
    );
}
