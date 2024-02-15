import styled, { css } from "styled-components";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { priceToString } from "lib/function/changeInput";

const ProgressInput = styled.div<{ val: number }>`
  width: 0%;
  height: 6px;
  ${(props) =>
    props.val > 50 &&
    css`
      width: ${props.val}%;
      background-color: var(--cus-color-success-text);
    `}

  ${(props) =>
    props.val <= 50 &&
    css`
      width: ${props.val}%;
      background-color: var(--cus-color-primary-text);
    `}

      ${(props) =>
    props.val < 0 &&
    css`
      width: ${-props.val}%;
      background-color: var(--cus-color-error-text);
    `}
`;

const ProgressColor = styled.div<{ val: number }>`
  ${(props) =>
    props.val > 50 &&
    css`
      color: var(--cus-color-success-text);
    `}

  ${(props) =>
    props.val <= 50 &&
    css`
      color: var(--cus-color-primary-text);
    `}

      ${(props) =>
    props.val < 0 &&
    css`
      color: var(--cus-color-error-text);
    `}
`;

export const ProgressBar = ({
  title,
  per,
  amount,
}: {
  title: string;
  per: number;
  amount: string;
}) => {
  return (
    <div>
      <div
        style={{
          marginBottom: "10px",
          fontSize: "0.875rem",
        }}
      >
        {title}
      </div>
      <div
        style={{
          marginBottom: "10px",
          fontWeight: "bold",
          fontSize: "1.25rem",
        }}
      >
        ₩&nbsp;{amount}
      </div>
      <ProgressColor
        val={per}
        style={{
          marginBottom: "10px",
          fontSize: "0.875rem",
        }}
      >
        {per > 0 ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        {per}%
      </ProgressColor>
      <div
        style={{
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            // width: `${100%}`,
            height: "6px",
            backgroundColor: "#ddd",
            borderRadius: 100,
            overflow: "hidden",
          }}
        >
          <ProgressInput val={per} />
        </div>
      </div>
      <div
        style={{
          fontSize: "0.875rem",
        }}
      >
        작년대비 ({per}%)
      </div>
    </div>
  );
};

export const ProgressData = ({
  title,
  per,
  amount,
  info,
}: {
  title: string;
  per?: number;
  amount: string;
  info: { title: string; data: number | string }[];
}) => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <div
          style={{
            marginBottom: "10px",
            fontSize: "0.875rem",
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginBottom: "10px",
            fontWeight: "bold",
            fontSize: "1.25rem",
          }}
        >
          ₩&nbsp;{amount}
        </div>
        {per ? (
          <ProgressColor
            val={per}
            style={{
              marginBottom: "10px",
              fontSize: "0.875rem",
            }}
          >
            {per > 0 ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
            {per}% 작년 대비 {title}
          </ProgressColor>
        ) : (
          ""
        )}
      </div>
      <div>
        {info.map((list, index) => (
          <div
            style={{
              fontSize: "0.875rem",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ marginBottom: "10px", display: "flex" }}>
              <span
                style={{
                  display: "block",
                  width: "10px",
                  height: "10px",
                  marginRight: "10px",
                  borderRadius: 100,
                  backgroundColor: `${index === 0 ? "#ff4d4f" : "#52c41a"}`,
                }}
              ></span>
              {list.title}
            </div>
            <div>
              {typeof list.data === "number"
                ? priceToString(list.data)
                : list.data}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
