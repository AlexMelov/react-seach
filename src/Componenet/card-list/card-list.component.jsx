import React from "react";
import "./card-list.style.css";
import { Card } from "../Card/card.component";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((item) => (
        <Card key={item.id} monster={item} />
      ))}
    </div>
  );
};
