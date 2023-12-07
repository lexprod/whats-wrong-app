
import './App.css';
import { Button, Col, Container, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnswerBox from './components/AnswerBox';
import QuestionBox from './components/QuestionBox';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#522B29', height: '100vh' }}>
      <Container >
        <h1>What's Wrong Overlay v0.1</h1>
        <Container >
          <QuestionBox />
          {/* Ansers Frame */}
          <Container className="my-3">
            {/* First Row */}
            <Row>
              <AnswerBox />
              <AnswerBox />
              <AnswerBox />
            </Row>
            {/* Second Row */}
            <Row>
              <AnswerBox />
              <AnswerBox />
              <AnswerBox />
            </Row>
          </Container>

          <Container className="my-3" style={{ backgroundColor: '#37FF8B', color: 'black' }}>
            also
          </Container>
          <Container className="my-3" style={{ backgroundColor: '#8D9EC6', color: 'black' }}>
            also
          </Container>
        </Container>
      </Container>
    </div >
  );
}

export default App;
