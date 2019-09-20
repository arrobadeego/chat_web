import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdKeyboardBackspace } from 'react-icons/md';
import * as Yup from 'yup';

import AvatarInput from './AvatarInput';

import { Header, Content } from './styles';

const schema = Yup.object().shape({
    name: Yup.string(),
    email: Yup.string().email(),
    oldPassword: Yup.string(),
    password: Yup.string().when('oldPassword', (oldPassword, field) =>
        oldPassword ? field.required('Senha é obrigatória') : field
    ),
    confirmPassword: Yup.string().when('password', (password, field) =>
        password
            ? field
                  .required('Confirmação da senha é obrigatória')
                  .oneOf([Yup.ref('password')])
            : field
    ),
});

export default function Profile() {
    const profile = useSelector(state => state.user.profile);

    return (
        <>
            <Header>
                <MdKeyboardBackspace size={25} />
                <span>Profile</span>
            </Header>
            <Content>
                <Form initialData={profile} schema={schema}>
                    <AvatarInput />
                    <Input name="name" placeholder="Name" />
                    <Input name="email" type="email" placeholder="E-mail" />
                    <Input
                        name="oldPassword"
                        type="password"
                        placeholder="Old password"
                    />
                    <Input
                        name="password"
                        type="password"
                        placeholder="New password"
                    />

                    <Input
                        type="confirmPassword"
                        name="passwordConfirmation"
                        placeholder="Confirm your new password"
                    />

                    <button type="submit">Update</button>
                </Form>
            </Content>
        </>
    );
}
