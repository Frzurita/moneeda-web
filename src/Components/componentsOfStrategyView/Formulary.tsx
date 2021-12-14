import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";

const Field = styled.div`
  display: flex;
  margin: 1rem 0 1rem 0;
  align-items: center;
  height: 1rem;
  padding: 0.8rem 0 0.8rem 0;
`;

const Label = styled.label`
  flex: 0 0 10rem;
  padding: 0.3rem;
  /* font-family: ; */
  font-weight: bold;
`;

const Select = styled.select`
  display: block;
  width: 40%;
  padding: 0.2rem;
  border: 0.3rem solid white;
  border-radius: 1rem;
  -webkit-appearance: none;
  background-color: #04efef;
  font-weight: bold;

  &:hover {
    background-color: white;
    cursor: pointer;
  }
`;

const Button = styled.button`
  font-size: 1.2rem;
  padding: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 2rem;
  margin-top: 2rem;

  &:hover {
    background-color: #04efef;
    cursor: pointer;
  }
`;

const Formulary = () => {
  const [data, saveData] = useState({
    ema: "",
    rsi: "",
    pattern: "",
  });

  const { ema, rsi, pattern } = data;

  const strategies: any = [];

  const requestValue = (e) => {
    saveData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const sendConditions = (e) => {
    e.preventDefault();

    strategies.push({
      ema,
      rsi,
      pattern,
    });
    console.log(strategies);
  };

  return (
    <Fragment>
      <form onSubmit={sendConditions}>
        <Field>
          <Label>EMA</Label>
          <Select name="ema" value={ema} onChange={requestValue}>
            <option value="">-- Select --</option>
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="16">16</option>
          </Select>
        </Field>
        <Field>
          <Label>RSI</Label>
          <Select name="rsi" value={rsi} onChange={requestValue}>
            <option value="">-- Select --</option>
            <option value="7">7</option>
            <option value="14">14</option>
          </Select>
        </Field>
        <Field>
          <Label>Pattern</Label>
          <Select name="pattern" value={pattern} onChange={requestValue}>
            <option value="">-- Select --</option>
            <option value="Bollinger">Bollinger</option>
            <option value="Kellner">Kellner</option>
          </Select>
        </Field>
        <Button type="submit">Send</Button>
      </form>
    </Fragment>
  );
};

export default Formulary;
