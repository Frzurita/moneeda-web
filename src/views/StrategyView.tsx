import React, { Fragment } from "react";
import styled from "@emotion/styled";
import StepsComponent from "../Components/componentsOfStrategyView/StepsComponent";

const Container = styled.div`
  width: 100%;
  height: 70rem;
  margin: 0 auto;
  background-color: #35a2d4;
  border-radius: 2rem;
`;

const OptionsTitle = styled.h1`
  padding: 1rem 0 0 2rem;
`;

const StrategyView = () => {
  return (
    <Fragment>
      <Container>
        <OptionsTitle>Strategy</OptionsTitle>
        <StepsComponent />
      </Container>
    </Fragment>
  );
};

export default StrategyView;
