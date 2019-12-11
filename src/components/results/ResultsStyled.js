import styled from 'styled-components';

export const ResultsStyled = styled.div`

       /* Cards */
       .card {
            border-radius: 8px;
            box-shadow: 0px 1px 4px rgba(52, 60, 88, 0.4);
            flex-direction: row;
            flex: 1;
            max-width: 534px;
            margin: 63px auto;
        }

        .card-body {
            flex-direction: column;
            display: flex;
            padding: 0;
            word-break: break-word;
        }

        .card-title {
            margin: 0;
        }

        /* Results top */
        .results-top {
            align-items: center;
            background: #438DE4;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            color: #fff;
            display: flex;
            flex: 1;
            font-weight: 600;
            justify-content: center;
            min-height: 237px;

            .results-top__menssage {
                margin-left: 25px;

                h2 {
                    font-size: 36px;
                    line-height: 48px;
                    margin: 0;
                }

                p {
                    font-size: 18px;
                    line-height: 24px;
                }
            }
        }

        /* Results bottom */
        .results-bottom {
            display: flex;
            flex: 1;
            position: relative;
        }

        .results-bottom__title {
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            max-width: 270px;
            width: 100%;
            padding: 10px;
            background: #fff;
            color: #343C58;
            text-align: center;
            border-radius: 7.04px;
            position: absolute;
            top: -22px;
            left: 50%;
            margin-left: -135px;

            h3 {
                font-size: 14px;
                line-height: 19px;
                margin: 0;
                font-weight: bold;
            }
        }

        .results-bottom__wrap {
            padding: 57px 30px 27px;
            display: flex;
            flex-direction: column;
            flex: 1;
        }

        /* Final Result */
        .final-result {
            margin: 0 auto 50px;
            max-width: 200px;
            width: 100%;
            background: rgba(52, 60, 88, 0.08);
            padding: 5px 30px 10px 30px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            text-align: center;

            .finalt-resul__correct,
            .final-result__error {
                h4 {
                    font-size: 28px;
                    line-height: 36px;
                    color: #343C58;
                }

                p {
                    font-size: 13px;
                    line-height: 18px;
                    margin-bottom: 0;
                    color: #343C58;
                }
            }
        }

        /* Results by question */
        .results-by-question {
            display: flex;
            color: #343C58;
            margin-bottom: 35px;
            justify-content: space-evenly;

            .results-by-question__item {
                border-left: 1px solid #B8BED5;
                padding: 0 40px;

                &:first-child {
                    border: none;
                }

                h4 {
                    font-size: 14px;
                    line-height: 20px;
                    letter-spacing: 0.4px;
                    font-weight: 600;
                    margin: 0 0 5px;
                }

                p {
                    font-size: 14px;
                    line-height: 19px;
                    letter-spacing: 0.44px;
                    margin: 0;
                }
            }
        }


        /* Restart */

        .restart {
            text-align: center;

            .restart__btn {
                background: #0467DB;
                border-radius: 8px;
                color: #fff;
                display: flex;
                font-weight: bold;
                margin-top: 40px;
                margin: 40px auto 0;
                padding: 11px 24px;
            }
        }
`;
