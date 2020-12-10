//Use this element if there are 4 or more secondary names

import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { grey } from "@material-ui/core/colors";

const List = (props) => {
  const [showFull, setShowFull] = useState(false);

  const fullList = props.companies.map((company) => {
    return (
      <p style={{ fontSize: "0.5rem", color: grey[500]}} key={company.name}>
        {company.name}
      </p>
    );
  });

  const shortList = props.companies.slice(0, 3).map((company) => {
    return (
      <p style={{ fontSize: "0.5rem", color: grey[500] }} key={company.name}>
        {company.name}
      </p>
    );
  });

  const buttonText = showFull
    ? "Show less"
    : `Show all(${props.companies.length})`;

  const onClickHandler = () => {
    setShowFull(!showFull);
  };

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      {showFull ? fullList : shortList}
      <Button style={{textTransform: 'none', fontSize: '0.8rem'}} onClick={() => onClickHandler()} size="small">
        {buttonText}
      </Button>
    </Grid>
  );
};

export default List;
