import React, { Fragment } from "react";
import styled from "@emotion/styled";
import styles from "./Components-satretegyview.module.css";
import Formulary from "./Formulary";

const Conditions = styled.div`
  /* background-color: #18d1d1; */
  height: 20rem;
  margin: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  gap: 2rem;
  border-radius: 1.5rem;
`;

const OptionsTitle = styled.h3`
  margin: 0.6rem 0 0 0.8rem;
`;

const ConditionsComponent = () => {
  return (
    <Fragment>
      <Conditions>
        <div className={styles.box_conditions}>
          <OptionsTitle>
            Conditions
            <Formulary />
          </OptionsTitle>
        </div>
        <div className={styles.box_conditions}>
          <OptionsTitle>Actions</OptionsTitle>
        </div>
      </Conditions>
    </Fragment>
  );
};

export default ConditionsComponent;
