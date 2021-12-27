import styled from "styled-components";

export const DataContainer = styled.div`
  width: 22rem;
`;

export const DataHeader = styled.div`
  padding: 1rem 0rem;

  h4 {
    font-size: 0.9375rem;
    font-weight: var(--font-weight-600);
  }
`;

export const DataTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  font-weight: var(--font-weight-500);
  font-size: 0.875rem;
`;

export const DataTableHeader = styled.tr`
  margin-bottom: 0.1875rem;

  th {
    font-size: 0.625rem;
    text-transform: uppercase;
    color: var(--color-font-300);
  }

  th:nth-child(1) {
    padding-left: 0.625rem;
  }

  th:nth-child(2), th:nth-child(3) {
    text-align: left;
  }
`;
export const DataTableHeaderItem = styled.th``;
