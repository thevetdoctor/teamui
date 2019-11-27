import React from 'react';
import '../css/App.css';

function App() {

  return (
    <div className="App">
        <a href='/'>Back</a>
        <a href='/api/v1/docs'>Documentation</a>
        <h1>Welcome to Teamwork</h1>
        <h3>... where teams actually WORK!</h3>
        <img src='https://res.cloudinary.com/thevetdoctor/image/upload/v1574600900/teamwork/Penguins.jpg' alt='Team Bond'/>
    </div>
  );
}

export default App;
