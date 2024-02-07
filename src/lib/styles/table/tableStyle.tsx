import styled, { css } from "styled-components";
import { propsTypes } from "types/globalTypes";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AlignBox } from "../globalStyles";

import { StyledSearchInput } from "../input/inputStyles";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaRegCaretSquareDown,
  FaRegCaretSquareUp,
  FaRegSquare,
} from "react-icons/fa";
import { CheckBox } from "../checkBoxStyled";

interface trProps {
  isHover?: boolean;
  isSelected?: boolean;
  doNoting?: boolean;
}

interface pagenationProps {
  disabled?: boolean;
  isFocus?: boolean;
}

const FilterBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0.825rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const FilterOptionBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > div:first-child {
    margin-left: 0;
  }
`;

const FilterBtn = styled.span`
  margin-left: 0.25rem;
  color: #666;
  transition: 0s;

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.primary};
  }
`;

const StyledTableBlock = styled.div`
  border: 1px solid var(--cus-color-border);
  box-sizing: border-box;
  //todo 좌우 스크롤이 꼭 필요한가?
  overflow-x: scroll;

  * {
    font-size: 0.75rem;
  }
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  text-align: center;
  box-sizing: border-box;

  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  th {
    font-weight: 800;
    background-color: var(--cus-color-fill-secondary);
    border-bottom: 2px solid var(--cus-color-border);
  }

  th,
  td {
    white-space: nowrap;
    padding: 0.5rem 0.875rem;
    font-size: 0.875rem;
    box-sizing: border-box;
  }

  td + td,
  th + th {
    border-left: 1px solid var(--cus-color-border);
    box-sizing: border-box;
  }

  tr:hover {
    background: var(--cus-color-fill-quaternary);
  }

  /* tr:nth-child(2n + 0) {
    background-color: #dadada;
  } */
  tbody tr.category td {
    width: 50% !important;
    height: 46px !important;
  }

  tbody.smallBy3 {
    border-bottom: 1px solid var(--cus-color-border);
  }
`;

const RowTable = styled.tr<trProps>`
  box-sizing: border-box;

  & + & {
    border-top: 1px solid var(--cus-color-border);
  }

  ${(props: trProps) =>
    props.isSelected &&
    css`
      background-color: #d9d9d9 !important;
    `}

  ${(props: trProps) =>
    props.isHover &&
    css`
      &:hover {
        cursor: pointer;
        /* background-color: #d9d9d9; */
      }
    `}

    ${(props: trProps) =>
    props.doNoting &&
    css`
      &:hover {
        cursor: default !important;
      }
    `}
`;

const PageNationBlock = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: center;
`;

const PageNationButton = styled.button<pagenationProps>`
  border: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 0.75rem;
  background-color: inherit;

  & + & {
    margin-left: 1rem;
  }

  &:hover {
    background-color: #fafafa;
    cursor: pointer;
  }

  ${(props: pagenationProps) =>
    props.disabled &&
    css`
      border: 0 !important;
      box-shadow: 0 !important;
      color: #d9d9d9 !important;

      &:hover {
        cursor: not-allowed;
        background-color: inherit;
      }
    `}

  ${(props: pagenationProps) =>
    props.isFocus &&
    css`
      border: 1px solid ${(props) => props.theme.colors.primary};
      box-shadow: ${(props) => "0 0 0 2px " + props.theme.opacity.p_10};
      color: ${(props) => props.theme.colors.primary};
    `}
`;

