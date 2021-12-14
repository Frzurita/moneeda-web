import React, { Fragment, ReactFragment } from "react";
import styled from "@emotion/styled";
import StrategyBoxs from "../Components/componentsOfListOfStrategies/StrategyBoxs";
import { REACT_APP_API_KEY } from "../helpers/database";

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

const ListOfStrategies = () => {
  console.log(REACT_APP_API_KEY);

  // const [Strategies, changeStrategies] = useState([]);

  const Strategies = [
    {
      title: "Rambo",
      description: "This strategy allows the user...",
      par: "BTC-USD",
    },
    {
      title: "Pandora",
      description: "This strategy allows the user...",
      par: "ETH-USD",
    },
    {
      title: "Iceberg",
      description: "This strategy allows the user...",
      par: "ADA-USD",
    },
  ];

  return (
    <Fragment>
      <Container>
        <OptionsTitle>Strategies</OptionsTitle>
        <div>
          {Strategies.map((el, index) => (
            <StrategyBoxs
              key={index}
              title={el.title}
              description={el.description}
              par={el.par}
            />
          ))}
        </div>
      </Container>
    </Fragment>
  );
};

export default ListOfStrategies;
