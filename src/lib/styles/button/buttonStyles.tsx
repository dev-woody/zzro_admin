import styled, { css } from "styled-components";

type styledProps = {
  fullWidth?: boolean;
  needMarginTop?: boolean;
  status?: string;
  disable?: boolean;
  withInput?: boolean;
  search?: boolean;
};

export const Button = styled.button<styledProps>`
  & + & {
    margin-left: 0.5rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.625rem 0.875rem;
  border-radius: 0.75rem;
  border: 1px solid #d9d9d9;
  color: #000;
  background-color: #fff;
  text-align: center;
  font-size: 0.875rem;
  box-sizing: border-box;

  ${(props: styledProps) =>
    props.fullWidth &&
    css`
      width: 100% !important;
    `}

  ${(props: styledProps) =>
    props.needMarginTop &&
    css`
      margin-top: 1rem;
    `}

    ${(props: styledProps) =>
    props.status === "primary" &&
    css`
      background-color: ${(props) => props.theme.colors.primary} !important;
      color: #fff !important;
      /* border: 0px !important; */
      font-weight: 600;

      &:hover {
        /* border: 0px !important; */
        background-color: ${(props) => props.theme.opacity.p_80} !important;
      }
    `}

        ${(props: styledProps) =>
    props.status === "success" &&
    css`
      border: 1px solid var(--cus-color-success-border);
      background-color: var(--cus-color-success-bg);
      color: var(--cus-color-success);
      font-weight: 600;

      &:hover {
        border: 1px solid var(--cus-color-success-border-hover) !important;
        background-color: var(--cus-color-success-hover);
        color: var(--cus-color-success-text-hover);
      }
    `}

    ${(props: styledProps) =>
    props.withInput &&
    css`
      width: 200px;
    `}

    ${(props: styledProps) =>
    props.search &&
    css`
      min-width: 0;
      width: 65px !important;
      border-radius: 0 0.75rem 0.75rem 0;
    `}

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.primary};
    box-shadow: ${(props) => "0 0 0 2px " + props.theme.opacity.p_10};
    color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
  }

  ${(props: styledProps) =>
    props.disable &&
    css`
      border: 0px !important;
      box-shadow: 0 0 0 0 !important;
      color: #d9d9d9 !important;
      background-color: #f9f9f9 !important;

      &:hover {
        cursor: not-allowed !important;
        background-color: #f9f9f9 !important;
      }
    `}
`;
