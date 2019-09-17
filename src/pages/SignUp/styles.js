import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    width: 100%;
    text-align: center;
    height: 100%;
    background: linear-gradient(to right, #134e5e, #71b280);
    display: flex;
    flex-direction: column;
    justify-content: center;

    > span {
        font-size: 48px;
        margin-bottom: 50px;
        margin-top: -50px;
    }

    form {
        align-self: center;
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 315px;

        input {
            background: rgba(0, 0, 0, 0.1);
            border: 0;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            color: #fff;
            margin: 0 0 10px;

            &::placeholder {
                color: rgba(255, 255, 255, 0.7);
            }
        }

        span {
            color: #fb6f91;
            align-self: flex-start;
            margin: 0 0 10px;
            font-weight: bold;
        }

        button {
            margin: 5px 0 0;
            height: 44px;
            background: #3b9eff;
            font-weight: bold;
            color: #fff;
            border: 0;
            border-radius: 4px;
            font-size: 16px;
            transition: background 0.2s;

            &:hover {
                background: ${darken(0.03, '#3b9eff')};
            }
        }

        a {
            color: #fff;
            margin-top: 15px;
            font-size: 16px;
            opacity: 0.8;

            &:hover {
                opacity: 1;
            }
        }
    }
`;
