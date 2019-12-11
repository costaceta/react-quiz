import React, {useContext} from 'react';
import QuizContext from '../../context/QuizContext';

import { QuestionStyled } from './QuestionStyled.js';

function Question() {
    const { state } = useContext( QuizContext );

    const { currentQuestion, questions, questionsBank } = state;

    // console.log('banco', questionsBank.mediumQuestions );
    const question = questions[currentQuestion]

    return (
        <QuestionStyled>
            { question.question }
        </QuestionStyled>
    );
}

export default Question;
