import styled, { css } from "styled-components";

export const DataBoxWrap = styled.div`
  background-color: var(--color-bg-200);
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  position: relative;
  cursor: pointer;

  ${({ toggleDataBox }) =>
    toggleDataBox &&
    css`
      box-shadow: 0 0.75rem 1.25rem 0 rgba(0, 0, 0, 0.3);
      border: solid 0.0625rem rgba(255, 255, 255, 0.1);
      background-color: var(--color-bg-400);
    `}
`;

export const DataBoxShow = styled.div`
  ${({ toggleDataBox }) =>
    toggleDataBox &&
    css`
      border-bottom: 0.1rem solid var(--color-bg-500);
      padding-bottom: 0.5rem;
    `}
`;

export const DataBoxTitle = styled.div`
  h3 {
    font-size: 0.9375rem;
    line-height: 0.9375rem;
    color: var(--color-font-200);
    font-weight: var(--font-weight-500);
    border-bottom: var(--border-dotted);
    padding-bottom: 0.2rem;
    display: inline-block;
    text-transform: capitalize;
  }
`;

export const DataBoxContent = styled.div`
  display: flex;
  padding-top: 0.5rem;

  h4, span {
    font-size: 1.4375rem;
    font-weight: var(--font-weight-900);
    line-height: 1.5rem;
    color: var(--color-font-100);
  }

  span {
    color: var(--color-font-200);
    padding-left: 0.1875rem;
  }
`;

export const DataBoxHidden = styled.div`
  display: none;
  transition: 100s;

  ${({ toggleDataBox }) =>
    toggleDataBox &&
    css`
      display: flex;
      transition: 100s;
    `}
`;

export const DataBoxButton = styled.button`
  background-color: var(--color-bg-300);
  width: 0.875rem;
  height: 0.875rem;
  border-radius: 100%;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: var(--transition);
  font-size: 0.5rem;
  color: var(--font-color-100);
  position: absolute;
  top: 0;
  right: 0;

  ${({ toggleDataBox }) =>
    toggleDataBox &&
    css`
      transition: var(--transition);
      transform: rotateZ(405deg);
      width: 1.75rem;
      height: 1.75rem;
      font-size: 0.75rem;
      margin: 0.3rem;
    `}
`;