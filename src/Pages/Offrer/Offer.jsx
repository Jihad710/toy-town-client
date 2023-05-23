import React from 'react';

const Offer = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description of Product 1',
      price: '$9.99',
      imageUrl: '/images/product1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: '$19.99',
      imageUrl: '/images/product2.jpg',
    },
    // Add more product objects as needed
  ];

  return (
    <div className="grid grid-cols-3 gap-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative group rounded-lg overflow-hidden bg-white shadow-md"
        >
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-medium">{product.name}</h3>
            <p className="text-gray-500">{product.description}</p>
            <p className="mt-2 text-xl font-bold">{product.price}</p>
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
            <button className="px-4 py-2 text-white bg-blue-500 rounded-lg">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Offer;
