import React from "react";
import RouterLink from "../util/RouterLink";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import routes from "./routes";

const RouterButton = (props) => {
  const { path, text } = props;
  return (
    <Button
      component={RouterLink}
      to={path}
      variant={"outlined"}
      color={"primary"}
      style={{ width: "100%" }}
    >
      {text}
    </Button>
  );
};

const ContentsList = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={6}>
        <RouterButton
          path={routes.drilling.bc}
          text={"Counting With State (props)"}
        />
      </Grid>
      <Grid item xs={6}>
        <RouterButton
          path={"/counting-redux"}
          text={"Counting With State (redux)"}
        />
      </Grid>
      {/* <Grid item xs={6}>
        <RouterButton
          path={"/state-func-props"}
          text={"State and Funcs as Props"}
        />
      </Grid>
      <Grid item xs={6}>
        <RouterButton
          path={"/state-func-props-solution"}
          text={"State and Funcs as Props (Solution)"}
        />
      </Grid>
      <Grid item xs={6}>
        <RouterButton path={"/intro-to-redux"} text={"Intro to Redux"} />
      </Grid>
      <Grid item xs={6}>
        <RouterButton
          path={"/intro-to-redux-solution"}
          text={"Intro to Redux (Solution)"}
        />
      </Grid> */}
    </Grid>
  );
};

export default ContentsList;
