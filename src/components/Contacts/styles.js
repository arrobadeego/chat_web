import styled from 'styled-components';

export const Container = styled.div`
    background: deeppink;
    height: 100%;
    width: 50%;
`;

export const Header = styled.header`
    background: greenyellow;
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

    img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: 3px solid red;
    }
`;

export const Content = styled.div`
    background: MediumSpringGreen;
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
        width: 100%;
        margin-left: 5px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        justify-items: center;

        div {
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
    }
`;
