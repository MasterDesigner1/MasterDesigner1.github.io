import { cases } from "@/data/caseSection";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleCaseOne from "./SingleCaseOne";

const CasesPage = () => {
  return (
    <div className="cases-page">
      <Container>
        <Row>
          {cases.map((singleCase) => (
            <Col
              key={singleCase.id}
              xl={4}
              lg={4}
              md={6}
              className="animated fadeInUp"
            >
              <SingleCaseOne singleCase={singleCase} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CasesPage;
