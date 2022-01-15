import styled from "styled-components";

export const DataBoxTabContainer = styled.section`
  /* background-color: red; */
  margin: 0px 21.5px 0px 23.5px;
`;

export const DataTabContainer = styled.div`
  display: flex;
  margin-left: 40px;
`;

export const DataTabItem = styled.div`
  font-size: 17px;
  font-weight: 600;
  padding: 24px 0px 16px 0px;
  color: var(--color-font-100);
  opacity: ${({ toggleTab, index }) => (toggleTab === index ? 1 : 0.3)};
  cursor: pointer;
  margin-right: 48px;
  text-transform: capitalize;
  transition: 0.5s linear;
`;

export const DataPanelContainer = styled.div`
  background-color: green;
`;

export const DataPanelItem = styled.div`
  background-color: orange;
  display: ${({ toggleTab, index }) => (toggleTab === index ? "flex" : "none")};
`;
