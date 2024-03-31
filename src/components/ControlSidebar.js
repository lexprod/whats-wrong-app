import React from "react";
import { Container, Col, Row, Button, Collapse } from "reactstrap";
import { QUESTIONS } from "../app/shared/QUESTIONS";
import { useState, useEffect } from "react";

const ControlSidebar = (props) => {
  // toggle state
  const [revealToggle, setRevealToggle] = useState(false);

  const handlePrevious = () => {
    props.setQuestionIndex(Math.max(props.questionIndex - 1, 0));
  };
  const handleNext = () => {
    //clear selects and reveals
    handleReveal(-1);
    handleSelect(-1);
    props.setQuestionIndex(
      Math.min(props.questionIndex + 1, QUESTIONS.length - 1)
    );
  };
  const handleSelect = (index) => {
    props.setSelectedIndex(index);
  };

  const handleRevealToggle = () => {
    setRevealToggle(!revealToggle);
  };
  const handleReveal = (index) => {
    let newReveals = [];
    if (index === -1) {
      newReveals = [false, false, false, false, false, false];
    } else {
      newReveals = [...props.revealedAnswerArray];
      newReveals.fill(true, index, index + 1);
    }
    props.setRevealedAnswerArray(newReveals);
    setRevealToggle(false);
  };

  return (
    <Container
      className="d-flex align-items-top justify-content-center rounded-1"
      style={{
        width: 300,
        backgroundColor: "#2d3436",
        color: "white",
        textAlign: "center",
      }}
    >
      <Col className="my-2">
        <h3>Wrong Answers Only</h3>

        {/* question changer */}
        <Container>
          <p>Current Question ID: {QUESTIONS[props.questionIndex].id}</p>
          <Row className="d-flex">
            <Col>
              <Button
                onClick={handlePrevious}
                disabled={props.questionIndex === 0}
              >
                Prev Question
              </Button>
            </Col>
            <Col>
              <Button
                onClick={handleNext}
                disabled={props.questionIndex === QUESTIONS.length - 1}
              >
                Next Question
              </Button>
            </Col>
          </Row>
        </Container>

        {/* answer highlighter */}
        <Container className="my-2">
          <div>Highlight an answer:</div>
          {QUESTIONS[props.questionIndex].answersArray.map((answer, index) => (
            <Button
              className="col-3 mx-1 my-1"
              key={index}
              onClick={() => handleSelect(index)}
              disabled={index === props.selectedIndex}
            >
              {answer.letter}
            </Button>
          ))}
          <Button className="m-1" onClick={() => handleSelect(-1)}>
            Clear Selection
          </Button>
        </Container>

        {/* answer revealer */}

        <Container className="my-2">
          {/* reveal toggle  */}
          <Button color="warning" onClick={() => handleRevealToggle()}>
            Toggle Reveals
          </Button>
          <Collapse isOpen={revealToggle}>
            <div>Reveal an answer:</div>
            {QUESTIONS[props.questionIndex].answersArray.map(
              (answer, index) => (
                <Button
                  className="col-3 mx-1 my-1"
                  key={index}
                  onClick={() => handleReveal(index)}
                  disabled={props.revealedAnswerArray[index]}
                >
                  {answer.letter}
                </Button>
              )
            )}
            <Button className="m-1" onClick={() => handleReveal(-1)}>
              Clear Reveals
            </Button>
          </Collapse>
        </Container>
      </Col>
    </Container>
  );
};

export default ControlSidebar;
