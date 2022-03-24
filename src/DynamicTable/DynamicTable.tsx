import React, { useMemo, useState } from 'react';
import { DynamicTableProps, SortStatusType, TableDataType } from './types';
import { DynamicTableLayout, CustomButton } from './DynamicTable.style';

const DynamicTable: React.FC<DynamicTableProps> = ({ data }) => {
  const uniqueTitleHeaders = useMemo(() => {
    return data.reduce((acc, item) => {
      const itemKeys = Object.keys(item);
      const uniqueItemKeys = itemKeys.filter(key => !acc.includes(key));
      return [...acc, ...uniqueItemKeys];
    }, [] as string[]);
  }, [data]);

  const initialSortState: SortStatusType = useMemo(() => {
    return uniqueTitleHeaders.reduce((acc, item) => {
      return { ...acc, [item]: 1 };
    }, {} as SortStatusType);
  }, [uniqueTitleHeaders]);

  const [tableData, setTableData] = useState<TableDataType>(data);

  const [sortStatus, setSortStatus] =
    useState<SortStatusType>(initialSortState);

  const handleSortRows = (columnKey: string) => {
    const newSortState = sortStatus[columnKey] * -1;
    const sortedData = data.sort((a, b) => {
      let value = 0;
      if (a[columnKey] > b[columnKey]) {
        value = 1;
      }
      if (a[columnKey] < b[columnKey]) {
        value = -1;
      }
      return value * newSortState;
    });
    setTableData(sortedData);
    setSortStatus({ ...sortStatus, [columnKey]: newSortState });
  };

  return (
    <DynamicTableLayout>
      <thead>
        <tr>
          {uniqueTitleHeaders.map(title => (
            <th key={`title-header-${title}`}>
              <CustomButton onClick={() => handleSortRows(title)}>
                {title}
              </CustomButton>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={`data-row-${index + 1}`}>
            {uniqueTitleHeaders.map(key => (
              <td key={`table-data-${key}-${index + 1}`}>
                {key in row ? row[key] : '-'}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </DynamicTableLayout>
  );
};

export default DynamicTable;
