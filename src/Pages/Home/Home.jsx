import React, { useEffect, useRef, useState } from 'react';

import Banner from './Banner/Banner';
import Shop from './Shop/Shop';
import Gallery from '../Gallery/Gallery';
import Features from '../FutureService/Future';

import Future from '../FutureService/Future';
import OurLatestNews from './OurLatestNews/OurLatestNews';

const Home = () => {
    
    return (
     <div>
     
      <Shop></Shop>
      <Banner></Banner>
      <Gallery></Gallery>
      <Future></Future>
      <OurLatestNews></OurLatestNews>
     </div>
    
      
    );
};

export default Home;