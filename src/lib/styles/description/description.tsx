import styled, { css } from "styled-components";

export type DescriptionItem = {
  label: string;
  content: JSX.Element | string;
};

type DescriptionProps = {
  span?: string;
};

export const DescriptionBlock = styled.div`
  border: 1px solid var(--cus-color-border);
  /* border-radius: 0.75rem; */
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

const DescriptionLabel = styled.div<DescriptionProps>`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  text-align: center;

  div.des {
    box-sizing: border-box;
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
    border-top: 1px solid var(--cus-color-border);
    /* border-bottom: 1px solid var(--cus-color-border); */
  }

  div.label {
    background-color: #fafafa;
    min-width: 120px;
    display: flex;
    justify-content: center;
  }

  div.contants {
    display: flex;
    align-items: center;
    flex-grow: 1;
    text-align: left;
    justify-content: flex-start;
  }

  div.label + div.contants {
    border-left: 1px solid var(--cus-color-border);
  }

  ${(props: DescriptionProps) => {
    switch (props.span) {
      case "12":
        return css`
          width: 100% !important;
          border-left: 0 !important;

          &:nth-last-child(2) {
            border-bottom: 1px solid var(--cus-color-border);
          }
        `;
      case "3":
        return css`
          width: 25%;
        `;
    }
  }}
`;

const DescriptionContent = ({
  label,
  content,
  span,
}: {
  label: string;
  content: JSX.Element | string;
  span?: string;
}) => {
  return (
    <DescriptionLabel span={span}>
      <div className="label des">
        <div
          style={{
            padding: "0.375rem 0",
            fontSize: "0.875rem",
          }}
        >
          {label}
        </div>
      </div>
      <div className="contants des">{content}</div>
    </DescriptionLabel>
  );
};

const Description = ({ data }: { data: DescriptionItem[] }) => {
  return (
    <DescriptionBlock>
      {data.map((item: DescriptionItem) => (
        <DescriptionContent label={item.label} content={item.content} />
      ))}
    </DescriptionBlock>
  );
};

export default Description;
