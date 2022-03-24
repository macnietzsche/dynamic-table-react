import styled from 'styled-components';

export const DynamicTableLayout = styled.table`
  width: 100%;
  border-collapse: collapse;
  & thead tr th:first-child {
    border-radius: 32px 0 0px 32px;
  }
  & thead tr th:last-child {
    border-radius: 0px 32px 32px 0px;
  }

  & thead tr th,
  & tbody tr td {
    text-align: center;
    padding-top: 12px;
    padding-bottom: 12px;
  }

  & tbody tr td:first-child,
  & thead tr th:first-child {
    padding-left: 24px;
    text-align: left;
  }

  & thead tr th:last-child,
  & tbody tr td:last-child {
    padding-right: 24px;
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

export const MobileReportHeader = styled.div`
  width: 100%;
  border-radius: 32px;
  padding: 12px 24px 12px 24px;
  background-color: gray;
`;

export const MobileReportBody = styled.div`
  border-bottom: solid 1px gray;
`;
