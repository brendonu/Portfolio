import './App.css';
import { useState, useEffect, useRef } from 'react';
import { Container, Col, Form, Button, Row } from 'react-bootstrap';
import { HashRouter as Router, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';
import Confirmation from './Confirmation';

function useScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.pathname.substring(1);
    if (sectionId) {
      const section = document.querySelector(`.${sectionId}`);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
}

function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [warning, setWarning] = useState('');
  const navigate = useNavigate();
  const projectsRef = useRef(null);
  useScrollToSection();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });
  
    const elements = projectsRef.current.querySelectorAll('.project');
    elements.forEach((el) => observer.observe(el));
  
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

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
  

  const scrollToSection = (section) => {
    if (section === '') {
      const projectsSection = document.querySelector('.description');
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
    navigate(`/${section}`);
  };

  return (
    <div className="App">
        <div className="taskbar">
        <button onClick={() => scrollToSection('contact-me')}>
          Contact Me
        </button>
        <button onClick={() => scrollToSection('about-me')}>
          About Me
        </button>
        <button onClick={() => scrollToSection('projects')}>
          Projects
        </button>
        <button onClick={() => scrollToSection('')}>
          Home
        </button>
        <span className="text">Brendon Uzoigwe</span>
      </div>
      <div className="description home">
        Hello, I'm Brendon Uzoigwe, 
        <h1>Computer Science Student.</h1>
      </div>

      <div className="App-rect1 projects">Projects</div>
      <Col className="pics" ref={projectsRef}>
      <div className="project hidden">
          <img src={process.env.PUBLIC_URL + '/Screenshot 2024-05-20 at 11.16.16 PM.png'} alt="" className="cf" />
            <p>A simple website that allows users to explore various career paths through the form of two quizzes. Results are provided by chatgpt API.</p>
          <a
            href="https://saakethpula.github.io/starter_helpi/"
            className="link"
          >
            <div>You and Careers</div>
          </a>
        </div>
        <div className="project hidden">
          <img src={process.env.PUBLIC_URL + '/Screenshot 2024-05-21 at 12.41.07 AM.png'} alt="" className="nba" />
          <p>Performed classification and regression on NBA Data to make predictions on games.</p>
          <a href="https://github.com/brendonu/NBA-Predictions" className="link">
            <div>NBA Predictions</div>
          </a>
        </div>
        <div className="project hidden">
          <img src={process.env.PUBLIC_URL + '/Screenshot 2024-05-20 at 10.52.12 PM.png'} alt="" className="UC" />
          <p>An educational UD-themed clicker game, where the user feeds a blue hen and answers questions to level up.</p>
          <a
            href="https://drive.google.com/file/d/1dn49c3sJGOREHscSrQ3w2zZttXy8qY-y/view?usp=sharing"
            className="link"
          >
            <div>UClicker</div>
          </a>
        </div>
        <div className="project hidden">
          <img src={process.env.PUBLIC_URL + '/CPAhzgowLi2NtrP9HfVy9Y-1200-80.png'} alt="" className="nba2" /> 
          <p> Using clustering to group NBA games into different categories based on important features.</p> 
          <a href="https://github.com/brendonu/NBA-Clustering" className="link">
            <div>NBA Clustering</div>
          </a>
        </div>
      </Col>

      <div className="App-rect2 about-me">
        <br />
        About Me
        <Container>
          <img
            src={process.env.PUBLIC_URL + '/code.jpg'}
            alt="code"
            className="code"
          />
          <p className="text2">
            Hello! My name is Brendon and I am a junior at the University of
            Delaware studying Computer Science with a concentration in data
            science and a minor in mathematics.<br />
            <br />
            I have been interested in computers for as long as I can remember
            and once I started coding I fell in love. Some of the languages I
            enjoy using include Python, Java, C/C++, C#, TypeScript/JavaScript, SQL,
            and R.<br />
            <br />
            The main areas of computer science that I have an interest in are
            software engineering and data science. I have experience with web
            development, data analysis, and machine learning.
          </p>
          <br />
        </Container>
      </div>

      <div className="contact-me">
        <Container>
          <h2>Contact Me</h2>
          <Form onSubmit={handleSubmit}>
            {warning && (
              <p
                style={{
                  color: 'red',
                  textAlign: 'center',
                  fontWeight: 'normal',
                  border: '2px solid red',
                  backgroundColor: 'rgb(254, 227, 227',
                  fontSize: '40%',
                }}
              >
                {warning}
              </p>
            )}
            <Row>
              <Col md={6}>
                <Form.Group controlId="formName">
                  <Form.Label className="text3">Name</Form.Label>
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
                  <Form.Label className="text3">Email</Form.Label>
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
              <Form.Label className="text3">Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Enter your message"
              />
            </Form.Group>
            <Button
              variant="dark"
              type="submit"
              style={{
                borderRadius: '50px',
                fontSize: '20px',
                padding: '10px 50px',
              }}
            >
              Submit
            </Button>
          </Form>
        </Container>
        <br></br>
      </div>
    <div className='icons'>
    &nbsp;
    <a href="https://github.com/brendonu" target="_blank" rel="noreferrer">
      <img src={process.env.PUBLIC_URL + '/Primer.jpeg'} alt="GitHub Logo" width="30" height="30" />
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
        <Route path="/projects" element={<Home />} />
        <Route path="/about-me" element={<Home />} />
        <Route path="/contact-me" element={<Home />} />
        <Route path="/email-confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  );
}

export default App;