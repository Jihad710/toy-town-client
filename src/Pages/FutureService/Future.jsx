import React from 'react';
import { Link } from 'react-router-dom';

const Future = () => {
    return (
      <section class="bg-gray-100 py-8">
  <div class="container mx-auto">
    <h2 class="text-3xl text-center mt-5 font-semibold text-gray-800 mb-4">Future Services</h2>
    <div class="flex flex-wrap -mx-4">
      <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="relative">
            <img className='w-full' src="https://www.verywellfamily.com/thmb/pcDMwKCWQHLOisqu38nuC-tUTW4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/top-cleaning-toy-sets-1900904-b4bd90b851564f8da2dcb7fe0ea20412.png" alt="" />
            {/* <img src="image1.jpg" alt="AI-Powered Virtual Assistants" class="w-full"> */}
            <div class="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out bg-gray-900 bg-opacity-50">
             <Link to= '/services'><button className='btn btn-outline btn-warning '>Book Now</button></Link>
            </div>
          </div>
          <div class="p-6">
          <h3 class="text-xl font-bold mb-2">Toy Repair</h3>
            <p class="text-gray-600">We provide professional toy repair services to ensure your toys stay in top condition.</p>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="relative">
            <img className='w-full' src="https://www.verywellfamily.com/thmb/pcDMwKCWQHLOisqu38nuC-tUTW4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/top-cleaning-toy-sets-1900904-b4bd90b851564f8da2dcb7fe0ea20412.png" alt="" />
            {/* <img src="image1.jpg" alt="AI-Powered Virtual Assistants" class="w-full"> */}
            <div class="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out bg-gray-900 bg-opacity-50">
            <Link to= '/services'><button className='btn btn-outline btn-warning '>Book Now</button></Link>
            </div>
          </div>
          <div class="p-6">
          <h3 class="text-xl font-bold mb-2">Toy Cleaning</h3>
            <p class="text-gray-600">Our toy cleaning service will keep your toys clean and germ-free, ready for playtime.</p>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="relative">
            <img className='w-full' src="https://www.verywellfamily.com/thmb/pcDMwKCWQHLOisqu38nuC-tUTW4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/top-cleaning-toy-sets-1900904-b4bd90b851564f8da2dcb7fe0ea20412.png" alt="" />
            {/* <img src="image1.jpg" alt="AI-Powered Virtual Assistants" class="w-full"> */}
            <div class="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out bg-gray-900 bg-opacity-50">
            <Link to= '/services'><button className='btn btn-outline btn-warning '>Book Now</button></Link>
            </div>
          </div>
          <div class="p-6">
          <h3 class="text-xl font-bold mb-2">Customization</h3>
            <p class="text-gray-600">We offer toy customization services to make your toys unique and personalized.</p>
          </div>
        </div>
      </div>
      
      
     
    </div>
  </div>
</section>

    
    
    
      
    );
};

export default Future;