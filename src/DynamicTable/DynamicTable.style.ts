import styled from 'styled-components';

export const DynamicTableLayout = styled.table`
  width: 100%;
  border-collapse: collapse;
  & thead tr th:first-child {
    border-radius: 20px 0 0 20px;
  }
  & thead tr th:last-child {
    border-radius: 0 20px 20px 0;
  }

  & thead tr th,
  & tbody tr td {
    text-align: center;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-right: 24px;
    padding-left: 24px;
  }

  & tbody tr td:first-child,
  & thead tr th:first-child {
    text-align: left;
  }

  & thead tr th:last-child,
  & tbody tr td:last-child {
    text-align: right;
  }

  & thead tr th {
    background-color: gray;
  }

  & tbody tr td {
    border-bottom: 1px solid gray;
  }
  & > tbody > tr > td {
    display: table-cell;
    vertical-align: middle;
  }
`;

export const CustomButton = styled.button`
  border-radius: 5px;
  border: none;
  background-color: transparent;
  color: white;
  font-size: 18px;
`;
