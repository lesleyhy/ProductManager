import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  deleteOneById,
  getAll,
} from '../services/internalApiService';

export const AllProducts = (props) => {
  const [products, setProducts] = useState([]);

  
  /* Instructor:
  Empty arr as second arguments means it will only run on mount, not on other
  state changes so we don't keep re-fetching data.
  */
  useEffect(() => {
    getAll()
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (idToDelete) => {
    deleteOneById(idToDelete)
      .then((deletedProduct) => {
        const filteredProducts = products.filter((product) => {
          return product._id !== idToDelete;
          // or return product._id !== deletedProduct
        });

        console.log('Deleted product:', deletedProduct);
        setProducts(filteredProducts);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-50 mx-auto text-center">
      <h3>All Products</h3>

      {products.map((product) => {
        const { _id, title, price, description } = product;
        console.log(product)

        return (
          <div key={_id} className="shadow mb-4 rounded border p-4">
            <Link to={`/products/${_id}`}>
              <h4>{title}</h4>
            </Link>
            <p>{price}</p>
            <p>{description}</p>

            <div className="mt-2">
              <button onClick={(e) => {
                  handleDelete(_id);
                }}
                className="btn btn-sm btn-outline-danger mx-1">
                Delete
              </button>

              <Link
                to={`/products/${_id}/edit`}
                className="btn btn-sm btn-outline-warning mx-1">
                Edit
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllProducts;