import styled, { css } from "styled-components";

interface TagProps {
  text: string;
  color?: string;
}

const TagBlock = styled.div<{ color?: string }>`
  padding: 0.5rem 0.75rem;
  border-radius: 0.75rem;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  color: #000;
  box-sizing: border-box;
  text-align: center;
  font-size: 0.75rem;
  width: fit-content;

  ${(props) =>
    props.color === "error" &&
    css`
      border: 1px solid var(--cus-color-error-border);
      background-color: var(--cus-color-error-bg);
      color: var(--cus-color-error);
    `}

  ${(props) =>
    props.color === "success" &&
    css`
      border: 1px solid var(--cus-color-success-border);
      background-color: var(--cus-color-success-bg);
      color: var(--cus-color-success);
    `}

      ${(props) =>
    props.color === "info" &&
    css`
      border: 1px solid var(--cus-color-info-border);
      background-color: var(--cus-color-info-bg);
      color: var(--cus-color-info);
    `}

          ${(props) =>
    props.color === "warning" &&
    css`
      border: 1px solid var(--cus-color-warning-border);
      background-color: var(--cus-color-warning-bg);
      color: var(--cus-color-warning);
    `}
`;

const Tag = (props: TagProps) => {
  const { text, color } = props;
  return <TagBlock color={color}>{text}</TagBlock>;
};

export default Tag;
