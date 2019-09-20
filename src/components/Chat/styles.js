import styled from 'styled-components';

export const Container = styled.div`
    background: yellow;
    height: 100%;
    width: 100%;
`;

export const Header = styled.header`
    background: aqua;
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
            color: purple;
        }

        span:last-child {
            font-style: italic;
            color: gray;
        }
    }
`;

export const Content = styled.div`
    background: indigo;
    width: 95%;
    height: 90%;
    margin: 0 auto;
    margin-top: 10px;
    border-radius: 7px;

    display: flex;
    flex-direction: column;
`;

export const ChatContent = styled.div`
    height: 100%;
    background: thistle;
    margin-bottom: 5%;
`;

export const MessageSender = styled.div`
    height: 20%;
    width: 100%;
    padding: 10px;
    background: orange;
    bottom: 0;
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: center;

    input {
        width: 100%;
        height: 60%;
        border-radius: 7px;
        border-style: none;
        padding-left: 25px;
        padding-right: 25px;
        margin-right: 8px;
    }
`;
