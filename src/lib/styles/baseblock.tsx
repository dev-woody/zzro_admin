import styled from "styled-components";

interface Response {
  [key: string]: any;
}

export const BaseBlockFlex = styled.div`
  display: inline-flex;
  /* align-items: stretch; */
  margin-top: 1.15rem;
  & > div {
    margin-top: 0 !important;
    /* flex-grow: 1; */
  }

  & > div + div {
    margin-left: 1rem;
  }
`;

const Base = styled.div`
  margin: 0;
  background: #fff;
  padding: 1.5rem;
  box-sizing: border-box;
  border-radius: 0.75rem;
  text-align: left;
  flex-grow: 1;
  box-shadow: 5px 5px 8px 5px #e1e1e1;
  width: 100%;

  & + & {
    margin-top: 1rem;
  }
`;

export const BaseBlock = ({ children, ...rest }: Response) => {
  return <Base {...rest}>{children}</Base>;
};
