import styled from 'styled-components';

export const QuestionsStyled = styled.div`
    font-size: 16px;

    .question-top-bar {
        padding: 10px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .question-top-bar__title {
        font-size: 24px;
        margin: 0;
    }

    .question-top-bar__btn {
        color: #53595F;
        font-size: 14px;
        font-weight: bold;
        &:hover {
            text-decoration: none!important;
        }
    }

    .question-top-bar__icon {
        margin-right: 5px;
    }

     /* Cards */
     .card {
        border: 1px solid #E4E4E6;
        border-radius: 8px;
        box-shadow: 0px 1px 4px rgba(52, 60, 88, 0.4);
        flex-direction: row;
        margin-bottom: 50px;
    }

    .card-body {
        padding: 32px 40px;
    }

    .card-title {
        margin: 0;
    }

    .card-btn {
        background: #0467DB;
        border-radius: 8px;
        color: #fff;
        display: flex;
        font-weight: bold;
        margin-top: 40px;
        margin: 40px auto 0;
        padding: 11px 24px;

        &:disabled {
            background: #C9CCCF;
            border: 1px solid #C9CCCF;
            cursor: not-allowed;
        }
    }
`;
