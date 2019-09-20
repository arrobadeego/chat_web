import styled from 'styled-components';

export const Header = styled.header`
    background: greenyellow;
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px;

    > span {
        margin-left: 5px;
        font-size: 16px;
    }
`;

export const Content = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;

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
    }
`;