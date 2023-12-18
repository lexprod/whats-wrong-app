import React from "react";
import { Container, Col } from 'reactstrap';

const QuestionBox = ({ question }) => {
    return (
        <Col className="d-flex align-items-center justify-content-center rounded-5" style={{
            height: '40vh', backgroundColor: '#A06B9A', color: 'black', textAlign: 'center'
        }}>
            <h2>
                {question.qtext}
            </h2>
        </Col>
    );
}

export default QuestionBox;