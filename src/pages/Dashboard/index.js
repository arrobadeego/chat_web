import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import Chat from '../../components/Chat';
import Contacts from '../../components/Contacts';
import Sidemenu from '../../components/Sidemenu';
import Profile from '../../components/Profile';
import NewContact from '../../components/NewContact';

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

            case 'NewContact': {
                return setCurrentComponent2(
                    <NewContact handleClickAction={handleSetComponent} />
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
