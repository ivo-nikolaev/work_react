import React from "react";
import Card from "@material-ui/core/Card";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Score from "./Score/Score";
import SecondaryCompanyNames from "./SecondaryNames/SecondaryCompanyNames";
import PhoneNumber from "./PhoneNumber/PhoneNumber";

const useStyles = makeStyles((theme) => ({
   root: {
     maxWidth: 345,
   },

 }));

const Company = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
    <Grid container
    direction="column"
    justify="space-around"
    alignItems="center">
      <h2>{props.companyName}</h2>
      <Score score={props.score} status={props.status} statusCode={props.statusCode} riskAssessment ={props.riskAssessment} riskCode={props.riskCode}/>

      <SecondaryCompanyNames companies={props.companySecondaryNames} />
      <p> Phone: <PhoneNumber
        phone={props.phone}
      /></p>
      </Grid>
    </Card>
  );
};

export default Company;