export const Table = (props: propsTypes) => {
  const {
    columns,
    content,
    url,
    searchParams,
    setSearchParams,
    moveKey,
    pagenation,
    pageCount,
    doNoting,
    action,
    align,
    filter,
    isSearch,
    filterInput,
  } = props;
  const navigate = useNavigate();
  const nowPage = Number(atob(searchParams?.get("n") || btoa("0")));
  const [isDesc, setIsDesc] = useState<boolean>(false);
  const [currPage, setCurrPage] = useState(nowPage);
  const [selectedRow, setSelectedRow] = useState<string>("");
  const [allcheck, setAllCheck] = useState<boolean>(false);
  let firstNum = currPage - (currPage % 5) + 1;
  let lastNum = currPage - (currPage % 5) + 5;
  const limit = 10;

  // const useSliceData = (posts: any) => {
  //   const offset = nowPage * limit;
  //   const result = posts?.slice(offset, offset + limit);
  //   return result;
  // };
  // const data = useSliceData(content);

  const onClickCheck = () => {
    if (content.length !== 0) {
      content.map((dataList: any) => {
        dataList.isChecked = !allcheck;
      });
      setAllCheck(!allcheck);
    }
  };

  const Pagenation = ({ data }: { data: any }) => {
    // const numPages = Math.ceil(data?.length / limit) || 1;
    const numPages = Math.ceil(pageCount / limit) || 1;
    const dataArray = () => {
      let data = [];
      for (let i = 0; i < numPages; i++) {
        data.push({ index: i });
      }
      return data;
    };
    return (
      <PageNationBlock>
        <PageNationButton
          onClick={() => {
            setSearchParams(-1);
            // setCurrPage(nowPage - 2);
          }}
          disabled={nowPage === 0}
        >
          <FaAngleDoubleLeft />
        </PageNationButton>
        {data ? (
          dataArray().map((_, i) => {
            return (
              <PageNationButton
                key={i}
                isFocus={nowPage === i && pageCount > limit}
                disabled={pageCount <= limit}
                onClick={() => setSearchParams(-(nowPage - i))}
              >
                {i + 1}
              </PageNationButton>
            );
          })
        ) : (
          <PageNationButton key={1} disabled={true}>
            {1}
          </PageNationButton>
        )}
        <PageNationButton
          onClick={() => {
            setSearchParams(1);
            // setCurrPage(nowPage);
          }}
          disabled={nowPage + 1 === numPages}
        >
          <FaAngleDoubleRight />
        </PageNationButton>
      </PageNationBlock>
    );
  };

  // useEffect(() => {
  //   const allListChecked =
  //     content &&
  //     content.length !== 0 &&
  //     content
  //       ?.map((dataList: any) => dataList.isChecked)
  //       .filter((list: boolean) => list === false);
  //   if (content && allListChecked.length === 0) {
  //     setAllCheck(true);
  //   } else setAllCheck(false);
  // }, [content]);

  useEffect(() => {
    setSelectedRow("");
  }, [content]);

  return (
    <>
      {filter && (
        <FilterBlock>
          <FilterOptionBlock>{filterInput}</FilterOptionBlock>
          {isSearch && <StyledSearchInput />}
        </FilterBlock>
      )}
      <StyledTableBlock>
        <StyledTable>
          <thead>
            <tr>
              {columns?.map((list: any, index: number) => (
                <th
                  key={index}
                  style={{ width: (1 / columns.length) * 100 + "%" }}
                >
                  {list.isCheck ? (
                    <div
                      style={{ marginRight: "0.5rem", display: "inline-block" }}
                    >
                      <CheckBox isChecked={allcheck} onClick={onClickCheck} />
                    </div>
                  ) : null}
                  {list.title}
                  {filter && list.isDesc ? (
                    <FilterBtn>
                      {isDesc ? (
                        <FaRegCaretSquareUp />
                      ) : (
                        <FaRegCaretSquareDown />
                      )}
                    </FilterBtn>
                  ) : null}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {content?.length > 0 ? (
              content?.map((contentList: any, rowIndex: number) => (
                <RowTable
                  isHover
                  doNoting={doNoting}
                  key={rowIndex}
                  className={action ? "category" : undefined}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (action && url && moveKey) {
                      action(contentList.id);
                      setSelectedRow(contentList?.id);
                    } else if (doNoting) {
                      return;
                    } else {
                      if (typeof moveKey === "object") {
                        if (moveKey.length > 2) {
                          navigate(
                            `${url}/${
                              contentList[moveKey[0]][moveKey[1]][moveKey[2]]
                            }`
                          );
                        } else {
                          navigate(
                            `${url}/${contentList[moveKey[0]][moveKey[1]]}`
                          );
                        }
                      } else if (typeof moveKey === "string") {
                        navigate(`${url}/${contentList.moveKey}`);
                      }
                    }
                  }}
                  isSelected={
                    action
                      ? contentList.id === selectedRow
                        ? true
                        : false
                      : false
                  }
                >
                  {columns.map((list: any, index: number) => {
                    return list.render ? (
                      <td style={{ height: "46px" }} key={index}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {list.render(
                            contentList[list.dataIndex],
                            contentList,
                            rowIndex
                          )}
                        </div>
                      </td>
                    ) : (
                      <td key={index}>{contentList[list.dataIndex]}</td>
                    );
                  })}
                </RowTable>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length}>데이터가 없습니다.</td>
              </tr>
            )}
          </tbody>
        </StyledTable>
      </StyledTableBlock>
      {pagenation && <Pagenation data={content} />}
    </>
  );
};
