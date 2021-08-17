import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Content } from './MovieHead.style';

const MovieHead = ({name}) => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <span>Home</span>
            </Link>
            <span>|</span>
            <span>{name}</span>
        </Content>
    </Wrapper>
);

export default MovieHead
