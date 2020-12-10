//Te be refactored
import Grid from "@material-ui/core/Grid";
import { grey } from "@material-ui/core/colors";

const SecondaryNameListShort = (props) => {
  const fullList = props.companies.map((company) => {
    return (
      <p style={{ fontSize: "0.8rem", color: grey[500] }} key={company.name}>
        {company.name}
      </p>
    );
  });
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      {fullList}
    </Grid>
  );
};

export default SecondaryNameListShort;
