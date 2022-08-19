import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';

export default function Layout(props: React.PropsWithChildren) {
  return (
    <Container className="justify-content-md-center">
        <Col xs lg="2"></Col>
        <Col md="auto">
            <Row>
                {props.children}
            </Row>
        </Col>
        <Col xs lg="2"></Col>
    </Container>
  )
}