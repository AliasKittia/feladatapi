import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function TipusDetails() {
  const { id } = useParams();
  const [tipus, setTipus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://localhost:5001/api/Tipusok/${id}`)
      .then(response => {
        setTipus(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the tipus details!', error);
        setError('There was an error fetching the tipus details!');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>{tipus.megnevezes}</h2>
      <p>{tipus.leiras}</p>
      {tipus.kepek && <img src={tipus.kepek} alt={tipus.megnevezes} />}
    </div>
  );
}

export default TipusDetails;