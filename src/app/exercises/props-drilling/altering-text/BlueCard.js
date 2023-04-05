import React from "react";
import Card from "@mui/material/Card";
import OrangeCard from "./OrangeCard";

const BlueCard = ({ changeMessageText, messageText }) => {
  return (
    <Card style={{ padding: "5%", backgroundColor: "steelblue" }}>
      <OrangeCard
        onChangeHandler={changeMessageText}
        textToChange={messageText}
      />
    </Card>
  );
};

export default BlueCard;
