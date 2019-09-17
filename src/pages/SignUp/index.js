import React from 'react';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Container } from './styles';

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

export default function SignUp() {
    const dispatch = useDispatch();

    function handleSubmit({ name, email, password }) {
        if (schema.isValid) {
            // dispatch(signUpRequest(name, email, password));
        }
    }

    return (
        <Container>
            <span>Zip Zop</span>
            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="name" placeholder="Name" />
                <Input name="email" type="email" placeholder="E-mail" />
                <Input name="password" type="password" placeholder="Password" />
                <Input
                    name="passwordConfirmation"
                    type="password"
                    placeholder="Confirm your password"
                />

                <button type="submit">Create account</button>
                <Link to="/">I already have an account</Link>
            </Form>
        </Container>
    );
}
