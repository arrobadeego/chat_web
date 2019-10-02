import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { MdNotifications } from 'react-icons/md';

import api from '../../services/api';
import { answerInviteRequest } from '../../store/modules/user/actions';

import {
    Container,
    Badge,
    Scroll,
    NotificationList,
    Notification,
} from './styles';

export default function Notifications() {
    const [visible, setVisible] = useState(false);
    const [notifications, setNotifications] = useState([]);

    const dispatch = useDispatch();

    const { received } = useSelector(state => state.user.profile);
    console.tron.log(received);

    const hasUnread = useMemo(
        () => !!notifications.find(notification => notification.read === false),
        [notifications]
    );

    // useEffect(() => {
    //     async function loadNotifications() {
    //         const response = await api.get('notifications');
    //         const data = response.data.map(notification => ({
    //             ...notification,
    //         }));
    //         setNotifications(data);
    //     }
    //     loadNotifications();
    // }, []);

    function handleToggleVisible() {
        setVisible(!visible);
    }

    function handleFriendRequest(response, id) {
        dispatch(answerInviteRequest(response, id));
    }

    async function handleMarkAsRead(id) {
        // await api.put(`notifications/${id}`);
        // setNotifications(
        //     notifications.map(notification =>
        //         notification._id === id
        //             ? { ...notification, read: true }
        //             : notification
        //     )
        // );
    }

    return (
        <Container>
            <Badge onClick={handleToggleVisible} hasUnread={hasUnread}>
                <MdNotifications color="#fff" size={20} />
            </Badge>

            <NotificationList visible={visible}>
                <Scroll>
                    {received.length !== 0 ? (
                        received.map(r => (
                            <Notification>
                                <>
                                    <p>{`${r.name} added you (${r.email})`}</p>
                                    <div>
                                        <Link
                                            onClick={() =>
                                                handleFriendRequest(
                                                    true,
                                                    r.user_id
                                                )
                                            }
                                        >
                                            Accept
                                        </Link>
                                        <Link
                                            onClick={() =>
                                                handleFriendRequest(
                                                    false,
                                                    r.user_id
                                                )
                                            }
                                        >
                                            Decline
                                        </Link>
                                    </div>
                                </>
                            </Notification>
                        ))
                    ) : (
                        <div>
                            <span>There are not notifications to show</span>
                        </div>
                    )}
                </Scroll>
            </NotificationList>
        </Container>
    );
}
