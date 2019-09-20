import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdKeyboardBackspace } from 'react-icons/md';
import * as Yup from 'yup';

import AvatarInput from './AvatarInput';

import { Header, Content } from './styles';

const schema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
        .email('E-mail must be valid')
        .required('E-mail is required'),
    password: Yup.string()
        .min(6, 'The password must have 6 characters at least')
        .required('Password is required'),
    passwordConfirmation: Yup.string().oneOf(
        [Yup.ref('password'), null],
        'Passwords must match'
    ),
});

export default function Profile() {
    return (
        <>
            <Header>
                <MdKeyboardBackspace size={25} />
                <span>Profile</span>
            </Header>
            <Content>
                <Form schema={schema}>
                    <AvatarInput />
                    <Input name="name" placeholder="Name" />
                    <Input name="email" type="email" placeholder="E-mail" />
                    <Input
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                    <Input
                        name="passwordConfirmation"
                        type="password"
                        placeholder="Confirm your password"
                    />
                </Form>
            </Content>
        </>
    );
}
