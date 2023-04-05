import React from "react";
import Card from "@mui/material/Card";
import BlueCard from "./BlueCard";

const GreenCard = ({ changeMessageText, messageText }) => {
  return (
    <Card style={{ padding: "5%", backgroundColor: "yellowgreen" }}>
      <BlueCard
        changeMessageText={changeMessageText}
        messageText={messageText}
      />
    </Card>
  );
};

export default GreenCard;
