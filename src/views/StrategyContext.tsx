import React, { Fragment } from "react";
import styled from "@emotion/styled";
import StrategyContextBoxs from "../Components/componentsOfStrategyContext/StrategyContextBoxs";

const Container = styled.div`
  width: 100%;
  height: 100rem;
  margin: 0 auto;
  background-color: #35a2d4;
  border-radius: 2rem;
`;

const OptionsTitle = styled.h1`
  padding: 1rem 0 0 2rem;
`;

const StrategyContext = () => {
  return (
    <Fragment>
      <Container>
        <OptionsTitle>Strategies Context</OptionsTitle>
        <StrategyContextBoxs />
      </Container>
    </Fragment>
  );
};

export default StrategyContext;
