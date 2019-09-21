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

export const DropDownContainer = styled.div`
    position: relative;
    display: inline-block;

    button {
        background: transparent;
        padding: 0;
        width: 50px;
        border: 0;
        color: #333;
        cursor: pointer;
        outline: 0;
        font-size: 40px;
    }
`;

export const DropDownContent = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 200px;
    z-index: 2;
    border: 1px solid rgba(0, 0, 0, 0.04);
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14);
    background: blue;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    li {
        padding: 8px 12px;
    }

    li:hover {
        background-color: rgba(0, 0, 0, 0.14);
        cursor: pointer;
    }
`;
