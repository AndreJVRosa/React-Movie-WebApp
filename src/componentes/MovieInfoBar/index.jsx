import React from "react";
import PropTypes from 'prop-types';

//Helpers
import { calcTime, convertMoney} from '../../helpers';

//Styles
import { Wrapper, Content } from "./MovieInfoBar.styles";

const MovieInfoBar = ({ time, budget, revenue }) => (
    <Wrapper>
        <Content>
            <div className="collum">
                <p>Running time: {calcTime(time)}</p>
            </div>
            <div className="collum">
                <p>Budget: {convertMoney(budget)}</p>
            </div>
            <div className="collum">
                <p>Revenue: {convertMoney(revenue)}</p>
            </div>
        </Content>
    </Wrapper>
);

MovieInfoBar.propTypes = {
    time: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number,
};

export default MovieInfoBar;