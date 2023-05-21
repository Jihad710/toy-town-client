import React from 'react';

const Gallery = () => {
    return (
        
        <div class="container mx-auto py-8 flex justify-start">
      
        <div class="grid grid-cols-3 gap-4">
          <div class="relative group">
            <img class="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105" src="https://images.unsplash.com/photo-1578652520385-c05f6f3b5de3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
            
            <div class="overlay absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             
            </div>
          </div>
          <div class="relative group">
            <img class="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105" src="https://images.unsplash.com/photo-1516055000302-a11419b8179f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
            
            <div class="overlay absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             
            </div>
          </div>
          <div class="relative group">
          <img  class="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105" src="https://images.unsplash.com/photo-1559816933-0b5b4de2bbcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="" />
            <div class="overlay absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             
            </div>
          </div>
         
        </div>
      </div>
      

    );
};

export default Gallery;