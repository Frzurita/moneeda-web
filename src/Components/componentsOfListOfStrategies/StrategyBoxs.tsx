import React, { Fragment } from "react";
import styled from "@emotion/styled";
import styles from "./Components-listofstrategy.module.css";

const StrategyBox = styled.div`
  /* background-color: #18d1d1; */
  height: 20rem;
  margin: 2rem;
  display: grid;
  /* grid-template-rows: repeat(3, 50%); */
  grid-auto-rows: 50%;
  gap: 2rem;
  border-radius: 1.5rem;
`;

const OptionsTitle = styled.h3`
  margin: 0.6rem 0 0 0.8rem;
`;

const Description = styled.p`
  margin: 1rem 0 0 1rem;
  font-size: 1.2rem;
`;

const Par = styled.p`
  margin: 1rem 0 0 1rem;
  font-size: 1.2re;
`;

const StrategyBoxs = ({ title, description, par }) => {
  return (
    <Fragment>
      <StrategyBox>
        <div className={styles.box_strategies}>
          <OptionsTitle>{title}</OptionsTitle>
          <div className={styles.box_strategies_alligment}>
            <Description>{description}</Description>
            <Par>{par}</Par>
            <div className={styles.switch_button}>
              <input
                className={styles.checkbox_hide}
                type="checkbox"
                name="switch"
                id="switch"
              />
              <label className={styles.checkbox_label} htmlFor="switch"></label>
            </div>
          </div>
        </div>
      </StrategyBox>
    </Fragment>
  );
};

export default StrategyBoxs;
