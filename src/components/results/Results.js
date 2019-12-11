
import React, { useContext } from 'react';

import QuizContext from '../../context/QuizContext';

import {
    Container,
    Card,
    Button,
} from 'react-bootstrap';


import {
    RESET_QUIZ,
} from '../../reducers/types';

import { ResultsStyled } from './ResultsStyled';

import MonsterIcon from '../../assets/icons/MonsterIcon';

function Results() {
    const { state, dispatch } = useContext( QuizContext );

    const restart = () => {
        dispatch({ type: RESET_QUIZ });
    }

  return (
      <ResultsStyled>
          <Container>
              <Card>
                  <Card.Body>
                        <div
                            className="results-top"
                        >
                            <MonsterIcon />
                            <div className="results-top__menssage">
                                <h2>Parabéns!</h2>
                                <p>Você finalizou o teste</p>
                            </div>
                        </div>

                        <div
                            className="results-bottom"
                        >
                            <div className="results-bottom__title">
                                <h3>Veja seu desempenho nas questões</h3>
                            </div>

                            <div className="results-bottom__wrap">

                                <div className="final-result">
                                    <div className="finalt-resul__correct">
                                        <h4>7</h4>
                                        <p>Acertos</p>
                                    </div>

                                    <div className="final-result__error">
                                        <h4>3</h4>
                                        <p>Erros</p>
                                    </div>
                                </div>

                                <div className="results-by-question">

                                    <div className="results-by-question__item">
                                        <h4>Fácil</h4>
                                        <p>Acertos: 2</p>
                                        <p>Erros: 1</p>
                                    </div>

                                    <div className="results-by-question__item">
                                        <h4>Médio</h4>
                                        <p>Acertos: 3</p>
                                        <p>Erros: 1</p>
                                    </div>

                                    <div className="results-by-question__item">
                                        <h4>Difícil</h4>
                                        <p>Acertos: 2</p>
                                        <p>Erros: 1</p>
                                    </div>

                                </div>

                                <div className="restart">
                                    <Button
                                        variant="primary"
                                        className="restart__btn"
                                        onClick={restart}
                                    >
                                        Voltar ao início
                                    </Button>
                                </div>

                            </div>
                        </div>

                  </Card.Body>
              </Card>
          </Container>
      </ResultsStyled>
  );
}

export default Results;
