import styled from 'styled-components';

export const AnswerStyled = styled.div`

    button {
        border: 1px solid #C9CCCF;
        box-sizing: border-box;
        box-shadow: 0px 1px 2px rgba(52, 60, 88, 0.4);
        border-radius: 8px;
        color: #1E2124;
        margin-bottom: 16px;
        padding: 12px 16px 24px;
        text-align: left;

        &:hover {
            color: #1E2124;
            background: transparent;
            border: 1px solid #0467DB;
        }

        &:focus {
            box-shadow: none;
        }

        &:not(:disabled):not(.disabled):active {
            background: none;
            color: #1E2124;
        }

        &.selected {
            border: 1px solid #0467DB;
        }
    }

`;
