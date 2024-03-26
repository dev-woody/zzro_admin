import React from "react";
import Table, { TableProps } from "./table";
import styled from "styled-components";
import { StyledTableBlock, StyledTable } from "./table";

export interface FilterProps extends TableProps {
  filter: { title: string; filterSource: JSX.Element | null; style?: object }[];
}

const FilterBlock = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap; */
  width: 100% !important;
  /* position: relative; */
  /* overflow-x: scroll; */

  //! 셀렉트 박스 수정
`;

const FilterTableBlock = styled(StyledTableBlock)`
  width: 100%;
  /* position: absolute; */
  /* overflow-x: auto;
  overflow-y: visible; */
  white-space: nowrap;
`;

const FilterOptionBlock = styled(StyledTable)`
  /* display: flex; */
  /* flex-wrap: wrap; */
  margin-bottom: 1rem;
  /* overflow-x: hidden !important; */
  /* width: 100%; */
  td div {
    margin: 0;
  }
  .width100 {
    width: 100%;
  }
`;

const FilterTable = (props: FilterProps) => {
  const { filter, ...rest } = props;
  return (
    <FilterBlock>
      <FilterTableBlock>
        <FilterOptionBlock>
          <thead>
            <tr>
              {filter.map((item) => (
                <th
                  style={{
                    height: "46px",
                    ...item.style,
                  }}
                >
                  {item.title}
                </th>
                // <td>
                //   <li>{item.filterSource}</li>
                // </td>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {filter.map((item) => (
                <td
                  className={item.filterSource === null ? "width100" : ""}
                  style={{
                    height: "46px",
                  }}
                >
                  {item.filterSource}
                </td>
              ))}
            </tr>
          </tbody>
        </FilterOptionBlock>
      </FilterTableBlock>
      <Table {...rest} />
    </FilterBlock>
  );
};

export default FilterTable;
