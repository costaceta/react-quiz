import styled from 'styled-components';

export const ProgressStyled = styled.div`
    display: flex;
    justify-content: space-between;

    h2{
        font-size: 18px;
        line-height: 24px;
        margin-bottom: 24px;
        font-weight: 600;
    }

    .level {
        background: rgba(52, 60, 88, 0.2);
        border-radius: 14px;
        font-size: 12px;
        line-height: 16px;
        display: flex;
        align-items: center;
        color: #343C58;
        padding: 5px 15px 5px 6px;
        height: 20px;
    }

    .level__star {
        display: flex;
    }

`;
