import styled from "styled-components";

export const DataTableBody = styled.tr`
  font-size: 0.875rem;
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.04);

  td:nth-child(1) {
    padding-left: 0.625rem;
  }

  td:nth-child(4) {
    text-align: right;
    padding-right: 0.625rem;
  }

  tr:first-child,
  td:first-child {
    border-radius: 0.53125rem 0 0 0.53125rem;
  }

  tr:last-child,
  td:last-child {
    border-radius: 0 0.53125rem 0.53125rem 0;
  }
`;
export const DataTableBodyItem = styled.td`
  padding: 0.5rem 0rem;
  vertical-align: top;
  background-color: rgba(216, 216, 216, 0.06);

  i {
    font-size: 1.25rem;
  }

  span {
    color: var(--color-font-200);
    font-weight: var(--font-weight-500);
    padding: 0rem 0.1rem;
  }
`;

export const PriceChange = styled.p`
  color: hsl(339, 100%, 43%);
`;
