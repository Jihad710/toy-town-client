import React from 'react';
import { Link } from 'react-router-dom';

const Features = () => {
    return (
        <section class="bg-gray-100 py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-8">Key Features</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
            <div class="bg-white shadow-md rounded-lg p-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <h3 class="text-lg font-bold mb-2">Fast Delivery</h3>
              <p class="text-gray-600">Get your orders delivered quickly and efficiently with our fast delivery service.</p>
            </div>
      
            
            <div class="bg-white shadow-md rounded-lg p-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6M18 4H6M18 20H6" />
              </svg>
              <h3 class="text-lg font-bold mb-2">Wide Range of Products</h3>
              <p class="text-gray-600">Explore our extensive collection of products across various categories and find what you need.</p>
            </div>
      
  
            <div class="bg-white shadow-md rounded-lg p-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13l-4 4m0 0l-4-4m4 4V3" />
              </svg>
              <h3 class="text-lg font-bold mb-2">Easy Returns</h3>
              <p class="text-gray-600">Not satisfied with your purchase? Return it hassle-free within 30 days for a refund or exchange.</p>
            </div>
          </div>
      
          <div class="mt-16 bg-blue-500 py-12 px-6 rounded-lg text-center">
            <h3 class="text-2xl font-bold text-white mb-4">Limited Time Offer</h3>
            <p class="text-white">Get 20% off on all products. Use code <span class="font-bold">DISCOUNT20</span> at checkout.</p>
            <Link to="alltoy"></Link>
          </div>
        </div>
      </section>
      
    );
};

export default Features;