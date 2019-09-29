import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';
import { Container } from './styles';
import Chat from '../../components/Chat';
import Contacts from '../../components/Contacts';
import Sidemenu from '../../components/Sidemenu';
import Profile from '../../components/Profile';
import NewContact from '../../components/NewContact';

export default function Dashboard(props) {
    // const socket = io('http://localhost:3333');

    const { CurrentComponent } = props;

    const [CurrentComponent2, setCurrentComponent2] = useState();
    const [data, setData] = useState();

    useEffect(() => {
        handleSetComponent(CurrentComponent);

        return () => {};
    }, []);

    // let mensagemServer = 'placeholder';
    // socket.on('connect', () => {
    //     console.log('#########################################');
    //     socket.on('teste', data => {
    //         console.log(data);
    //         setData(data.name);
    //     });
    //     // socket.emit('sendMessage', 'mensagem de teste');
    //     // socket.emit('sendMessage', 'mensagem enviada pelo cliente');
    // });

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
