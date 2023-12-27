
import './App.css';
import { Col, Container, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuestionBox from './components/QuestionBox';
import AnswerRows from './components/AnswerRows';
import { QUESTIONS } from './app/shared/QUESTIONS';
import ControlSidebar from './components/ControlSidebar';
import { useState, useEffect } from 'react';

const startingRevealValues = [false, false, false, false, false, false];

function App() {
  console.log('Rendering App component');

  // setup game status
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [revealedAnswerArray, setRevealedAnswerArray] = useState(startingRevealValues);

  // // Log the array when it changes
  // useEffect(() => {
  //   console.log('Revealed Answer Array:', revealedAnswerArray);
  // }, [revealedAnswerArray]);

  return (
    <div className="App" style={{ backgroundColor: '#522B29', height: '100vh' }}>
      <Container>
        <Row >
          <Col className='my-3'>
            <QuestionBox question={QUESTIONS[questionIndex]} />
            {/* Ansers Frame */}
            <Container className="my-3">
              <AnswerRows
                answers={QUESTIONS[questionIndex].answersArray}
                selectedIndex={selectedIndex}
                correctIndex={QUESTIONS[questionIndex].correctIndex}
                revealedAnswerArray={revealedAnswerArray}
              />
            </Container>
          </Col>
          <Col className='col-1 my-3 mx-3'>
            <ControlSidebar
              questionIndex={questionIndex}
              setQuestionIndex={setQuestionIndex}
              setSelectedIndex={setSelectedIndex}
              selectedIndex={selectedIndex}
              revealedAnswerArray={revealedAnswerArray}
              setRevealedAnswerArray={setRevealedAnswerArray}
            />
          </Col>
        </Row>

      </Container>
    </div >
  );
}

export default App;
