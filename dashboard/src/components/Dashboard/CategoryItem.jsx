import React, { useEffect, useState } from 'react';

const CategoryItem = ({ name }) => {
  const [totalProductos, setTotalProductos] = useState(0);

  useEffect(() => {
    const getTotalProductos = async () => {
      try {
        const endpoint = `http://localhost:3031/api/query?q=SELECT total_productos FROM categoties WHERE name='${name}'`;
        const response = await fetch(endpoint, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const { ok, data } = await response.json();

        if (ok && data.length > 0) {
          setTotalProductos(data[0].total_productos);
        } else {
          throw new Error('Failed to fetch total productos');
        }
      } catch (error) {
        console.error('Error fetching total productos:', error);
      }
    };

    getTotalProductos();
  }, [name]);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card bg-danger text-white shadow">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Total Productos: {totalProductos}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
