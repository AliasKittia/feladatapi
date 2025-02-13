import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function TipusokList() {
  const [tipusok, setTipusok] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:5001/api/Tipusok')
      .then(response => {
        setTipusok(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the tipusok!', error);
      });
  }, []);

  return (
    <div>
      <h2>Tipusok List</h2>
      <ul>
        {tipusok.map(tipus => (
          <li key={tipus.id}>
            <Link to={`/tipusok/${tipus.id}`}>{tipus.megnevezes}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TipusokList;