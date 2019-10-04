import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdMoreVert } from 'react-icons/md';

import {
    Header,
    Content,
    DropDownContainer,
    DropDownContent,
    Contact,
} from './styles';
import Notifications from '../Notifications';
import { startChatRequest } from '../../store/modules/user/actions';
import { logout } from '../../store/modules/auth/actions';

export default function Contacts(props) {
    const dispatch = useDispatch();

    const { handleClickAction } = props;
    const { avatar } = useSelector(state => state.user.profile);
    const user = useSelector(state => state.user.profile);
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

    function handleStartChat(contact_id) {
        dispatch(startChatRequest(contact_id));
    }

    function handleLogout() {
        dispatch(logout());
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
                                <li onClick={() => handleLogout()}>Logout</li>
                            </ul>
                        </DropDownContent>
                    ) : null}
                </DropDownContainer>
            </Header>
            <Content>
                {user.contacts.map(contact => (
                    <Contact
                        key={contact.user_id}
                        onClick={() => handleStartChat(contact.user_id)}
                    >
                        <img
                            src={
                                contact.avatar ||
                                'https://api.adorable.io/avatars/50/abott@adorable.png'
                            }
                            alt=""
                        />
                        <div>
                            <span>{contact.name}</span>
                            <div>
                                <span>Oi</span>
                                <span>21:59</span>
                            </div>
                        </div>
                    </Contact>
                ))}
            </Content>
        </>
    );
}
