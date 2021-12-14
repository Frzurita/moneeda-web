import React, { Fragment } from "react";
import styled from "@emotion/styled";
import ConditionsComponent from "./ConditionsComponent";

const Step = styled.div`
  background-color: #bed4d4;
  height: 30rem;
  margin: 1rem;
  border-radius: 2rem;
`;

const OptionsTitle = styled.h2`
  padding: 1rem 0 0 2rem;
`;

const StepsComponent = () => {
  return (
    <Fragment>
      <Step>
        <OptionsTitle>Step</OptionsTitle>
        <ConditionsComponent />
      </Step>
      <Step>
        <OptionsTitle>Step</OptionsTitle>
      </Step>
    </Fragment>
  );
};

export default StepsComponent;
