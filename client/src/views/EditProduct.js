import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
  getOneById,
  updateOneById,
} from '../services/internalApiService';

export const EditProduct = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    getOneById(id)
      .then((data) => {
        setTitle(data.title);
        setPrice(data.price);
        setDescription(data.description);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleEditSubmit = (event) => {
    event.preventDefault();

    const editProduct = {
      title:title,
      price,
      description,
    };

    updateOneById(id, editProduct)
      .then((updatedProduct) => {
        console.log('updatedProduct:', updatedProduct);
        navigate(`/products/${id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-50 p-4 rounded mx-auto shadow">
      <form onSubmit={(e) => handleEditSubmit(e)}>
        <div className="form-group">
          <label className="h6">Title</label>
          <input onChange={(event) => {
              setTitle(event.target.value);
            }}
            type="text" className="form-control" value={title} />
        </div>

        <div className="form-group">
          <label className="h6">Price</label>
          <input onChange={(event) => {
              setPrice(event.target.value);
            }}
            type="number" className="form-control" value={price} />
        </div>

        <div className="form-group">
          <label className="h6">Description</label>
          <input
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            type="text" className="form-control" value={description} />
        </div>
        
        <button className="btn btn-sm btn-outline-success">Submit</button>
      </form>
    </div>
  );
};

export default EditProduct;