import React from "react";
import { Container, Col, Button } from 'reactstrap';
import { QUESTIONS } from "../app/shared/QUESTIONS";

const ControlSidebar = (props) => {
    const handlePrevious = () => {
        props.setQuestionIndex(Math.max((props.questionIndex - 1), 0));
    }
    const handleNext = () => {
        props.setQuestionIndex(Math.min((props.questionIndex + 1), (QUESTIONS.length - 1)));
    }

    return (
        <Container className="d-flex align-items-top justify-content-center rounded-1" style={{
            height: '80vh', width: 300, backgroundColor: '#2d3436', color: 'white', textAlign: 'center'
        }}>
            <Col className="my-2">
                <h3>What's Wrong Overlay v0.1</h3>
                <p>
                    Current Question ID: {QUESTIONS[props.questionIndex].id}
                </p>
                <Button onClick={handlePrevious}
                    disabled={props.questionIndex == 0}
                >
                    Prev Question
                </Button>
                <Button onClick={handleNext}
                    disabled={props.questionIndex == QUESTIONS.length - 1}>
                    Next Question
                </Button>
            </Col>

        </Container>
    );
}

export default ControlSidebar;