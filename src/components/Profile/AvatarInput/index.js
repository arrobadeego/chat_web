import React, { useState, useEffect, useRef } from 'react';
import { useField } from '@rocketseat/unform';

import api from '../../../services/api';

import { Container } from './styles';

export default function AvatarInput() {
    const { defaultValue, registerField } = useField('avatar');

    const [file, setFile] = useState(defaultValue && defaultValue.id);
    const [preview, setPreview] = useState(defaultValue);

    const ref = useRef();

    useEffect(() => {
        if (ref.current) {
            registerField({
                name: 'avatar',
                ref: ref.current,
                path: 'dataset.file',
            });
        }
  }, [ref.current]); // eslint-disable-line

    async function handleChange(e) {
        const data = new FormData();

        data.append('avatar', e.target.files[0]);

        api.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
            'Authorization'
        )}`;

        const response = await api.put('users/avatar', data);

        const { id, avatar } = response.data;

        setFile(id);
        setPreview(avatar);
    }

    return (
        <Container>
            <label htmlFor="avatar">
                <img
                    src={
                        preview ||
                        'https://api.adorable.io/avatars/120/abott@adorable.png'
                    }
                    alt="Avatar"
                />

                <input
                    type="file"
                    id="avatar"
                    accept="image/*"
                    data-file={file}
                    onChange={handleChange}
                    ref={ref}
                />

                <span>Click on image to change it</span>
            </label>
        </Container>
    );
}
