import styled from "styled-components";

export const DataContainer = styled.ul`
  width: 20.6875rem;
  padding-top: 0.5rem;
`;

export const DataListWrap = styled.li`
  display: flex;
  padding: 0.5rem 0rem;
`;

export const DataListImageWrap = styled.div`
  flex: 1;
  min-width: 3rem;
`;

export const DataListImage = styled.div`
  img {
    width: 2.75rem;
    height: auto;
  }
`;

export const DataListContent = styled.div`
  flex: 5;
`;

export const DataContentTitle = styled.div`
  h3 {
    font-size: 0.875rem;
    color: var(--color-font-100);
    text-transform: capitalize;
    padding-bottom: 0.2rem;
    display: inline-block;
    text-decoration: underline;
    text-decoration-style: dashed;
    text-decoration-color: rgba(255, 255, 255, 0.2);
    text-decoration-thickness: 1px;
    text-underline-offset: 4px;
  }
`;

export const DataContentInfo = styled.div`
  display: flex;
  padding-top: 0.6rem;
`;

export const DataContentInfoItem = styled.div`
  h4,
  span {
    font-size: 1.4375rem;
  }

  span {
    color: var(--color-font-200);
    padding-left: 0.1875rem;
  }
`;

export const DataContentLine = styled.div`
  display: flex;
  align-items: center;
  padding: 0rem 1rem;

  hr {
    width: 1.625rem;
    height: 0.0625rem;
    border: none;
    background-color: var(--color-font-200);
  }
`;
