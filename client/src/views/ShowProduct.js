import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
  deleteOneById,
  getOneById,
} from '../services/internalApiService';

export const ShowProduct = (props) => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getOneById(id)
      .then((data) => {
        console.log(data);
        setProduct(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (product === null) {
    return null;
  }

  const handleDelete = () => {
    deleteOneById(id)
      .then((deletedProduct) => {
        navigate('/products');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // We can only safely use the data to render and destructure now since
  // we checked it's not null.
  const { title, price, description,} = product;

  return (
    <div className="w-100 mx-auto shadow mb-4 rounded border p-4">
      <h4>{title}</h4>
      <p>{price}</p>
      <p>{description}</p>
      
      <div className="mt-2">
        <button onClick={(e) => {
            handleDelete()
          }}
          className="btn btn-sm btn-outline-danger mx-1" >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ShowProduct;