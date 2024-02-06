import styled, { createGlobalStyle, css } from "styled-components";

type propsType = {
  align?: string;
};

export const AlignBox = styled.div<propsType>`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${(props: propsType) =>
    props.align === "vertical" &&
    css`
      flex-direction: row;
    `}

  & + & {
    /* margin-left: 1rem; */
  }
`;

export const ErrorMsg = styled.div<propsType>`
  display: flex;
  align-items: center;
  color: #ff4d4f;
  margin: 0.25rem 0.25rem;
  font-size: 0.75rem;

  ${(props: propsType) =>
    props.align === "vertical" &&
    css`
      margin-left: 1rem;
    `}
`;

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

html {
  font-size: 16px;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  text-decoration-line: none;
}
`;

export default GlobalStyle;
