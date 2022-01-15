import styled, { css } from "styled-components";

export const DataBoxWrap = styled.div`
  height: 100%;
  background-color: var(--color-bg-200);
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  cursor: pointer;
  position: relative;
  z-index: 10;

  ${({ toggleDataBox, hiddenBox }) =>
    toggleDataBox &&
    hiddenBox &&
    css`
      box-shadow: 0 0.75rem 1.25rem 0 rgba(0, 0, 0, 0.3);
      border: solid 0.0625rem rgba(255, 255, 255, 0.1);
      background-color: var(--color-bg-400);
    `}
`;

export const DataBoxShow = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({ toggleDataBox, hiddenBox }) =>
    toggleDataBox &&
    hiddenBox &&
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
    display: inline-block;
    text-transform: capitalize;
    text-decoration: underline;
    text-decoration-style: dashed;
    text-decoration-color: rgba(255, 255, 255, 0.2);
    text-decoration-thickness: 1px;
    text-underline-offset: 4px;
    white-space: nowrap;
  }
`;

export const DataBoxContentWrap = styled.div`
  display: flex;
`;

export const DataBoxContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  h4,
  span {
    font-size: 1.4375rem;
    font-weight: var(--font-weight-900);
    line-height: 1.5rem;
    color: var(--color-font-100);
    white-space: nowrap;
  }

  span {
    color: var(--color-font-200);
    padding-left: 0.1875rem;
  }

  ${({ index }) =>
    index === 1 &&
    css`
      margin-left: 19px;
      padding-left: 15px;
      border-left: 1px dashed rgba(255, 255, 255, 0.2);
    `}
`;

export const DataBoxSubHeading = styled.div`
  p {
    font-size: 13px;
    color: var(--color-font-100);
    opacity: 0.5;
    font-weight: 500;
    text-transform: capitalize;
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
