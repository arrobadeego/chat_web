import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdKeyboardBackspace } from 'react-icons/md';
import * as Yup from 'yup';

// import Sidemenu from '../Sidemenu';
import { updateProfileRequest } from '~/store/modules/user/actions';
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

export default function Profile({ handleClickAction }) {
    const profile = useSelector(state => state.user.profile);
    const dispatch = useDispatch();

    function handleSubmit(data) {
        dispatch(updateProfileRequest(data));
    }

    return (
        <>
            <Header>
                <MdKeyboardBackspace
                    size={25}
                    onClick={() => handleClickAction('Contacts')}
                />
                <span>Profile</span>
            </Header>
            <Content>
                <Form
                    initialData={profile}
                    schema={schema}
                    onSubmit={handleSubmit}
                >
                    <AvatarInput name="avatar" />
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
                        type="password"
                        name="passwordConfirmation"
                        placeholder="Confirm your new password"
                    />

                    <button type="submit">Update</button>
                </Form>
            </Content>
        </>
    );
}
