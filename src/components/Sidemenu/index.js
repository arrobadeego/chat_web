import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Sidemenu({ children }) {
    return <Container>{children}</Container>;
}

Sidemenu.propTypes = {
    children: PropTypes.element.isRequired,
};
