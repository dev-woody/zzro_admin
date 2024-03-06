import { AnyObject } from "types/globalTypes";
import type { Reference } from 'rc-table';
import { TableProps } from "./table";

// export type RefTable = <RecordType extends AnyObject = AnyObject>(
//   props: React.PropsWithChildren<TableProps<RecordType>> & React.RefAttributes<Reference>,
// ) => React.ReactElement;

export type RefTable = <RecordType extends AnyObject = AnyObject>(
  props: React.PropsWithChildren<TableProps<RecordType>> & React.RefAttributes<Reference>,
) => React.ReactElement;