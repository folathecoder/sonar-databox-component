import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const DataBoxBtn = styled(animated.button)`
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
`;

const DataBoxButton = ({ event, toggleDataBox }) => {
  //TODO: Animation => Using react-spring library to change the properties of the buttton on toggleDataBox change
  const spin = useSpring({
  transform: toggleDataBox ? "rotateZ(45deg)" : "rotateZ(0deg)",
    width: toggleDataBox ? "1.75rem" : "0.875rem",
    height: toggleDataBox ? "1.75rem" : "0.875rem",
    margin: toggleDataBox ? "0.3rem" : "0rem",
    fontSize: toggleDataBox ? "0.75rem" : "0.5rem",
    duration: 1000,
    config: { duration: 0, easing: (t) => t },
  });

  return (
    <DataBoxBtn onClick={event} style={spin}>
      <i className="fas fa-plus"></i>
    </DataBoxBtn>
  );
};

export default DataBoxButton;
