import React from "react";
import { Container, Col } from 'reactstrap';

const AnswerBox = () => {
    return (
        <Col className="my-3 mx-3" style={{ backgroundColor: '#51D6FF', height: '100px' }}>
            <Container className="mx-3">
                <h3>
                    B: Asking viewers to not vote for them
                </h3>
            </Container>
        </Col>
    );
}

export default AnswerBox;