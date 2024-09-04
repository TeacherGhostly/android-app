import React, { useState } from 'react';
import HomePage from './components/HomePage'; // Make sure this path is correct

function SecondPage({ navigate }) {
  return (
    <div>
      <h1>Second Page</h1>
      <p>This is the content of the second page.</p>
      <button onClick={() => navigate('home')}>Back to Home</button>
    </div>
  );
}

function ThirdPage({ navigate }) {
  return (
    <div>
      <h1>Third Page</h1>
      <p>This is the content of the third page.</p>
      <button onClick={() => navigate('home')}>Back to Home</button>
    </div>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      {currentPage === 'home' && <HomePage navigate={navigate} />}
      {currentPage === 'second' && <SecondPage navigate={navigate} />}
      {currentPage === 'third' && <ThirdPage navigate={navigate} />}
    </div>
  );
}

export default App;
