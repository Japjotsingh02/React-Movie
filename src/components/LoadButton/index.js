import React from "react";
import PropTypes from 'prop-types'

import { Wrapper } from "./LoadButton.style";

const Load= ({text,callback}) => (
    <Wrapper type="button" onClick={callback}>
        {text}
    </Wrapper>
);

Load.propTypes={
    text:PropTypes.string,
    callback:PropTypes.func,
}

export default Load;