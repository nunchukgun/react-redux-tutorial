import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import GreenCard from "./GreenCard";
import PurpleCard from "./PurpleCard";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

const AlteringText = () => {
  return (
    <div style={{ margin: "5%" }}>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Card>
            <CardHeader
              title={<Typography>Displayed Message Text: </Typography>}
            />
            <CardContent>
              <PurpleCard />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <GreenCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default AlteringText;
