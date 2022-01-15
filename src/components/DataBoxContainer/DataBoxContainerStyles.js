import styled from "styled-components";
import { QUERIES } from "styles/mediaQueries";

export const DataContainer = styled.section`
  max-width: 100%;
  display: flex;
  align-items: center;
  /* padding: 1rem 0rem 1.5rem 1.5rem; */
  position: relative;
  overflow-x: hidden;

  /* z-index: 100; */

  /* @media ${QUERIES.mobile} {
    padding: 1rem 1.5rem 1.5rem 1.5rem;
  } */
`;

export const DataDiv = styled.div`
  overflow-x: hidden;
  position: sticky;
`;

export const DataWrap = styled.div`
  max-width: 100%;
  /* height: 87px; */
  display: flex;
  align-items: flex-start;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  background-color: red;
  position: relative;

  & > * {
    margin-right: 0.75rem;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;
