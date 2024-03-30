import React from "react";
import { Col } from "reactstrap";

const AnswerBox = (props) => {
  //answer box styling
  let colors = {
    plainColors: {
      letterText: "#2d3436",
      letterBox: "#0984e3",
      answerText: "#2d3436",
      answerBox: "#74b9ff",
    },
    selectColors: {
      letterText: "#2d3436",
      letterBox: "#fdcb6e",
      answerText: "#2d3436",
      answerBox: "#ffeaa7",
      answerBorder: "#ffeaa7",
    },
    wrongColors: {
      letterText: "#2d3436",
      letterBox: "#e17055",
      answerText: "#2d3436",
      answerBox: "#fd79a8",
    },
    correctColors: {
      letterText: "#2d3436",
      letterBox: "#00b894",
      answerText: "#2d3436",
      answerBox: "#55efc4",
    },
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
      <Col
        className="d-flex align-items-center justify-content-center big-letter answer-box"
        style={{
          marginLeft: 10,
          marginTop: 15,
          marginBottom: 15,
          backgroundColor: currentColors.letterBox,
          color: currentColors.letterText,
          textAlign: "center",
          borderTopLeftRadius: 50,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 0,
          paddingLeft: 15,
        }}
      >
        <div className="flex-grow">{props.letterString}</div>
      </Col>
      <Col
        className=" col-3 d-flex align-items-center justify-content-center answer-box"
        style={{
          marginRight: 20,
          marginTop: 15,
          marginBottom: 15,
          backgroundColor: currentColors.answerBox,
          color: currentColors.answerText,
          height: "20vh",
          textAlign: "center",
          borderTopLeftRadius: 0,
          borderTopRightRadius: 50,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 50,
          paddingRight: 20,
        }}
      >
        <h3 className="mx-1">{props.answerString}</h3>
      </Col>
    </>
  );
};

export default AnswerBox;
