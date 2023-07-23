import React from "react";

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

export default MovieInfoBar;