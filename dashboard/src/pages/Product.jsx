import React, { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const endpoint = 'http://localhost:3031/api/products';

    const getProducts = async () => {
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        
        setProducts(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'name', headerName: 'NOMBRE', width: 150 },
    { field: 'price', headerName: 'PRECIO', width: 150, type: 'number' },
    { field: 'description', headerName: 'DESCRIPCIÓN', width: 300 },
    {
      field: 'image',
      headerName: 'IMAGEN',
      width: 150,
      renderCell: (params) => (
        <img
          src={`http://localhost:3031/api/products/image/${params.value}`}
          alt={params.row.name}
          style={{ width: '70%', height: 'auto' }}
        />
      ),
    },
  ];

  const rows = products.map(product => ({
    id: product.id,
    name: product.name,
    price: product.price,
    description: product.description,
    image: product.image,
  }));

  return (
    <>
      <h1>Todos Los Productos</h1>
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

export default Product;
