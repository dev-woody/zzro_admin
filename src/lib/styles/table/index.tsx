import { TableProps } from "./table";
import InternalTable from "./table";
import { RefTable } from "./interface";
import Filter from "./filter";

type CompoundedComponent = React.ForwardRefExoticComponent<
  TableProps & React.RefAttributes<RefTable>
> & {
  Filter: typeof Filter;
  /** @internal */
};

const Table = InternalTable as CompoundedComponent;
Table.Filter = Filter;

export default Table;
