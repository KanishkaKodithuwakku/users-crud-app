import { createGlobalStyle } from "styled-components";
import { COLORS,WEIGHTS ,FAMILIES,TYPE_SCALE } from "../../utils/themes";

const GlobalStyles = createGlobalStyle`
html, body, span, ul,ol,li,
h1,h2,h3,h4,h5,h6,
p,section, nav,
footer,header,article,strong ,
img{
margin :0;
padding: 0;
border:0;
font-size:100%;
vertical-align:baseline;
}
*,
*:before,
*:after{
    box-sizing: border-box;
}


html {
    --color-primary : ${COLORS.primary};
    --color-secondary : ${COLORS.secondary};
    --color-ternery : ${COLORS.ternery};
    --color-urgent : ${COLORS.light};

    --font-family : ${FAMILIES.primary};

    --font-weight-normal : ${WEIGHTS.normal};
    --font-weight-medium : ${WEIGHTS.medium};
    --font-weight-bold : ${WEIGHTS.bold};

    --default-font-size : ${TYPE_SCALE.text};

    --heading-size-h1 : ${TYPE_SCALE.header_1};
    --heading-size-h2 : ${TYPE_SCALE.header_2};
    --heading-size-h3 : ${TYPE_SCALE.header_3};
    --heading-size-h4 : ${TYPE_SCALE.header_4};
    --heading-size-h5 : ${TYPE_SCALE.header_5};
    --heading-size-h6 : ${TYPE_SCALE.header_6};
}


html,body{
    height:100%;
}
body{
    color : var(--color-urgent);
    font-weight : var(--font-weight-normal);
    font-size: var(--default-font-size);
    font-family : var(--font-family);
}
`;

export default GlobalStyles;
