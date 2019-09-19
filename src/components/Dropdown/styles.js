import styled from 'styled-components';

export const Container = styled.div`
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

export const DropdownContainer = styled.div`
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
