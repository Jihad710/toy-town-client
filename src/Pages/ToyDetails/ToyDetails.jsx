import React, { useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import usePageTitle from '../../hooks/usePageTitle';
import Aos from 'aos';

const ToyDetails = () => {
  usePageTitle('Toy Details')
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  useEffect(() => {
    Aos.refresh();
  });
    
    const toy = useLoaderData()
    const navigate = useNavigate();

    const {sellerName,rating,price,name,message,imgLink,email,availableQuantity} =toy

    console.log(toy)
    const handlePreviousPage = () =>{
        navigate(-1)
    }
    return (
      <div data-aos='fade-up' className="hero min-h-screen p-6 m-6">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={imgLink} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-4xl font-bold">{name}</h1>
          <p className="py-6">{message}</p>
          <div className=" flex gap-6 my-2">
              <p>Seller Name: <span className='ms-2'>{sellerName}</span></p>
              <p>Seller email: <span className='ms-2'>{email}</span></p>
          </div>
          <div className=" flex gap-6 my-2">
            
              <p className='space-x-3'><span>Price:</span><span>{price} Tk</span></p>
              <p className='space-x-3'><span>Available Quantity:</span><span>{availableQuantity}Pcs</span></p>
              <p className='space-x-3'><span>Rating: </span>{rating}<span></span></p> 
          </div>
          
          <button onClick={handlePreviousPage} className="btn btn-outline btn-warning mt-4">Go back</button>
        </div>
      </div>
    </div>
    );
};

export default ToyDetails;
