import React from 'react';

const OurLatestNews = () => {
  return (
    <div>
      <div class="max-w-xs rounded overflow-hidden shadow-lg">
  <div class="group relative">
    <img src="https://images.unsplash.com/photo-1559940033-a887678af2f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=942&q=80" alt="" />
    <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>
    </div>
  </div>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Card Title</div>
    <p class="text-gray-700 text-base">Card description goes here.</p>
  </div>
</div>

    </div>
  );
};

export default OurLatestNews;