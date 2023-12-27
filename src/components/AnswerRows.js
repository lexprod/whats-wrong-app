import React from "react";
import { Row } from "reactstrap";
import AnswerBox from "./AnswerBox";

const AnswerRows = ({ answers, selectedIndex, correctIndex, revealedAnswerArray }) => {
    return (
        <>
            <Row>
                <AnswerBox
                    letterString='A'
                    answerString={answers[0].text}
                    isCorrect={(correctIndex === answers[0].id)}
                    selected={(selectedIndex === 0)}
                    revealed={(revealedAnswerArray[0])} />
                <AnswerBox letterString='B'
                    answerString={answers[1].text}
                    isCorrect={(correctIndex === answers[1].id)}
                    selected={(selectedIndex === 1)}
                    revealed={(revealedAnswerArray[1])} />
                <AnswerBox letterString='C'
                    answerString={answers[2].text}
                    isCorrect={(correctIndex === answers[2].id)}
                    selected={(selectedIndex === 2)}
                    revealed={(revealedAnswerArray[2])} />
            </Row>
            <Row>
                <AnswerBox letterString='D'
                    answerString={answers[3].text}
                    isCorrect={(correctIndex === answers[3].id)}
                    selected={(selectedIndex === 3)}
                    revealed={(revealedAnswerArray[3])} />
                <AnswerBox letterString='E'
                    answerString={answers[4].text}
                    isCorrect={(correctIndex === answers[4].id)}
                    selected={(selectedIndex === 4)}
                    revealed={(revealedAnswerArray[4])} />
                <AnswerBox letterString='F'
                    answerString={answers[5].text}
                    isCorrect={(correctIndex === answers[5].id)}
                    selected={(selectedIndex === 5)}
                    revealed={(revealedAnswerArray[5])}
                />
            </Row>
        </>
    );
}

export default AnswerRows;