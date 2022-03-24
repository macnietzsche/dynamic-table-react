export type TableDataType = Array<{ [key: string]: string }>;
export type SortStatusType = { [key: string]: number };

export interface DynamicTableProps {
  data: TableDataType;
}
