import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3031/api/user');
        setUsers(response.data.data); 
      } catch (error) {
        setError(error.message); 
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'NOMBRE', width: 150 },
    { field: 'email', headerName: 'EMAIL', width: 250 },
    { field: 'number', headerName: 'NÚMERO', width: 250 },
    { field: 'role', headerName: 'ROL', width: 150 },
    {
      field: 'avatar',
      headerName: 'IMAGEN',
      width: 100,
      renderCell: (params) => (
        <img
          src={`http://localhost:3031/api/user/avatar/${params.row.avatar}`}
          alt={params.row.name}
          style={{ width: '100%', height: 'auto' }}
        />
      ),
    },
  ];

  const rows = users.map(user => ({
    id: user.id,
    name: user.name,
    email: user.email,
    number: user.number,
    role: user.name_role,
    avatar: user.avatar, 
  }));

  return (
    <>
      <h2>Listado de Usuarios</h2>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div style={{ height: 1000, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 }
              }
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </div>
      )}
    </>
  );
};

export default Users;
