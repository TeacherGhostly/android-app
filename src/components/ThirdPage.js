import React from 'react';
import { Link } from 'react-router-dom';

function ThirdPage() {
  return (
    <div className="third-page">
      <h1>Third Page</h1>
      <p>This is the content of the third page.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default ThirdPage;
