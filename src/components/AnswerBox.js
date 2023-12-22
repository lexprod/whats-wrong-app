import React from "react";
import { Col } from 'reactstrap';

const AnswerBox = (props) => {
    let colors = {
        plainColors: {
            letterText: '#2d3436',
            letterBox: '#0984e3',
            answerText: '#2d3436',
            answerBox: '#74b9ff'
        },
        selectColors: {
            letterText: '#2d3436',
            letterBox: '#fdcb6e',
            answerText: '#2d3436',
            answerBox: '#ffeaa7'
        },
        wrongColors: {
            letterText: '#2d3436',
            letterBox: '#e17055',
            answerText: '#2d3436',
            answerBox: '#fd79a8'
        },
        correctColors: {
            letterText: '#2d3436',
            letterBox: '#00b894',
            answerText: '#2d3436',
            answerBox: '#55efc4'
        }
    };
    let currentColors = colors.plainColors;

    if (!props.isCorrect & props.revealed) {
        currentColors = colors.wrongColors;
    }
    if (props.isCorrect & props.revealed) {
        currentColors = colors.correctColors;
    }
    if (props.selected & !props.revealed) {
        currentColors = colors.selectColors;
    }

    return (
        // default version
        <>
            <Col className="my-3 mx-1 rounded-4 d-flex align-items-center justify-content-center" style={{ backgroundColor: currentColors.letterBox, color: currentColors.letterText, height: '20vh', textAlign: 'center' }}>
                <h3>{props.letterString}</h3>
            </Col>
            <Col className="my-3 mx-3 rounded-4 col-3 d-flex align-items-center justify-content-center" style={{ backgroundColor: currentColors.answerBox, color: currentColors.answerText, height: '20vh', textAlign: 'center' }}>
                <h3 className="mx-3">{props.answerString}</h3>
            </Col>
        </>

    );
}

export default AnswerBox;
