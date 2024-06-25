import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';


function UClickerDetails() {
  const navigate = useNavigate();
  return (
    <div className='App'>
      <div className="taskbar">
      <button onClick={() => {
          navigate('/');
          setTimeout(() => {
            const projectsSection = document.querySelector('.contact-me');
            projectsSection.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}>Contact Me</button>
      <button onClick={() => {
          navigate('/');
          setTimeout(() => {
            const projectsSection = document.querySelector('.App-rect2');
            projectsSection.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}>About Me</button>
        <button onClick={() => {
          navigate('/');
          setTimeout(() => {
            const projectsSection = document.querySelector('.App-rect1');
            projectsSection.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}>Projects</button>
        <button onClick={() => navigate('/')}>Home</button>
        <span className='text'>Brendon Uzoigwe</span>
      </div>
      <div className="description2" >UClicker</div>
      <div className='UC2'>
      <img src="https://imgur.com/M26cKsd.png" alt="" className='UC' />
      <div> UClicker is a UD</div>
      </div>
    </div>
  );
}


function NBAPredictionsDetails() {
  const navigate = useNavigate();
  return (
    <div className='App'>
      <div className="taskbar">
        <button onClick={() => navigate('/')}>Home</button>
        <span className='text'>Brendon Uzoigwe</span>
      </div>
      <h2>Details for NBA Predictions</h2>
    </div>
  );
}

function BSTLibraryDetails() {
  const navigate = useNavigate();
  return (
    <div className='App'>
      <div className="taskbar">
        <button onClick={() => navigate('/')}>Home</button>
        <span className='text'>Brendon Uzoigwe</span>
      </div>
      <h2>Details for BST Library</h2>
    </div>
  );
}

function CareerFinderDetails() {
  const navigate = useNavigate();
  return (
    <div className='App'>
      <div className="taskbar">
        <button onClick={() => navigate('/')}>Home</button>
        <span className='text'>Brendon Uzoigwe</span>
      </div>
      <h2>Details for Career Finder</h2>
    </div>
  );
}

function TaskManagerDetails() {
  const navigate = useNavigate();
  return (
    <div className='App'>
      <div className="taskbar">
        <button onClick={() => navigate('/')}>Home</button>
        <span className='text'>Brendon Uzoigwe</span>
      </div>
      <h2>Details for Task Manager</h2>
    </div>
  );
}

function NBAClusteringDetails() {
  const navigate = useNavigate();
  return (
    <div className='App'>
      <div className="taskbar">
        <button onClick={() => navigate('/')}>Home</button>
        <span className='text'>Brendon Uzoigwe</span>
      </div>
      <h2>Details for NBA Clustering</h2>
    </div>
  );
}

function PictureDetails() {
  const { id } = useParams();

  switch (id) {
    case 'UClicker':
      return <UClickerDetails />;
    case 'NBA-Predictions':
      return <NBAPredictionsDetails />;
    case 'Library':
      return <BSTLibraryDetails />;
    case 'Career-Finder':
      return <CareerFinderDetails />;
    case 'Task-Manager':
      return <TaskManagerDetails />;
    case 'NBA-Clustering':
      return <NBAClusteringDetails />;
    default:
      return <div>Page not found</div>;
  }
}

export default PictureDetails;

