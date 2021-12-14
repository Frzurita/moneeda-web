import { Fragment } from "react";
import styled from "@emotion/styled";
import styles from "./Components-strategycontext.module.css";
import { exchangeInfo } from "../../helpers/exchangeInfo";
import BotOperations from "./BotOperations";

const StrategyContextBox = styled.div`
  /* background-color: #18d1d1; */
  height: 3rem;
  margin: 2rem;
  display: grid;
  grid-template-rows: repeat(3, 26rem);
  grid-template-columns: repeat(3, 32%);
  gap: 0.5rem;
  border-radius: 1.5rem;
`;

const OptionsTitle = styled.h1`
  padding: 1rem 0 0 2rem;
`;

const StrategyContextBoxChildChart = styled.div`
  background-color: #0866c3;
  border-radius: 2rem;
  grid-column: 1/3;
  grid-row: 1/3;
`;

const StrategyContextBoxChildInfo = styled.div`
  background-color: #0866c3;
  border-radius: 2rem;
  grid-column: 3/4;
  grid-row: 1/2;
`;

const StrategyContextBoxChildConditions = styled.div`
  background-color: #0866c3;
  border-radius: 2rem;
  grid-column: 1/3;
  grid-row: 3/4;
`;

const StrategyContextBoxChildOperations = styled.div`
  background-color: #0866c3;
  border-radius: 2rem;
  grid-column: 3/4;
  grid-row: 2/4;
`;

const StrategyContextBoxs = () => {
  const OperationsValues = {
    day: 15,
    week: -7,
    month: 10,
  };

  console.log(exchangeInfo);

  const getSymbols = exchangeInfo.symbols;
  console.log(getSymbols);

  let mark = "";
  getSymbols.forEach((sym) => {
    mark += '<option value="' + sym.symbol + '">' + sym.symbol + "</option>";
  });
  (document as any).getElementById("pairs").innerHTML = mark;

  LoadCharts();
  function LoadCharts() {
    let symbol = (document as any).getElementById("pairs").value;
    //RENDER CHART
    new (window as any).TradingView.widget({
      autosize: true,
      symbol: "BINANCE:" + symbol,
      interval: "5",
      timezone: "Asia/Kolkata",
      theme: "Light",
      style: "1",
      locale: "in",
      toolbar_bg: "#f1f3f6",
      enable_publishing: false,
      allow_symbol_change: true,
      studies: [
        "AwesomeOscillator@tv-basicstudies",
        "MACD@tv-basicstudies",
        "RSI@tv-basicstudies",
      ],
      container_id: "tvchart",
    });
  }

  const botTrades = [
    {
      day: "12-09-2021",
      time: "22:00",
      option: "buy",
      from: "usd",
      to: "btc",
      quantity: 300,
    },
    {
      day: "13-09-2021",
      time: "4:00",
      option: "sell",
      from: "btc",
      to: "usd",
      quantity: 50,
    },
    {
      day: "13-09-2021",
      time: "15:00",
      option: "sell",
      from: "btc",
      to: "usd",
      quantity: 50,
    },
  ];

  return (
    <Fragment>
      <StrategyContextBox>
        <StrategyContextBoxChildChart>
          <OptionsTitle>Trading view chart</OptionsTitle>
          <select onChange={LoadCharts} id="pairs"></select>
          <br></br>
          <div className={styles.box_operations_tradingview} id="tvchart"></div>
        </StrategyContextBoxChildChart>
        <StrategyContextBoxChildInfo>
          <OptionsTitle>
            Info
            <div className={styles.box_operations}>
              <p className={styles.box_operations_title}>Day</p>
              <span className={styles.box_operations_value}>
                {OperationsValues.day}%
              </span>
            </div>
            <div className={styles.box_operations}>
              <p className={styles.box_operations_title}>Week</p>
              <span className={styles.box_operations_value}>
                {OperationsValues.week}%
              </span>
            </div>
            <div className={styles.box_operations}>
              <p className={styles.box_operations_title}>Month</p>
              <span className={styles.box_operations_value}>
                {OperationsValues.month}%
              </span>
            </div>
          </OptionsTitle>
        </StrategyContextBoxChildInfo>
      </StrategyContextBox>
      <StrategyContextBox>
        <StrategyContextBoxChildConditions>
          <OptionsTitle>Conditions</OptionsTitle>
        </StrategyContextBoxChildConditions>
        <StrategyContextBoxChildOperations>
          <OptionsTitle>Operations</OptionsTitle>
          <div>
            {botTrades.map((el, index) => (
              <BotOperations
                key={index}
                day={el.day}
                time={el.time}
                option={el.option}
                from={el.from}
                to={el.to}
                quantity={el.quantity}
              />
            ))}
          </div>
        </StrategyContextBoxChildOperations>
      </StrategyContextBox>
    </Fragment>
  );
};

export default StrategyContextBoxs;
