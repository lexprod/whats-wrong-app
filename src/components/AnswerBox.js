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
    }

    // TODO: implement all color palettes, then just have the if/switch statement change the activeColors object appropriately
    if (!props.isCorrect & props.revealed) {
        return (
            // wrong reveal version
            <>
                <Col className="my-3 mx-1 rounded-4 d-flex align-items-center justify-content-center" style={{ backgroundColor: colors.wrongColors.letterBox, color: colors.wrongColors.letterText, height: '20vh', textAlign: 'center' }}>
                    <h3>{props.letterString}</h3>
                </Col>
                <Col className="my-3 mx-3 rounded-4 col-3 d-flex align-items-center justify-content-center" style={{ backgroundColor: colors.wrongColors.answerBox, color: colors.wrongColors.answerText, height: '20vh', textAlign: 'center' }}>
                    <h3 className="mx-3">{props.answerString}</h3>
                </Col>
            </>
        );
    }
    if (props.isCorrect & props.revealed) {
        return (
            // correct reveal version
            <>
                <Col className="my-3 mx-1 rounded-4 d-flex align-items-center justify-content-center" style={{ backgroundColor: colors.correctColors.letterBox, color: colors.correctColors.letterText, height: '20vh', textAlign: 'center' }}>
                    <h3>{props.letterString}</h3>
                </Col>
                <Col className="my-3 mx-3 rounded-4 col-3 d-flex align-items-center justify-content-center" style={{ backgroundColor: colors.correctColors.answerBox, color: colors.correctColors.answerText, height: '20vh', textAlign: 'center' }}>
                    <h3 className="mx-3">{props.answerString}</h3>
                </Col>
            </>
        );
    }

    if (props.selected) {
        return (
            // highlighted selection version
            <>
                <Col className="my-3 mx-1 rounded-4 d-flex align-items-center justify-content-center" style={{ backgroundColor: colors.selectColors.letterBox, color: colors.selectColors.letterText, height: '20vh', textAlign: 'center' }}>
                    <h3>{props.letterString}</h3>
                </Col>
                <Col className="my-3 mx-3 rounded-4 col-3 d-flex align-items-center justify-content-center" style={{ backgroundColor: colors.selectColors.answerBox, color: colors.selectColors.answerText, height: '20vh', textAlign: 'center' }}>
                    <h3 className="mx-3">{props.answerString}</h3>
                </Col>
            </>
        );
    }

    return (
        // not highlighted selection version
        <>
            <Col className="my-3 mx-1 rounded-4 d-flex align-items-center justify-content-center" style={{ backgroundColor: colors.plainColors.letterBox, color: colors.plainColors.letterText, height: '20vh', textAlign: 'center' }}>
                <h3>{props.letterString}</h3>
            </Col>
            <Col className="my-3 mx-3 rounded-4 col-3 d-flex align-items-center justify-content-center" style={{ backgroundColor: colors.plainColors.answerBox, color: colors.plainColors.answerText, height: '20vh', textAlign: 'center' }}>
                <h3 className="mx-3">{props.answerString}</h3>
            </Col>
        </>

    );
}

export default AnswerBox;
