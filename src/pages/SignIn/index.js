import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';

import { Container } from './styles';

const schema = Yup.object().shape({
    email: Yup.string().required('E-mail is required'),
    password: Yup.string().required('Password is required'),
});

export default function SignIn() {
    const dispatch = useDispatch();

    function handleSubmit({ email, password }) {
        dispatch(signInRequest(email, password));
    }

    return (
        <Container>
            <span>Zip Zop</span>
            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="email" type="email" placeholder="E-mail" />
                <Input name="password" type="password" placeholder="Password" />

                <button type="submit">Sign in</button>
                <Link to="/register">Create account</Link>
            </Form>
        </Container>
    );
}
