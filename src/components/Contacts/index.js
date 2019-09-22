import React, { useState, useEffect } from 'react';
import { MdMoreVert } from 'react-icons/md';

import { Header, Content, DropDownContainer, DropDownContent } from './styles';

export default function Contacts(props) {
    const { handleClickAction } = props;

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [container] = useState(React.createRef());

    // function handleClickNavigation(e) {

    //     handleClickAction = e;
    // }

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
                <img
                    src="https://api.adorable.io/avatars/50/abott@adorable.png"
                    alt=""
                />

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
                                <li>
                                    <a
                                        onClick={() =>
                                            handleClickAction('Profile')
                                        }
                                    >
                                        Profile
                                    </a>
                                </li>
                                <li>Add new contact</li>
                                <li>Logout</li>
                            </ul>
                        </DropDownContent>
                    ) : null}
                </DropDownContainer>
            </Header>
            <Content>
                <img
                    src="https://api.adorable.io/avatars/50/abott@adorable.png"
                    alt=""
                />

                <div>
                    <div>
                        <span>Jobson</span>
                        <span>Teu cu</span>
                    </div>
                    <span>21:59</span>
                </div>
            </Content>
        </>
    );
}
