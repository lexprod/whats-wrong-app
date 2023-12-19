import React from "react";
import { Row } from "reactstrap";
import AnswerBox from "./AnswerBox";

const AnswerRows = ({ answers, selectedIndex }) => {
    return (
        <>
            <Row>
                <AnswerBox letterString='A'
                    answerString={answers[0].text}
                    selected={(selectedIndex === 0)} />
                <AnswerBox letterString='B'
                    answerString={answers[1].text}
                    selected={(selectedIndex === 1)} />
                <AnswerBox letterString='C'
                    answerString={answers[2].text}
                    selected={(selectedIndex === 2)} />
            </Row>
            <Row>
                <AnswerBox letterString='D'
                    answerString={answers[3].text}
                    selected={(selectedIndex === 3)} />
                <AnswerBox letterString='E'
                    answerString={answers[4].text}
                    selected={(selectedIndex === 4)} />
                <AnswerBox letterString='F'
                    answerString={answers[5].text}
                    selected={(selectedIndex === 5)} />
            </Row>
        </>
    );
}

export default AnswerRows;