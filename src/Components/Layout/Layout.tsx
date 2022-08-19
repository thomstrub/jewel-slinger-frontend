import React, { Children } from 'react';
import {Row, Container} from 'react-bootstrap';

export default function Layout(props: React.PropsWithChildren) {
  return (
    <Container>
        <Row>
            {props.children}
        </Row>
    </Container>
  )
}
