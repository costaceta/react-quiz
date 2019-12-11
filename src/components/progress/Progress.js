import React from 'react';

import { ProgressStyled } from './ProgressStyled';

import StarIcon from '../../assets/icons/StarIcon';

function Progress(props) {
    return (
        <ProgressStyled>
            <h2>
                Questão {props.current} de {props.total}
            </h2>
            <div className="level">
                <span className="level__star">
                    <StarIcon />
                </span>
                <span className="level__text">
                    Difícil
                </span>

            </div>
        </ProgressStyled>
    );
}

export default Progress;
