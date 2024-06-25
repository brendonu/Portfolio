import './App.css';
import { useState } from 'react';
import { Container, Col, Form, Button, Row} from 'react-bootstrap';
import { HashRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import PictureDetails from './PictureDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';
import Confirmation from './Confirmation';


function Home() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });

    const [warning, setWarning] = useState('');

    const navigate = useNavigate();
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
      setWarning('');
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();

      if (!formData.name || !formData.email || !formData.message) {
        setWarning('All fields are required');
      return;
      }
  
      emailjs.send(
        'service_2nwc63m', 
        'template_u0tj8la', 
        formData,
        'mhTpwaMUaDisPSt26' 
      ).then(
        (response) => {
          setFormData({
            name: '',
            email: '',
            message: '',
          });
          navigate('/email-confirmation');
        },
        (err) => {
          alert('Failed to send the message. Please try again.');
        }
      );
    };
  return (
    <div className="App">
    <div className="taskbar">
      <button onClick={() => {
        const projectsSection = document.querySelector('.contact-me');
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }}> Contact Me</button>
      <button onClick={() => {
        const projectsSection = document.querySelector('.App-rect2');
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }}>About Me</button>
      <button onClick={() => {
        const projectsSection = document.querySelector('.App-rect1');
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }}>Projects</button>
      <button onClick={() => {
        const projectsSection = document.querySelector('.description');
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }}>Home</button>
      <span className='text'>Brendon Uzoigwe</span>
    </div>
    <div className="description">Hello, I'm Brendon Uzoigwe, <br></br> Computer Science Student.
    </div>
    
      <div className="App-rect1">Projects</div>
      <Col className='pics'>
              <div>
                <img src="https://imgur.com/M26cKsd.png" alt="" className='UC' />
                <a href="https://drive.google.com/file/d/1dn49c3sJGOREHscSrQ3w2zZttXy8qY-y/view?usp=sharing" className='link'>
                  <div>UClicker</div>
                </a>
              </div>
              <div>
                <img src="https://imgur.com/76pAT1y.png" alt="" className='nba' />
                <a href="https://github.com/brendonu/NBA-Predictions" className='link'>
                  <div>NBA Predictions</div>
                </a>
              </div>
              <div>
                <img src="https://imgur.com/gxckPwa.png" alt="" className='lib' />
                <a href="https://github.com/brendonu/Library" className='link'>
                  <div>BST Library</div>
                </a>
              </div>
            </Col>
            <Col className='pics'>
              <div>
                <img src="https://imgur.com/E08ERg1.png" alt="" className='cf' />
                <a href="https://saakethpula.github.io/starter_helpi/" className='link'>
                  <div>Career Finder</div>
                </a>
              </div>
              <div>
                <img src="https://imgur.com/po3C9vr.png" alt="" className='tm' />
                <a href="https://github.com/brendonu/Task-manager" className='link'>
                  <div>Task Manager</div>
                </a>
              </div>
              <div>
                <img src="https://imgur.com/Fms7Ejp.png" alt="" className='nba2' />
                <a href="https://github.com/brendonu/NBA-Clustering" className='link'>
                  <div>NBA Clustering</div>
                </a>
              </div>
    </Col>

<div className='App-rect2'>
  <br></br>
  About Me
  <Container>
  <img src="https://imgur.com/KDJZg2j.png" alt="code" className='code'/>
  <p className='text2'>
  Hello! My name is Brendon and I am a junior at the University of Delaware studying Computer Science with a concentration in data science and a minor in mathematics.<br></br>
  <br></br>I have been interested in computers for as long as I can remember and once I started coding I fell in love. Some of the languages I enjoy using include Python, Java, C/C++, TypeScript/JavaScript, SQL, and R.<br></br>
  <br></br>The main areas of computer science that I have an interest in are software engineering and data science. I have experience with web development, data analysis, and machine learning.
    </p>
    <br></br>
    </Container>
</div>

<div className="contact-me">
        <Container>
          <h2>Contact Me</h2>
          <Form onSubmit={handleSubmit}>
          {warning && <p style={{ color: 'red', textAlign: 'center', fontWeight: 'normal', border: '2px solid red', backgroundColor: 'rgb(254, 227, 227', fontSize: '40%'}}>{warning}</p>}
            <Row>
              <Col md={6}>
                <Form.Group controlId="formName">
                  <Form.Label className='text3'>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formEmail">
                  <Form.Label className='text3'>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="message" controlId="formMessage">
              <Form.Label className='text3'>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Enter your message"
              />
            </Form.Group>
            <Button variant='dark' type="submit" style={{ borderRadius: '50px', fontSize: '20px', padding: '10px 50px' }}>
              Submit
            </Button>
          </Form>
        </Container>
        <br></br>
      </div>
    <div className='icons'>
    &nbsp;
    <a href="https://github.com/brendonu" target="_blank" rel="noreferrer">
      <img src="https://imgur.com/sJYhPbg.png" alt="GitHub Logo" width="30" height="30" />
    </a>
    &nbsp; &nbsp;
    <a href="https://www.linkedin.com/in/brendon-uzoigwe-569935259/" target="_blank" rel="noreferrer">
      <img src="https://i.pinimg.com/564x/6b/ab/30/6bab3017350ca04c6fa05569672bd31e.jpg" alt="LinkedIn Logo" width="30" height="30" />
    </a>  
  </div> 
</div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<PictureDetails />} />
        <Route path="/email-confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  );
  
}

export default App;
