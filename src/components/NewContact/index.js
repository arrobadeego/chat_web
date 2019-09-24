import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdKeyboardBackspace } from 'react-icons/md';

import { sendInviteRequest } from '../../store/modules/user/actions';

import { Header, Content } from './styles';

export default function NewContact({ handleClickAction }) {
    const dispatch = useDispatch();

    function handleSubmit(data) {
        dispatch(sendInviteRequest(data));
    }
    return (
        <>
            <Header>
                <MdKeyboardBackspace
                    size={25}
                    onClick={() => handleClickAction('Contacts')}
                />
                <span>Add new contact</span>
            </Header>
            <Content>
                <Form onSubmit={handleSubmit}>
                    <p>You can add your friends by e-mail</p>
                    <Input name="email" type="email" placeholder="E-mail" />
                    <button type="submit">Add</button>
                </Form>
            </Content>
        </>
    );
}
