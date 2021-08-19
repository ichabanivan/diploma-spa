
// outsource dependencies
import moment from 'moment';
import React, { memo, useCallback, useEffect } from 'react';
import { CardText, CardTitle, Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap';

// local dependencies
import controller from './controller';
import CardNews from 'components/card-news';
import AlertError from 'components/alert-error';
import { useController } from 'services/controller';
import { BoxLoader, Spinner } from 'components/preloader';

// configure

export default memo(() => {
  const [
    { initialized, disabled, errorMessage, list, aside },
    { initialize, clearCtrl, updateCtrl },
    isControllerConnected,
  ] = useController(controller);

  useEffect(() => initialize() && clearCtrl, [clearCtrl, initialize]);

  const clearError = useCallback(() => updateCtrl({ errorMessage: null }), [updateCtrl]);

  return <BoxLoader active={disabled || !initialized || !isControllerConnected}>
    <AlertError active error={errorMessage} onClear={clearError} />
    <Container>
      <Row className="mb-3 py-3">
        <Col xs="8" tag="h1" className="mb-0 text-capitalize">
          Images Original
          { disabled ? <Spinner active /> : null }
        </Col>
        <Col xs="4" tag="p" className="mb-0 d-flex align-items-center justify-content-end">
          { moment().format('LLL') }
        </Col>
      </Row>
      <Row>
        <Col lg="8" md="6" xs="12" tag="main">
          <Row>
            { list?.map((item, index) => <Col key={index} xs="12" md="6" lg="4" className="mb-3">
              <CardNews {...item} />
            </Col>) }
          </Row>
        </Col>
        <Col tag="aside">
          <ListGroup>
            { aside?.map(({ title, description }, index) => <ListGroupItem key={index}>
              <CardTitle tag="h5" className="mb-2 mt-0">{ title }</CardTitle>
              <CardText>{ description }</CardText>
            </ListGroupItem>) }
          </ListGroup>
        </Col>
      </Row>
    </Container>
  </BoxLoader>;
});
