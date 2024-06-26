import React, { useEffect, useState } from "react";
import { ContentData } from "./ContentData";
import Alert from '../reusable/Alert'
import CategoryItem from "./CategoryItem";

const metrics = [
  {
    show: true,
    title: "Movies in Data Base",
    color: "primary",
    digit: 21,
    icon: "film",
  },
  {
    show: true,
    title: "Total awards",
    color: "success",
    digit: 79,
    icon: "award",
  },
  {
    show: true,
    title: "Actors quantity",
    color: "warning",
    digit: 49,
    icon: "user",
  },
];
function ContentRowTop({ data }) {
  const [metrics, setMetrics] = useState([])
  const [loading, setLoading] = useState({
    metrics: true,
    categories: true,
    lastProduct: true
  });
  const [error, setError] = useState("")
  const [category, setCategory] = useState([])
  const [errors, setErrors] = useState({
    metrics: "",
    categories: "",
    lastProduct: ""
  });
  const [lastProduct, setLastProduct] = useState({});
  const [lastUser, setLastUser] = useState({});

useEffect(()=>{
  const getMetrics = async () => {
    try {
      const endpoint = "http://localhost:3031/api/metrics";
      const { ok, data } = await fetch(endpoint, {
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());

      ok && setMetrics(data);

      setTimeout(() => {
        setLoading({
          ...loading,
          metrics: false,
        });
      }, 2000);
    } catch (error) {
      setErrors({
        ...errors,
        metrics: error.message,
      });
    }
  };
   

const getCategory = async () => {
  try {
    const endpoint = "http://localhost:3031/api/query?q=SELECT name from categoties"
    const { ok, data } = await fetch(endpoint, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    ok && setCategory(data);

    setTimeout(() => {
      setLoading({
        ...loading,
        categories: false,
      });
    }, 2000);
  } catch (error) {
    setErrors({
      ...errors,
      categories: error.message,
    });
  }
};
const getLastProduct = async () => {
  try {
    const endpoint =
      "http://localhost:3031/api/query?q=SELECT * FROM products WHERE createdAt = (SELECT MAX(createdAt) FROM products) LIMIT 1";
    const {
      ok,
      data: [product],
    } = await fetch(endpoint, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    ok && setLastProduct(product);

    setTimeout(() => {
      setLoading({
        ...loading,
        lastProduct: false,
      });
    }, 2000);
  } catch (error) {
    setErrors({
      ...errors,
      lastProduct: error.message,
    });
  }
};
const getLastUser = async () => {
  try {
    const endpoint =
      "http://localhost:3031/api/query?q=SELECT * FROM users WHERE createdAt = (SELECT MAX(createdAt) FROM users) LIMIT 1";
    const {
      ok,
      data: [user],
    } = await fetch(endpoint, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    ok && setLastUser(user);

    setTimeout(() => {
      setLoading({
        ...loading,
        lastUser: false,
      });
    }, 2000);
  } catch (error) {
    setErrors({
      ...errors,
      lastUser: error.message,
    });
  }
};


getMetrics();
getCategory();
getLastProduct();
getLastUser()


},[])
  return (
    <React.Fragment>
      {/*<!-- Content Row Top -->*/}
      <div className="container-fluid">
        <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800"> Dashboard</h1>
        </div>

        {/*<!-- Content Row Movies-->*/}
        <div className="row justify-content-center">
          {/*<!-- Movies in Data Base -->*/}
          {/*<!-- Total awards -->*/}
          {/*<!-- Actors quantity -->*/}

          {loading ?
          metrics
            .map((el, i) => {
              return <ContentData key={i} {...el} />;
            })
            
          : <div className="my-4" ><h5 className="m-0 font-weight-bold text-danger ">
Cargando...        </h5></div>  }
        </div>
       {error && <Alert message={error}/>} 
        {/*<!-- End movies in Data Base -->*/}

        {/*<!-- Content Row Last Movie in Data Base -->*/}
        <div className="row">
          {/*<!-- Last Movie in DB -->*/}
          <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">
                Ultimo producto creado : <strong>{lastProduct.name}</strong>
                </h5>
              </div>
              <div className="card-body">
                <div className="text-center">
                  <img
                    className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                    style={{ width: 40 + "rem" }}
                    src={`http://localhost:3031/api/products/image/${lastProduct.image}`}
                    alt=" Star Wars - Mandalorian "
                  />
                </div>
                <p>
                {lastProduct.description}
                </p>
                <p>
                {lastProduct.price}
                </p>
                {/* <a
                  className="btn btn-danger"
                  target="_blank"
                  rel="nofollow"
                  href="/"
                >
                  Ver más
                </a> */}
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">
                Ultimo usuario creado: <strong>{lastUser.name}</strong>
                </h5>
              </div>
              <div className="card-body">
                <div className="text-center">
                  <img
                    className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                    style={{ width: 40 + "rem" }}
                    src={`http://localhost:3031/api/user/avatar/${lastUser.avatar}`}
                    alt=" Star Wars - Mandalorian "
                  />
                </div>
                <p>
                {lastUser.state}
                </p>
                <p>
                {lastUser.number}
                </p>
                <p>
                {lastUser.email}
                </p>
                {/* <a
                  className="btn btn-danger"
                  target="_blank"
                  rel="nofollow"
                  href="/"
                >
                  Ver más
                </a> */}
              </div>
            </div>
          </div>
          {/*<!-- End content row last movie in Data Base -->*/}

          {/*<!-- Genres in DB -->*/}
          <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">
                 Categorías
                </h5>
              </div>
              <div className="card-body">
                <div className="row">
                {category.map(({ name }) => (
                    <CategoryItem key={name} name={name} />
                  ))}
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<!--End Content Row Top-->*/}
    </React.Fragment>
  );
}
export default ContentRowTop;
