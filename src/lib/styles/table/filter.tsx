import React from "react";
import { TableContents, AbstractTableProps } from "./table";
import styled from "styled-components";

export interface FilterProps extends AbstractTableProps<TableContents[]> {
  filter: React.ReactElement;
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

const FilterTable = (props: FilterProps) => {
  const { filter } = props;
  return (
    <FilterBlock>
      <FilterOptionBlock>{filter}</FilterOptionBlock>
    </FilterBlock>
  );
};

export default FilterTable;
