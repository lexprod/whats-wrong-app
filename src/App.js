
import './App.css';
import { Button, Col, Container, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnswerBox from './components/AnswerBox';

function App() {
  return (
    <div className="App">
      <Container style={{ backgroundColor: '#522B29' }} >

        <h1>What's Wrong Overlay v0.1</h1>

        <Container >
          <Container xs='12' style={{ backgroundColor: '#A06B9A', color: 'black' }}>
            {/* Q Box */}
            <h2>
              Lelush, a contestant on Tencent’s making the boy band show Produce Camp 2021, made it all the way to the finals despite what?
            </h2>
          </Container>
          <Row>
            {/* Ansers Frame */}
            <Container className="my-3">
              {/* First Row */}
              <Row>
                <AnswerBox />
                <AnswerBox />
              </Row>
              {/* Second Row */}
              <Row>
                <AnswerBox />
                <AnswerBox />
              </Row>
            </Container>

          </Row>
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
