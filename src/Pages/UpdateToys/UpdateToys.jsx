import Aos from 'aos';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css';
import usePageTitle from '../../hooks/usePageTitle';

const UpdateToys = () => {
  usePageTitle('Updated Toys')

    const { register, handleSubmit, formState: { errors },  } = useForm();
    const toy = useLoaderData()
    const navigate = useNavigate();


    const { _id, price, name, message,  availableQuantity} = toy

    console.log(toy)

      const onSubmit = (data) => {
        console.log(data);
        fetch(`http://localhost:5000/updateToys/${_id}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then((res) => {})
          .then((data) => {
            navigate(-1);
          });
      };


 

    return (
        <div className="p-6 w-1/2 mx-auto my-10">
            <h2 className='text-3xl font-bold mt-5 mb-2 text-warning text-center'>Update Toy Details</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-base-100-100 p-8 rounded-lg">
        <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              defaultValue={name}
              placeholder="Name"
              type="text"
              id="name"
              {...register('name', { required: true })}
              className="mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.name && <p className="text-red-500">Name is required</p>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="price" className="text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              defaultValue={price}
              placeholder="Toy Price"
              type="text"
              id="price"
              {...register('price', { required: true })}
              className="mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.price && <p className="text-red-500">Price is required</p>}
          </div>
      
          <div className="flex flex-col">
            <label htmlFor="availableQuantity" className="text-sm font-medium text-gray-700">
              Available Quantity
            </label>
            <input
              defaultValue={availableQuantity}
              placeholder="Available Quantity"
              type="text"
              id="availableQuantity"
              {...register('availableQuantity', { required: true })}
              className="mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.availableQuantity && <p className="text-red-500">Available quantity is required</p>}
          </div>
      
          
      
          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              defaultValue={message}
              id="message"
              {...register('message', { required: true })}
              className="mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows={4}
              placeholder="Enter your message..."
            />
            {errors.message && <p className="text-red-500">Description is required</p>}
          </div>
      
          <div className="text-center">
            <button type="submit" className="btn btn-outline btn-warning">
              Submit
            </button>
          </div>
        </form>
      </div>
      
      
      
      
    );
};

export default UpdateToys;