import React from 'react';
import usePageTitle from '../../hooks/usePageTitle';

const About = () => {
    usePageTitle('About Us')
    return (
        <div className="bg-white py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">About Us</h1>
          <p className="text-gray-600 leading-loose">
            Welcome to our unique online shopping website! We are passionate about providing you with an extraordinary shopping experience that you won't find anywhere else.
          </p>
          <p className="text-gray-600 leading-loose">
            At our store, we curate a wide range of exclusive products from independent artisans, designers, and small businesses. Our goal is to showcase their unique creations and bring them directly to you, our valued customers.
          </p>
          <p className="text-gray-600 leading-loose">
            We believe in supporting local and independent businesses, and we handpick each item on our website to ensure quality, originality, and craftsmanship. When you shop with us, you're not just buying a product – you're supporting talented individuals and their passion for what they do.
          </p>
          <p className="text-gray-600 leading-loose">
            Our user-friendly website is designed to make your shopping experience seamless and enjoyable. Browse through our carefully categorized collections, explore new arrivals, and find that perfect item you've been searching for.
          </p>
          <p className="text-gray-600 leading-loose">
            We strive to provide excellent customer service, so if you have any questions, concerns, or feedback, please don't hesitate to reach out to our dedicated support team. Your satisfaction is our top priority.
          </p>
          <p className="text-gray-600 leading-loose">
            Thank you for choosing our unique online shopping website. We hope you have a wonderful time exploring our products and discovering something truly special.
          </p>
        </div>
      </div>
    );
};

export default About;