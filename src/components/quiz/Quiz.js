import React, { useReducer } from 'react';

import QuizContext from '../../context/QuizContext';
import quizReducer, { initialState } from '../../reducers/QuizReducer';

import Categories from '../categories/Categories';
import Questions from '../questions/Questions';

const Quiz = () => {

    const [ state, dispatch ] = useReducer( quizReducer, initialState );
    const { categoriesQuestionsShow } = state;

    return (
        <QuizContext.Provider value={{ state, dispatch }}>

            { categoriesQuestionsShow ?
                <Questions />
            :
                <Categories />
            }

        </QuizContext.Provider>
    );
}

export default Quiz;
