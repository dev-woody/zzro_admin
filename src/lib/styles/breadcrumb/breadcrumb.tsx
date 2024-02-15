import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface Props {
  indicator: {
    name: string;
    url: String;
  }[];
}

const BreadCrumbBlock = styled.ol`
  display: flex;

  & div:nth-last-child(1) {
    font-weight: bold;
    color: #333;
  }
`;

const BreadCrumbItem = styled.li`
  font-size: 0.875rem;

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.primary} !important;
  }
`;

export const BreadCrumb = ({ indicator }: Props) => {
  const navigate = useNavigate();
  return (
    <BreadCrumbBlock>
      {indicator.map((list, index) => {
        return (
          <>
            {index > 0 ? <div style={{ margin: "0 0.5rem" }}>/</div> : ""}
            <BreadCrumbItem key={index} onClick={() => navigate(`${list.url}`)}>
              {list.name}
            </BreadCrumbItem>
          </>
        );
      })}
    </BreadCrumbBlock>
  );
};
