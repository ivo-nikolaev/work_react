import React from "react";

import Company from "../Company/Company";

const CheckCompany = () => {
  const [company] = React.useState({
    name: "CARLSBERG A/S",
    score: "5",
    status_code: "ACTIVE",
    status: "Aktiv",
    risk_assessment: "Lav",
    risk_assessment_code: "LOW",
    company_secondary_names: [
      {
        name: "NIMB A/S",
        valid_to: "2022-02-17",
        valid_from: "0001-01-01",
      },
      {
        name: "TIVOLI ARTISTS A/S",
        valid_to: "2016-02-17",
        valid_from: "0001-01-01",
      },
      {
        name: "TIVOLI EATERTAINMENT A/S",
        valid_to: "2016-02-17",
        valid_from: "0001-01-01",
      },
      {
        name: "EATERTAINMENT A/S",
        valid_to: "2016-02-17",
        valid_from: "0001-01-01",
      },
      {
        name: "SUPUDAPUA COMPANY A/S",
        valid_to: null,
        valid_from: "0001-01-01",
      },
      {
        name: "EATAINMENT A/S",
        valid_to: null,
        valid_from: "0001-01-01",
      },
      {
        name: "TIVOLI INTERNATIONAL A/S",
        valid_to: null,
        valid_from: "0001-01-01",
      },
      {
        name: "AKTIESELSKABET KJØBENHAVNS SOMMER-TIVOLI",
        valid_to: "2016-02-17",
        valid_from: "0001-01-01",
      },
    ],
    phone: {
      phone_number: "+4533151001",
      hidden: false,
    },
  });

  return (
    <div>

      <Company
        companyName={company.name}
        score={company.score}
        status={company.status}
        statusCode={company.status_code}
        riskAssessment={company.risk_assessment}
        riskCode={company.risk_assessment_code}
        companySecondaryNames={company.company_secondary_names}
        phone={company.phone}
      />
    </div>
  );
};

export default CheckCompany;
