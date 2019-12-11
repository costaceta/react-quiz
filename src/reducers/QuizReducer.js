
import {
    SET_QUESTIONS_BANK,
    SET_QUESTIONS_SHOW,
    SET_CURRENT_CATEGORY,
    SET_CATEGORIES_LOADING,
    SET_ANSWERS,
    SET_CURRENT_QUESTION,
    SET_CURRENT_ANSWER,
    SET_ERROR,
    SET_SHOW_RESULTS,
    RESET_QUIZ,
    SET_QUESTION_MODAL_SHOW,
    SET_QUESTON_MODAL_STATUS

} from '../reducers/types';

const questions = [
    {
        id: 1,
        question: 'Which statement about Hooks is not true?',
        answer_a:
            'Hooks are 100% backwards-compatible and can be used side by side with classes',
        answer_b: 'Hooks are still in beta and not available yet',
        answer_c:
            "Hooks are completely opt-in, there's no need to rewrite existing code",
        answer_d: 'All of the above',
        correct_answer: 'b',
    },
    {
        id: 2,
        question: 'Which one is not a Hook?',
        answer_a: 'useState()',
        answer_b: 'useConst()',
        answer_c: 'useReducer()',
        answer_d: 'All of the above',
        correct_answer: 'b',
    },
    {
        id: 3,
        question: 'What Hook should be used for data fetching?',
        answer_a: 'useDataFetching()',
        answer_b: 'useApi()',
        answer_c: 'useEffect()',
        answer_d: 'useRequest()',
        correct_answer: 'c',
    },
];

export const initialState = {
    questionsBank: [],
    categories: [],
    currentCategory: [],
    categoriesQuestionsShow: false,
    categoriesLoading: false,
    questions: questions,
    questionButtonStatus: false,
    questionModalShow: false,
    questionModalStatus: false,
    currentQuestion: 0,
    currentAnswer: '',
    answers: [],
    showResults: false,
    error: '',
};

function quizReducer( state = initialState, action ) {
    switch (action.type) {
        case SET_QUESTIONS_BANK: {
            return {
                ...state,
                questionsBank: action.questionsBank,
            }
        }
        case SET_QUESTON_MODAL_STATUS:
            return {
                ...state,
                questionModalStatus: action.questionModalStatus,
            };
        case SET_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory,
            }
        case SET_QUESTION_MODAL_SHOW:
            return {
                ...state,
                questionModalShow: action.questionModalShow,
            };
        case SET_QUESTIONS_SHOW:
            return {
                ...state,
                categoriesQuestionsShow: action.categoriesQuestionsShow,
            };
        case SET_CATEGORIES_LOADING:
            return {
                ...state,
                categoriesLoading: action.categoriesLoading,
            };
        case SET_CURRENT_ANSWER:
            return {
                ...state,
                currentAnswer: action.currentAnswer,
            };
        case SET_CURRENT_QUESTION:
            return {
                ...state,
                currentQuestion: action.currentQuestion,
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.error,
            };
        case SET_SHOW_RESULTS:
            return {
                ...state,
                showResults: action.showResults,
            };
        case SET_ANSWERS:
            return {
                ...state,
                answers: action.answers,
            };
        case RESET_QUIZ:
            return {
                ...state,
                answers: [],
                currentQuestion: 0,
                currentAnswer: '',
                showResults: false,
                error: '',
            };
        default:
            return state;
    }
}

export default quizReducer;
