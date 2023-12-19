import React from "react";
import { Container, Col, Row, Button } from 'reactstrap';
import { QUESTIONS } from "../app/shared/QUESTIONS";

const ControlSidebar = (props) => {
    const handlePrevious = () => {
        props.setQuestionIndex(Math.max((props.questionIndex - 1), 0));
    }
    const handleNext = () => {
        props.setQuestionIndex(Math.min((props.questionIndex + 1), (QUESTIONS.length - 1)));
    }
    const handleSelect = (index) => {
        props.setSelectedIndex(index);
    }

    return (
        <Container className="d-flex align-items-top justify-content-center rounded-1" style={{
            height: '80vh', width: 300, backgroundColor: '#2d3436', color: 'white', textAlign: 'center'
        }}>
            <Col className="my-2">
                <h3>What's Wrong Overlay v0.1</h3>



                {/* question changer */}
                <Container>
                    <p>
                        Current Question ID: {QUESTIONS[props.questionIndex].id}
                    </p>
                    <Row className="d-flex">
                        <Col>
                            <Button onClick={handlePrevious}
                                disabled={props.questionIndex === 0}
                            >
                                Prev Question
                            </Button>
                        </Col>
                        <Col>

                            <Button onClick={handleNext}
                                disabled={props.questionIndex === QUESTIONS.length - 1}>
                                Next Question
                            </Button>
                        </Col>
                    </Row>
                </Container>



                {/* answer highlighter */}
                <Container className="my-2">
                    <div>
                        Highlight an answer:
                    </div>
                    {QUESTIONS[props.questionIndex].answersArray.map((answer, index) => (
                        <Button className="col-3 mx-1 my-1" key={index} onClick={() => handleSelect(index)}>
                            {answer.letter}
                        </Button>
                    ))}
                    <Button className="m-1" onClick={() => handleSelect(-1)}>
                        Clear Selection
                    </Button>
                </Container>



            </Col>

        </Container>
    );
}

export default ControlSidebar;