import React, { useState } from 'react';
import axios from 'axios';

function NewTipus() {
  const [megnevezes, setMegnevezes] = useState('');
  const [leiras, setLeiras] = useState('');
  const [kepek, setKepek] = useState(null);

  const handleFileChange = (event) => {
    setKepek(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('megnevezes', megnevezes);
    formData.append('leiras', leiras);
    formData.append('kepek', kepek);

    axios.post('https://localhost:5001/api/UjTipusok', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        console.log('Tipus added successfully:', response.data);
      })
      .catch(error => {
        console.error('There was an error adding the tipus!', error);
      });
  };

  return (
    <div>
      <h2>Új Tipus</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Megnevezes:</label>
          <input type="text" value={megnevezes} onChange={(e) => setMegnevezes(e.target.value)} />
        </div>
        <div>
          <label>Leiras:</label>
          <input type="text" value={leiras} onChange={(e) => setLeiras(e.target.value)} />
        </div>
        <div>
          <label>Kepek:</label>
          <input type="file" onChange={handleFileChange} />
        </div>
        <button type="submit">Add Tipus</button>
      </form>
    </div>
  );
}

export default NewTipus;