import React, { useContext, useEffect } from 'react';
import api from '../../services/api';

import Progress from '../progress/Progress';
import Question from '../question/Question';
import Answers from '../answers/Answers';
import Results from '../results/Results';

import QuizContext from '../../context/QuizContext';

import { QuestionsStyled } from './QuestionsStyled.js';

import CloseIcon from '../../assets/icons/closeIcon';
import QuestionsModal from '../questionsModal/QuestionsModal';

import {
    Container,
    Row,
    Col,
    Button,
    Card,
} from 'react-bootstrap';

import {
    SET_QUESTIONS_SHOW,
    RESET_QUIZ,
    SET_QUESTIONS_BANK,
    // SET_CURRENT_QUESTION,
    SET_QUESTION_MODAL_SHOW,
    SET_QUESTON_MODAL_STATUS,
} from '../../reducers/types';

function Questions() {

    const { state, dispatch } = useContext( QuizContext );

    // const [status, setStatus] = useState({
    //     type: '',
    //     ids:[],
    //     correct: 0,
    //     wrong: 0,

    // })

    const {
        questionsBank,
        questions,
        currentQuestion,
        currentAnswer,
        answers,
        showResults,
        error,
        questionModalShow,
        currentCategory
    } = state;

    const question = questions[currentQuestion];

    const { id: categoryID, name: categoryName } = currentCategory;

     useEffect( () => {

        const getQuestions = async () => {

            const [easy, medium, hard] = await Promise.all([
                api.get(`api.php?amount=5&category=${categoryID}&difficulty=medium&type=multiple`),
                api.get(`api.php?amount=5&category=${categoryID}&difficulty=easy&type=multiple`),
                api.get(`api.php?amount=5&category=${categoryID}&difficulty=hard&type=multiple`),
            ])

            const mediumQuestions = formatAPIQuizData(medium.data.results);
            const easyQuestions   = formatAPIQuizData(easy.data.results);
            const hardQuestions   = formatAPIQuizData(hard.data.results);

            const questionsRequestData = {
                medium: {
                    ...mediumQuestions,
                },
                easy: {
                    ...easyQuestions,
                },
                hard: {
                    ...hardQuestions,
                }
            };

            dispatch({
                type: SET_QUESTIONS_BANK,
                questionsBank: questionsRequestData,
            })

        }

        getQuestions();


    }, [categoryID])

    const decodeHTML = (html) => {
        var txt = document.createElement("textarea")
        txt.innerHTML = html
        return txt.value
    }

    const formatChoices = choices => {
        return choices.map((choice, index) => {
            return { text: decodeHTML(choice.trim()) }
        })
    }
    const combineAllChoices = question => question.correct_answer.split(',').concat(question.incorrect_answers)

    const formatQuestion = (question, index) => {
        return {
            id: index,
            category: question.category,
            type: question.type,
            difficulty: question.difficulty,
            text: decodeHTML(question.question.trim()),
            choices: formatChoices(combineAllChoices(question)),
            correct: decodeHTML(question.correct_answer.trim()),
            incorrect: question.incorrect_answer,
        }
    }

    const formatAPIQuizData = questions => {
        return questions.map((question, index) => {
            return formatQuestion(question, index)
        })
    }

    const renderError = () => {
        if (!error) {
            return;
        }

        return <div className="error">{error}</div>;
    };

    const renderResultMark = (question, answer) => {
        if (question.correct_answer === answer.answer) {
            return <span className="correct">Correct</span>;
        }

        return <span className="failed">Failed</span>;
    };

    const renderResultsData = () => {
        return answers.map(answer => {
            const question = questions.find(
                question => question.id === answer.questionId
            );

            return (
                <div key={question.id}>
                    {question.question} - {renderResultMark(question, answer)}
                </div>
            );
        });
    };

    const next = () => {

        const answer = { questionId: question.id, answer: currentAnswer };
        const { correct_answer } = question;

        if( currentAnswer === correct_answer ) {
            dispatch({ type: SET_QUESTON_MODAL_STATUS, questionModalStatus: true })
            dispatch({ type: SET_QUESTION_MODAL_SHOW, questionModalShow: true })
        } else {
            dispatch({ type: SET_QUESTION_MODAL_SHOW, questionModalShow: true })
            dispatch({ type: SET_QUESTON_MODAL_STATUS, questionModalStatus: false })
        }
    };

    const handleCloseQuestionsClick = () => {
        dispatch({ type:  SET_QUESTIONS_SHOW, categoriesQuestionsShow: false });
    }

    // console.log( 'Questions', questions );
    // console.log( 'Respostas', answers );
    // console.log( 'Questão atual', questions[currentQuestion] );
    console.log('Banco de questoes', questionsBank.medium);

    if ( showResults ) {
        return (
            <Results />
        );
    } else {
        return (
            <QuestionsStyled>
                <Container>

                    <Row>
                        <Col sm={12}>
                            <div className="question-top-bar">
                                <h1 className="question-top-bar__title">{categoryName}</h1>

                                <Button
                                    className="question-top-bar__btn"
                                    variant="link"
                                    onClick={ handleCloseQuestionsClick }
                                >
                                    <CloseIcon className="question-top-bar__icon" />
                                    Fechar
                                </Button>
                            </div>
                        </Col>

                        <Col sm={12}>
                            <Card>
                                <Card.Body>
                                    <Progress
                                        total={ questions.length }
                                        current={ currentQuestion + 1 }
                                    />

                                    <Question />

                                    { renderError() }

                                    {/* <Answers /> */}

                                    { !currentAnswer ?
                                        <Button
                                            className="card-btn"
                                            variant="primary"
                                            disabled={true}
                                        >
                                          Responder
                                      </Button>
                                    :
                                        <Button
                                            className="card-btn"
                                            variant="primary"
                                            onClick={next}
                                        >
                                            Responder
                                        </Button>
                                    }

                                    { questionModalShow ?
                                        <QuestionsModal /> : null
                                    }


                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </QuestionsStyled>
        );
    }
}

export default Questions;
