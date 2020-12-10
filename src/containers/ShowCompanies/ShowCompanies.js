import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";

import companyBasics from "../../apiCalls/companyBasics";
import Company from "../../components/Company/Company";
const ShowCompanies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await companyBasics(1);
      setCompanies((companies) => [...companies, res.data]);

      const res2 = await companyBasics(2);
      setCompanies((companies) => [...companies, res2.data]);

      const res3 = await companyBasics(3);
      setCompanies((companies) => [...companies, res3.data]);
    };
    fetchData();
  }, []);

  return (
    <Grid
      container
      direction="row"
      justify="space-evenly"
      alignItems="flex-start"
    >
      {console.log(companies)}
      {companies
        ? companies.map((company) => {
            return (
              <Company
                companyName={company.company_name}
                score={company.score}
                status={company.status}
                statusCode={company.status_code}
                riskAssessment={company.risk_assessment}
                riskCode={company.risk_assessment_code}
                companySecondaryNames={company.company_secondary_names}
                phone={company.phone}
              />
            );
          })
        : "not ready"}
    </Grid>
  );
};

export default ShowCompanies;
