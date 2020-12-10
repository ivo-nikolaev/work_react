import React from "react";
import moment from "moment";
import Grid from "@material-ui/core/Grid";

import SecondaryNamesListLong from "./SecondaryNamesListLong/SecondaryNamesListLong";
import SecondaryNamesListShort from "./ScondaryNameListShort/SecondaryNameListShort";


const secondaryCompanyNames = (props) => {

  if(!props.companies) return ('N/A');
  const companiesToRender = props.companies.filter((company) => {
    if (!company.valid_to) {
      return true;
    }
    return moment().isBefore(company.valid_to);
  });

  const companies = companiesToRender.map((company) => {
    return { name: company.name };
  });

  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      alignItems="flex-start"
    >
    <Grid item xs={12} sm={6}>
        <p> Secondary names: </p>
    </Grid> 
    <Grid item xs={12} sm={6}>
      {companies.length > 3 ? (
        <SecondaryNamesListLong companies={companies} />
      ) : (
        <SecondaryNamesListShort companies={companies} />
      )}
      </Grid>
    </Grid>
  );
};

export default secondaryCompanyNames;
