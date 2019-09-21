import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    background: ${darken(0.03, '#eee')};
`;

export const Header = styled.header`
    background: #71b280;
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px;

    img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: 3px solid green;
    }

    div {
        margin-left: 5px;
        display: flex;
        flex-direction: column;

        span:first-child {
            font-weight: bolder;
            color: #134e5e;
        }

        span:last-child {
            font-style: italic;
            color: gray;
        }
    }
`;

export const Content = styled.div`
    width: 95%;
    height: 90%;
    margin: 0 auto;
    margin-top: 10px;
    border-radius: 7px;
    background: #eee;
    display: flex;
    flex-direction: column;
`;

export const ChatContent = styled.div`
    height: 100%;
`;

export const MessageSender = styled.div`
    height: 100px;
    width: 100%;
    padding: 10px;
    bottom: 0;
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: center;

    input {
        width: 100%;
        max-height: 40px;
        height: 60%;
        border-radius: 7px;
        border-style: none;
        padding-left: 25px;
        padding-right: 25px;
        margin-right: 8px;
    }
`;

export const MessageReceived = styled.div`
    height: 100%;
    width: auto;
    background: ${darken(0.09, '#eee')};
    margin: 10px;
    margin-left: 25px;
    padding: 10px;
    border-radius: 10px;
    display: inline-block;
    align-items: left;

    position: relative;
    background: #00aabb;
    border-radius: 0.4em;

    span:first-child {
        font-size: 16px;
    }

    span:last-child {
        font-size: 10px;
        margin-left: 5px;
    }

    &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        width: 0;
        height: 0;
        border: 20px solid transparent;
        border-right-color: #00aabb;
        border-left: 0;
        border-top: 0;
        margin-top: -10px;
        margin-left: -20px;
    }
`;

export const MessageSent = styled.div`
    height: 100%;
    width: auto;
    background: ${darken(0.09, '#eee')};
    margin: 10px;
    margin-right: 25px;
    padding: 10px;
    border-radius: 10px;
    display: inline-block;
    align-items: right;
    float: right;

    position: relative;
    background: #00aabb;
    border-radius: 0.4em;

    span:first-child {
        font-size: 16px;
    }

    span:last-child {
        font-size: 10px;
        margin-left: 5px;
    }

    &:after {
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        width: 0;
        height: 0;
        border: 20px solid transparent;
        border-left-color: #00aabb;
        border-right: 0;
        border-top: 0;
        margin-top: -10px;
        margin-right: -20px;
    }
`;
