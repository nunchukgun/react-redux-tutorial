import React from "react";
import Card from "@mui/material/Card";
import BlueCard from "./BlueCard";

const GreenCard = () => {
  return (
    <Card style={{ padding: "5%", backgroundColor: "yellowgreen" }}>
      <BlueCard />
    </Card>
  );
};

export default GreenCard;
