
import './App.css';
import { Button, Col, Container, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnswerBox from './components/AnswerBox';
import QuestionBox from './components/QuestionBox';
import AnswerRows from './components/AnswerRows';
import { QUESTIONS } from './app/shared/QUESTIONS';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#522B29', height: '100vh' }}>
      <Container >
        <h1>What's Wrong Overlay v0.1</h1>
        <Container >
          <QuestionBox question={QUESTIONS[1]} />
          {/* Ansers Frame */}
          <Container className="my-3">
            <AnswerRows answers={QUESTIONS[1].answersArray} />
          </Container>
        </Container>
      </Container>
    </div >
  );
}

export default App;
