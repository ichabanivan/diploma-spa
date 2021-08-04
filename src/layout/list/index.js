
// outsource dependencies
import moment from 'moment';
import React, { memo } from 'react';
import { Container, Row, Col } from 'reactstrap';

// local dependencies

// configure

export default memo(() => <Container>
  <Row className="mb-3 py-3">
    <Col xs="8" tag="h1" className="mb-0">
      Welcome to NEWS.com
    </Col>
    <Col xs="4" tag="p" className="mb-0 d-flex align-items-center justify-content-end">
      { moment().format('LLL') }
    </Col>
  </Row>
  <Row>
    <Col className="p-5">
      <h2 className="text-center">Search worldwide news with code</h2>
      <p className="text-center">Locate articles and breaking news headlines from news sources and blogs across the web with our JSON API</p>
    </Col>
  </Row>
</Container>);
