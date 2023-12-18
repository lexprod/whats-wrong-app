import React from "react";
import { Container, Col, Row } from 'reactstrap';

const AnswerBox = (props) => {
    return (
        <>
            <Col className="my-3 mx-1 rounded-4 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#555', color: '#fff', height: '20vh', textAlign: 'center' }}>
                <h3>{props.letterString}</h3>
            </Col>
            <Col className="my-3 mx-3 rounded-4 col-3 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#51D6FF', height: '20vh' }}>
                <h3 className="mx-3">{props.answerString}</h3>
            </Col>
        </>

    );
}

export default AnswerBox;