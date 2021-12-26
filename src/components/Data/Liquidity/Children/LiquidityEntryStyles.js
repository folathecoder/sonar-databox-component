import styled from "styled-components";


export const DataTableBody = styled.tr`
  font-size: 0.875rem;
  background-color: rgba(216, 216, 216, 0.06);

  td:nth-child(1) {
    padding-left: 0.625rem;
  }

  td:nth-child(3) {
    text-align: center;
  }

  td:nth-child(4) {
    text-align: right;
    padding-right: 0.625rem;
  }
`;
export const DataTableBodyItem = styled.td`
  padding: 0.5rem 0rem;
  display: flex:
  align-items: flex-start;
  margin-top: 0.5rem;
  vertical-align: top;

  i {
    font-size: 1.25rem;
  }

  span {
    color: var(--color-font-200);
    font-weight: var(--font-weight-500);
  }
`;

export const PriceChange = styled.p`
  color: red;
`;
