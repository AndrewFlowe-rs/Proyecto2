import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LatestUser = () => {
  const [latestUser, setLatestUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLatestUser = async () => {
      try {
        const response = await axios.get('http://localhost:3031/api/user/latest');
        setLatestUser(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchLatestUser();
  }, []);

  if (loading) {
    return <p>Cargando último usuario...</p>;
  }

  if (error) {
    return <p>Error al cargar último usuario: {error}</p>;
  }

  return (
    <div>
      <h2>Último Usuario</h2>
      <p>Nombre: {latestUser.name}</p>
      <p>Email: {latestUser.email}</p>
      
    </div>
  );
};

export default LatestUser;
