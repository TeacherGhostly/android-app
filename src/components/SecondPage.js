import React from 'react';
import { Link } from 'react-router-dom';

function SecondPage() {
  return (
    <div className="second-page">
      <h1>Second Page</h1>
      <p>This is the content of the second page.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default SecondPage;
