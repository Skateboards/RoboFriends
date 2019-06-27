import React from "react";
import Card from "./robot-card";

const CardList = ({ robots }) => {
  const mapRobots = robot => {
    return (
      <Card
        key={robot.id}
        name={robot.name}
        email={robot.email}
        id={robot.id}
      />
    );
  };

  return <React.Fragment>{robots.map(mapRobots)}</React.Fragment>;
};

export default CardList;
