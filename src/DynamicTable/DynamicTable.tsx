import React, { useMemo, useState } from 'react';
import { DynamicTableProps, SortStatusType, TableDataType } from './types';
import { DynamicTableLayout, CustomButton } from './DynamicTable.style';
import {
  AiOutlineSortAscending as SortAscendingIcon,
  AiOutlineSortDescending as SortDescendingIcon,
} from 'react-icons/ai';

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
      const valueA = a[columnKey] || '';
      const valueB = b[columnKey] || '';

      let result = 0;
      if (valueA > valueB) {
        result = 1;
      }
      if (valueA < valueB) {
        result = -1;
      }

      return result * newSortState;
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
                <div className='flex items-center justify-center'>
                  <span className='mr-2'>{title}</span>
                  <div className='border-solid border-2 rounded-md'>
                    {sortStatus[title] === 1 && <SortAscendingIcon size={20} />}
                    {sortStatus[title] === -1 && (
                      <SortDescendingIcon size={20} />
                    )}
                  </div>
                </div>
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
