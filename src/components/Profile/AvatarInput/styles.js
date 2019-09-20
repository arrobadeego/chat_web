import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-self: center;
    margin-bottom: 30px;
    position: relative;

    label {
        cursor: pointer;
        img {
            width: 120px;
            height: 120px;
            border: 3px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            background: #eee;
        }

        input {
            display: none;
        }

        > span {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            padding-top: 40%;
            text-align: center;
            background: rgba(255, 255, 255, 0.5);
            color: #000;
            visibility: hidden;
            opacity: 0;
            border-radius: 50%;
            transition: opacity 0.2s, visibility 0.2s;
        }
    }

    label:hover span {
        visibility: visible;
        opacity: 1;
    }
`;
