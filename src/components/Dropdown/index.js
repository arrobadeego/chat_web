import React, { useState, useEffect } from 'react';
import { MdMoreVert } from 'react-icons/md';

import { Container, DropdownContainer } from './styles';

export default function Dropdown({ handleClickOnList }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [container] = useState(React.createRef());

    function handleClick() {
        setIsDropdownOpen(!isDropdownOpen);
    }

    function handleClickOutside(event) {
        if (container.current && !container.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <Container ref={container}>
            <button type="button" className="button">
                <MdMoreVert size={30} onClick={handleClick} />
            </button>

            {isDropdownOpen ? (
                <DropdownContainer>
                    <ul>
                        <li onClick={() => handleClickOnList(1)}>Profile</li>
                        <li>Add new contact</li>
                        <li>Logout</li>
                    </ul>
                </DropdownContainer>
            ) : null}
        </Container>
    );
}
