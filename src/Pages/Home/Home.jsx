import React, { useEffect, useRef, useState } from 'react';

import Banner from './Banner/Banner';
import Shop from './Shop/Shop';
import Gallery from '../Gallery/Gallery';
import Features from '../Features/Features';

const Home = () => {
    
    return (
     <div>
     
      <Shop></Shop>
      <Banner></Banner>
      <Gallery></Gallery>
      <Features></Features>
     </div>
    
      
    );
};

export default Home;