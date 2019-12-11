import React, { useContext } from 'react';

import QuizContext from '../../context/QuizContext';
import {
    Modal,
    Button,

} from 'react-bootstrap';

import {
    // SET_QUESTIONS_SHOW,
    SET_ANSWERS,
    SET_CURRENT_QUESTION,
    SET_CURRENT_ANSWER,
    // SET_ERROR,
    SET_SHOW_RESULTS,
    // RESET_QUIZ,
    SET_QUESTION_MODAL_SHOW,
    // SET_QUESTON_MODAL_STATUS,
} from '../../reducers/types';

import CorrectIcon from '../../assets/icons/CorrectIcon';
import ErrorIcon from '../../assets/icons/ErrorIcon';
import ArrowRightIcon from '../../assets/icons/ArrowRightIcon';

export default function QuestionsModal() {
    const { state, dispatch } = useContext( QuizContext );
    const { questions, currentQuestion, currentAnswer, answers, showResults, error, questionModalShow,  questionModalStatus } = state;
    const question = questions[currentQuestion];

    const next = () => {
        const answer = { questionId: question.id, answer: currentAnswer };

        if( questionModalShow ) {
            dispatch({ type: SET_QUESTION_MODAL_SHOW, questionModalShow: false })
        }

        answers.push(answer);
        dispatch({type: SET_ANSWERS, answers});
        dispatch({type: SET_CURRENT_ANSWER, currentAnswer: ''});



        if ( currentQuestion + 1 < questions.length ) {
            dispatch({
                type: SET_CURRENT_QUESTION,
                currentQuestion: currentQuestion + 1,
            });
            return;
        }

        dispatch({ type: SET_SHOW_RESULTS, showResults: true });
    }

    return (
        <>
            { !questionModalStatus ?
                <Modal
                    dialogClassName="modal-error"
                    show={true}
                    onHide={ () => ('') }
                    centered
                >
                    <Modal.Body>
                        <ErrorIcon />
                        Você errou!
                        <Button
                            variant="primary"
                            onClick={next}
                        >
                            Avançar <ArrowRightIcon />
                        </Button>
                    </Modal.Body>
                </Modal>
            :
                <Modal
                    dialogClassName="modal-correct"
                    show={true}
                    onHide={ () => ('') }
                    centered
                >
                    <Modal.Body>
                        <CorrectIcon />
                        Você acertou!
                        <Button
                            variant="primary"
                            onClick={next}_
                        >
                            Avançar <ArrowRightIcon />
                        </Button>
                    </Modal.Body>
                </Modal>

            }

        </>

    );
}

