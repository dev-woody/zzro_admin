import { BaseBlock, Table } from "lib/styles";
import styled from "styled-components";

type ColumnType = {
  title: string;
  dataIndex: string;
  render?: (props: any) => JSX.Element | string | undefined;
}[];

type DataSource = {
  [key: string]: any;
};

type TableProps = {
  column: ColumnType;
  filter?: boolean;
  filterCom: { title: string; filterSource: JSX.Element | null }[];
  tableData: DataSource[];
};

const OrdReturnBlock = styled(BaseBlock)``;

const OrderTable = (props: TableProps) => {
  const { column, tableData, filter, filterCom } = props;

  return (
    <OrdReturnBlock>
      {filter ? (
        <Table.Filter columns={column} content={tableData} filter={filterCom} />
      ) : (
        <Table columns={column} content={tableData} />
      )}
    </OrdReturnBlock>
  );
};

export default OrderTable;
