import React from 'react';

const Gallery = () => {
    return (
        <div class="container mx-auto py-8 flex justify-start">
  <h2 class="text-2xl font-bold mb-4">Photo Gallery</h2>
  <div class="grid grid-cols-3 gap-4">
    <div class="relative">
        <img className='w-full h-full object-cover' src="" alt="" />
   
      <div class="overlay absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <a href="#" class="text-white font-bold text-lg">View</a>
      </div>
    </div>
    <div class="relative">
        <img  class="w-full h-full object-cover" src="" alt="" />
      
      <div class="overlay absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <a href="#" class="text-white font-bold text-lg">View</a>
      </div>
    </div>
    <div class="relative">
        <img class="w-full h-full object-cover" src="" alt="" />
     
      <div class="overlay absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <a href="#" class="text-white font-bold text-lg">View</a>
      </div>
    </div>
   
  </div>
</div>

    );
};

export default Gallery;