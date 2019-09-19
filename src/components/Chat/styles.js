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
