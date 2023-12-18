import React from "react";
import { Container, Col, Row } from "reactstrap";
import AnswerBox from "./AnswerBox";

const AnswerRows = ({ answers }) => {
    return (
        <>
            <Row>
                <AnswerBox letterString={answers[0].letter} answerString={answers[0].text} />
                <AnswerBox letterString={answers[1].letter} answerString={answers[1].text} />
                <AnswerBox letterString={answers[2].letter} answerString={answers[2].text} />
            </Row>
            <Row>
                <AnswerBox letterString={answers[3].letter} answerString={answers[3].text} />
                <AnswerBox letterString={answers[4].letter} answerString={answers[4].text} />
                <AnswerBox letterString={answers[5].letter} answerString={answers[5].text} />
            </Row>
        </>
    );
}

export default AnswerRows;