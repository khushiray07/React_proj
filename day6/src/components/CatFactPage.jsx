import React, { useState } from 'react';
import axios from 'axios';

function CatFactPage() {
  const [catFact, setCatFact] = useState('');

  const fetchCatFact = async () => {
    try {
      const response = await axios.get('https://catfact.ninja/fact');
      setCatFact(response.data.fact);
    } catch (error) {
      console.error('Error fetching cat fact:', error);
    }
  };

  return (
    <div >
      <h2>Welcome to the Cat Fact Page!</h2>
      <p>Click the button to get a random cat fact.</p>
      <button onClick={fetchCatFact}>Get Cat Fact</button>
      {catFact && (
        <div style={{ marginTop: '20px', fontSize: '1.2em' }}>
          <strong>Cat Fact:</strong> {catFact}
        </div>
      )}
    </div>
  );
}

export default CatFactPage;
