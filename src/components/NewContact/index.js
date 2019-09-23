import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdKeyboardBackspace } from 'react-icons/md';

import { Header, Content } from './styles';

export default function NewContact({ handleClickAction }) {
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
                <Form>
                    <p>You can add your friends by e-mail</p>
                    <Input name="email" type="email" placeholder="E-mail" />
                    <button type="submit">Add</button>
                </Form>
            </Content>
        </>
    );
}
