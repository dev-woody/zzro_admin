import { CheckboxRef } from "rc-checkbox";
import { TableProps } from "./table";
import InternalTable from "./table"

type CompoundedComponent = React.ForwardRefExoticComponent<TableProps> & {
  Table: Typeof Table;
}