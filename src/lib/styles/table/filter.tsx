import React from "react";
import Table, { TableProps } from "./table";
import styled from "styled-components";
import { StyledTableBlock, StyledTable } from "./table";

export interface FilterProps extends TableProps {
  filter: { title: string; filterSource: JSX.Element | null }[];
}

const FilterBlock = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap; */
  max-width: 100% !important;
  overflow-x: scroll;
`;

const FilterOptionBlock = styled(StyledTable)`
  /* display: flex; */
  /* flex-wrap: wrap; */
  margin-bottom: 1rem;

  .width100 {
    width: 100%;
  }
`;

const FilterTable = (props: FilterProps) => {
  const { filter, ...rest } = props;
  return (
    <FilterBlock>
      <StyledTableBlock>
        <FilterOptionBlock>
          <tr>
            {filter.map((item) => (
              <th>{item.title}</th>
              // <td>
              //   <li>{item.filterSource}</li>
              // </td>
            ))}
          </tr>
          <tr>
            {filter.map((item) => (
              <td className={item.filterSource === null ? "width100" : ""}>
                {item.filterSource}
              </td>
            ))}
          </tr>
        </FilterOptionBlock>
      </StyledTableBlock>
      <Table {...rest} />
    </FilterBlock>
  );
};

export default FilterTable;
