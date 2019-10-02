import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { MdMoreVert } from 'react-icons/md';

import {
    Header,
    Content,
    DropDownContainer,
    DropDownContent,
    Contact,
} from './styles';
import Notifications from '../Notifications';

export default function Contacts(props) {
    const { handleClickAction } = props;
    const { avatar } = useSelector(state => state.user.profile);
    const user = useSelector(state => state.user.profile);
console.log(user);
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
        <>
            <Header>
                <div>
                    <img
                        src={
                            avatar ||
                            'https://api.adorable.io/avatars/50/abott@adorable.png'
                        }
                        alt=""
                    />
                    <Notifications />
                </div>
                <DropDownContainer ref={container}>
                    <button type="button" className="button">
                        <MdMoreVert
                            size={30}
                            onClick={handleClick}
                            color="#fff"
                        />
                    </button>

                    {isDropdownOpen ? (
                        <DropDownContent>
                            <ul>
                                <li
                                    onClick={() => handleClickAction('Profile')}
                                >
                                    Profile
                                </li>
                                <li
                                    onClick={() =>
                                        handleClickAction('NewContact')
                                    }
                                >
                                    Add new contact
                                </li>
                                <li>Logout</li>
                            </ul>
                        </DropDownContent>
                    ) : null}
                </DropDownContainer>
            </Header>
            <Content>
                {user.contacts.map(contact => (
                    <Contact>
                        <img
                            src="https://api.adorable.io/avatars/50/abott@adorable.png"
                            alt=""
                        />

                        <div>
                            <div>
                                <span>{contact.name}</span>
                                <span>Oi</span>
                            </div>
                            <span>21:59</span>
                        </div>
                    </Contact>
                ))}
            </Content>
        </>
    );
}
