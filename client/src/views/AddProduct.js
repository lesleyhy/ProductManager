import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { create } from '../services/internalApiService';

export const AddProduct = (props) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState(null);

  const handleAddProductSubmit = (event) => {
    event.preventDefault();

    const newProduct = {
      title: title,
      price,
      description,
    };

    create(newProduct)
      .then((data) => {
        console.log('new product:', data);
        navigate('/products');
      })
      .catch((error) => {
        console.log(error);
        //instructor:
        // `?.` allows you to safely access keys that may not exist, instead of
        // crashing the app if a key doesn't exist, it will return undefined.
        setErrors(error?.response?.data?.errors);
      });
  };

  return (
    <div className="w-50 p-4 rounded mx-auto shadow mb-5">
      <form onSubmit={(e) => handleAddProductSubmit(e)}>
        <div className="form-group">
          <label className="h6">Title</label>
          {errors?.title && (
            <span> {errors?.title?.message}</span>
          )}
          <input onChange={(event) => {
              setTitle(event.target.value)}}
            type="text" className="form-control"/>
        </div>

        <div className="form-group">
          <label className="h6">Price</label>
          {errors?.price && (
            <span> {errors?.price?.message}</span>
          )}
          <input onChange={(event) => {
              setPrice(event.target.value)}}
            type="number" className="form-control"/>
        </div>

        <div className="form-group">
          <label className="h6">Description</label>
          {errors?.description && (
            <span>
              {' '}
              {errors?.description?.message}
            </span>
          )}
          <input
            onChange={(event) => {
              setDescription(event.target.value)}}
            type="text" className="form-control"/>
        </div>
        <div className="mt-4">
          <button className="btn btn-sm btn-outline-success">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;