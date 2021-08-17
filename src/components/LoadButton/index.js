import React from "react";

import { Wrapper } from "./LoadButton.style";

const Load= ({text,callback}) => (
    <Wrapper type="button" onClick={callback}>{text}</Wrapper>
);

export default Load;