import React from "react";
import { Col } from 'reactstrap';

const AnswerBox = (props) => {
    if (props.selected) {
        return (
            // highlighted selection version
            <>
                <Col className="my-3 mx-1 rounded-4 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#fff', color: '#333', height: '20vh', textAlign: 'center' }}>
                    <h3>{props.letterString}</h3>
                </Col>
                <Col className="my-3 mx-3 rounded-4 col-3 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#222', color: '#fff', height: '20vh', textAlign: 'center' }}>
                    <h3 className="mx-3">{props.answerString}</h3>
                </Col>
            </>
        );
    }
    return (
        // not highlighted selection version
        <>
            <Col className="my-3 mx-1 rounded-4 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#555', color: '#fff', height: '20vh', textAlign: 'center' }}>
                <h3>{props.letterString}</h3>
            </Col>
            <Col className="my-3 mx-3 rounded-4 col-3 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#51D6FF', height: '20vh', textAlign: 'center' }}>
                <h3 className="mx-3">{props.answerString}</h3>
            </Col>
        </>

    );
}

export default AnswerBox;
