import React, { useContext, useState, useEffect } from 'react';
import QuizContext from '../../context/QuizContext';

import { CategoriesStyled, LoaderStyled } from './Categorier.Styled';

import api from '../../services/api';

import {
    Container,
    Card,
    Row,
    Col,
    Spinner
} from 'react-bootstrap';

import {
    SET_QUESTIONS_SHOW,
    SET_CATEGORIES_LOADING,
    SET_CURRENT_CATEGORY
} from '../../reducers/types';

const Categories = () => {

    const { state, dispatch } = useContext( QuizContext );
    const { categoriesLoading, currentCategory } = state;

    // TODO: take this is states by redux
    // const [ currentCategoryId, setCurrentCategoryId ] = useState(0);
    const [ categoriesQuestionsData, setCategoriesQuestionsData ] = useState([]);


    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = async () => {

        setLoadingStatus(true);

        await api.get('api_category.php')
            .then( (response) => {
                const { trivia_categories } = response.data;

                setCategoriesQuestionsData( trivia_categories );
                setLoadingStatus(false);

            })
            .catch( error => {
                if( error.response ) {
                    console.log( 'Error', error );
                    setLoadingStatus(false);
                }
            })
    }

    const setLoadingStatus = ( status ) => {
        dispatch({
            type: SET_CATEGORIES_LOADING,
            categoriesLoading: status,
        })
    }

    const setQuestionsShow = ( status ) => {
        dispatch({
            type: SET_QUESTIONS_SHOW,
            categoriesQuestionsShow: status,
        })
    }

    const handleCategoryClick = (id, name) => {
        dispatch({
            type: SET_CURRENT_CATEGORY,
            currentCategory: { id, name },
        })
        setQuestionsShow( true );
    }

    return (
        <CategoriesStyled>
            <Container className="categories__container" >
                <h1>Categories</h1>

                <Row>
                { categoriesLoading ?

                    <LoaderStyled>
                        <Spinner animation="border" variant="primary" />
                        Buscando categorias...
                    </LoaderStyled>

                : categoriesQuestionsData.length > 0 &&
                    categoriesQuestionsData.map( ({ id, name }) => (

                        <Col className="card-item" sm={3} xs={4} key={id}>

                            <Card
                                onClick={ () => { handleCategoryClick(id, name) } }
                            >
                                <Card.Body

                                >
                                    <Card.Title >
                                        {name}
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>

                    ) ) }
                </Row>
            </Container>
        </CategoriesStyled>
    );
}

export default Categories;
