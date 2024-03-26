import React from "react";
import styled, { css } from "styled-components";
import { propsTypes } from "types/globalTypes";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AlignBox } from "../globalStyles";

import { type TableProps as RcTableProps } from "rc-table";

import { StyledSearchInput } from "../input/input";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaRegCaretSquareDown,
  FaRegCaretSquareUp,
} from "react-icons/fa";
import Checkbox from "../checkBox/checkBox";
import { UseFormRegister } from "react-hook-form";
import { boolean } from "yup";

export interface AbstractTableProps<T> {
  columns: any;
  content: T;
  url?: string;
  searchParams?: any;
  setSearchParams?: any;
  moveKey?: string;
  pagenation?: boolean;
  pageCount?: number;
  doNoting?: boolean;
  // register?: UseFormRegister<{ [key: string]: string }>;
  // action;
  // align;
  // filter;
  // isSearch;
  // filterInput;
}

export interface TableContents {
  [key: string]: any;
}

export interface TableProps<RecordType = any>
  extends Omit<RcTableProps<RecordType>, "data" | "columns"> {
  columns: any;
  content: RcTableProps<RecordType>["data"];
  url?: string;
  searchParams?: any;
  setSearchParams?: any;
  moveKey?: string;
  pagenation?: boolean;
  pageCount?: number;
  doNoting?: boolean;
  nonPadding?: boolean;
  // register?: UseFormRegister<{ [key: string]: string }>;
  // action;
  // align;
  // filter;
  // isSearch;
  // filterInput;
}

interface trProps {
  isHover?: boolean;
  isSelected?: boolean;
  doNoting?: boolean;
}

interface pagenationProps {
  disabled?: boolean;
  isFocus?: boolean;
}

export const StyledTableBlock = styled.div`
  /* width: 100%; */
  /* border: 1px solid var(--cus-color-border); */
  box-sizing: border-box;
  //todo 좌우 스크롤이 꼭 필요한가?
  /* overflow-x: hidden; */
  overflow-y: visible;
  /* overflow-x: auto; */

  * {
    font-size: 0.75rem;
  }
`;

export const StyledTable = styled.table<{ nonPadding?: boolean }>`
  border-collapse: collapse;
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  background-color: #fff;
  /* border: 1px solid var(--cus-color-border); */

  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  * {
    font-size: 0.875rem;
  }

  th {
    font-weight: bold;
    background-color: var(--cus-color-fill-secondary);
    border: 1px solid var(--cus-color-border);
    border-top: 2px solid #333;
    border-bottom: 2px solid #333;
  }

  td {
    border: 1px solid var(--cus-color-border);
    /* line-height: 2; */
    /* vertical-align: center; */
  }

  th,
  td {
    white-space: nowrap;
    padding: 0.5rem 0.875rem;
    box-sizing: border-box;
    vertical-align: middle;
  }

  td {
    div {
      margin: 0 auto;
    }
  }

  tbody tr:hover {
    background: var(--cus-color-fill-quaternary);
  }

  img {
    height: 64px;
  }

  ${(props) =>
    props.nonPadding &&
    css`
      td {
        /* padding: 0; */
      }
    `}/* tr:first-child:hover {
    background: none;
  } */

  /* tr:nth-child(2n + 0) {
    background-color: #dadada;
  } */
`;

const RowTable = styled.tr<trProps>`
  box-sizing: border-box;

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

// const InternalTable: React.ForwardRefRenderFunction<ColumnRef, TableProps> = (
const InternalTable = (props: TableProps) => {
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
    nonPadding,
    // action,
    // filter,
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
    if (content?.length !== 0) {
      content?.map((dataList: any) => {
        dataList.isChecked = !allcheck;
      });
      setAllCheck(!allcheck);
    }
  };

  const Pagenation = ({ data }: { data: any }) => {
    // const numPages = Math.ceil(data?.length / limit) || 1;
    const numPages = (pageCount && Math.ceil(pageCount / limit)) || 1;
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
        {data && pageCount ? (
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
      <StyledTableBlock>
        <StyledTable nonPadding={nonPadding}>
          <thead>
            <tr>
              {columns?.map((list: any, index: number) => (
                <th
                  key={index}
                  style={{ ...list.style }}
                  // style={{ width: (1 / columns.length) * 100 + "%" }}
                >
                  {list.isCheck ? (
                    <div
                      style={{ marginRight: "0.5rem", display: "inline-block" }}
                    >
                      <Checkbox />
                    </div>
                  ) : null}
                  {list.title}
                  {/* {filter && list.isDesc ? (
                    <FilterBtn>
                      {isDesc ? (
                        <FaRegCaretSquareUp />
                      ) : (
                        <FaRegCaretSquareDown />
                      )}
                    </FilterBtn>
                  ) : null} */}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {content?.length && content?.length > 0 ? (
              content?.map((contentList: any, rowIndex: number) => (
                <RowTable
                  isHover
                  doNoting={doNoting}
                  key={rowIndex}
                  // className={action ? "category" : undefined}
                  // onClick={(e) => {
                  //   e.stopPropagation();
                  //   if (action && url && moveKey) {
                  //     action(contentList.id);
                  //     setSelectedRow(contentList?.id);
                  //   } else if (doNoting) {
                  //     return;
                  //   } else {
                  //     if (typeof moveKey === "object") {
                  //       if (moveKey.length > 2) {
                  //         navigate(
                  //           `${url}/${
                  //             contentList[moveKey[0]][moveKey[1]][moveKey[2]]
                  //           }`
                  //         );
                  //       } else {
                  //         navigate(
                  //           `${url}/${contentList[moveKey[0]][moveKey[1]]}`
                  //         );
                  //       }
                  //     } else if (typeof moveKey === "string") {
                  //       navigate(`${url}/${contentList.moveKey}`);
                  //     }
                  //   }
                  // }}
                  // isSelected={
                  //   action
                  //     ? contentList.id === selectedRow
                  //       ? true
                  //       : false
                  //     : false
                  // }
                >
                  {columns.map((list: any, index: number) => {
                    return list.render ? (
                      <td
                        style={{
                          height: "46px",
                        }}
                        key={index}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: "inherit",
                            height: "100%",
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
                <td colSpan={columns.length}>데이터가 없습니다. </td>
              </tr>
            )}
          </tbody>
        </StyledTable>
      </StyledTableBlock>
      {pagenation && <Pagenation data={content} />}
    </>
  );
};

const Table = React.forwardRef<ReferenceError, TableProps>(InternalTable);

export default Table;
