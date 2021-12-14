import React, { Fragment } from "react";
import styled from "@emotion/styled";

const BotOperationsBox = styled.div`
  height: 3rem;
  margin: 2rem;
  display: flex;
  justify-content: space-around;
  border-radius: 1.5rem;
  background-color: #16d1d6;
`;

type BotOperationProps = {
  day: string
  time: string
  option: string
  from: string
  to: string
  quantity: number
}

const BotOperations = ({ day, time, option, from, to, quantity }: BotOperationProps) => {
  return (
    <Fragment>
      <BotOperationsBox>
        <p>{day} </p>
        <p>{time} </p>
        <p>{option} </p>
        <p>{from} </p>
        <p>{to} </p>
        <p>{quantity} </p>
      </BotOperationsBox>
    </Fragment>
  );
};

export default BotOperations;
