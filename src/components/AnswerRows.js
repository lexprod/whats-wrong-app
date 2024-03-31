import React from "react";
import { Row } from "reactstrap";
import AnswerBox from "./AnswerBox";

//letter string needs to be passed from quedstions objecrt
const AnswerRows = ({
  answers,
  selectedIndex,
  correctIndex,
  revealedAnswerArray,
  answersNum,
}) => {
  if (answersNum == 6) {
    return (
      <>
        <Row>
          <AnswerBox
            letterString={answers[0].letter}
            answerString={answers[0].text}
            isCorrect={correctIndex === answers[0].id}
            selected={selectedIndex === 0}
            revealed={revealedAnswerArray[0]}
          />
          <AnswerBox
            letterString={answers[1].letter}
            answerString={answers[1].text}
            isCorrect={correctIndex === answers[1].id}
            selected={selectedIndex === 1}
            revealed={revealedAnswerArray[1]}
          />
          <AnswerBox
            letterString={answers[2].letter}
            answerString={answers[2].text}
            isCorrect={correctIndex === answers[2].id}
            selected={selectedIndex === 2}
            revealed={revealedAnswerArray[2]}
          />
        </Row>
        <Row>
          <AnswerBox
            letterString={answers[3].letter}
            answerString={answers[3].text}
            isCorrect={correctIndex === answers[3].id}
            selected={selectedIndex === 3}
            revealed={revealedAnswerArray[3]}
          />
          <AnswerBox
            letterString={answers[4].letter}
            answerString={answers[4].text}
            isCorrect={correctIndex === answers[4].id}
            selected={selectedIndex === 4}
            revealed={revealedAnswerArray[4]}
          />
          <AnswerBox
            letterString={answers[5].letter}
            answerString={answers[5].text}
            isCorrect={correctIndex === answers[5].id}
            selected={selectedIndex === 5}
            revealed={revealedAnswerArray[5]}
          />
        </Row>
      </>
    );
  }

  if (answersNum == 4) {
    return (
      <>
        <Row className="flex justify-content-between">
          <AnswerBox
            letterString={answers[0].letter}
            answerString={answers[0].text}
            isCorrect={correctIndex === answers[0].id}
            selected={selectedIndex === 0}
            revealed={revealedAnswerArray[0]}
            answersNum={4}
          />
          <AnswerBox
            letterString={answers[1].letter}
            answerString={answers[1].text}
            isCorrect={correctIndex === answers[1].id}
            selected={selectedIndex === 1}
            revealed={revealedAnswerArray[1]}
          />
        </Row>
        <Row>
          <AnswerBox
            letterString={answers[2].letter}
            answerString={answers[2].text}
            isCorrect={correctIndex === answers[2].id}
            selected={selectedIndex === 2}
            revealed={revealedAnswerArray[2]}
          />
          <AnswerBox
            letterString={answers[3].letter}
            answerString={answers[3].text}
            isCorrect={correctIndex === answers[3].id}
            selected={selectedIndex === 3}
            revealed={revealedAnswerArray[3]}
          />
        </Row>
      </>
    );
  }

  if (answersNum == 3) {
    return (
      <>
        {/* filler row */}
        <Row
          className="flex"
          style={{
            height: "10vh",
          }}
        ></Row>
        <Row className="flex">
          <AnswerBox
            letterString="A"
            answerString={answers[0].text}
            isCorrect={correctIndex === answers[0].id}
            selected={selectedIndex === 0}
            revealed={revealedAnswerArray[0]}
          />
          <AnswerBox
            letterString="B"
            answerString={answers[1].text}
            isCorrect={correctIndex === answers[1].id}
            selected={selectedIndex === 1}
            revealed={revealedAnswerArray[1]}
          />
          <AnswerBox
            letterString="C"
            answerString={answers[2].text}
            isCorrect={correctIndex === answers[2].id}
            selected={selectedIndex === 2}
            revealed={revealedAnswerArray[2]}
          />
        </Row>
      </>
    );
  }
};

export default AnswerRows;
