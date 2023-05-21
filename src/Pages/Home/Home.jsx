import React, { useEffect, useRef, useState } from 'react';

import Banner from './Banner/Banner';
import Shop from './Shop/Shop';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    
    return (
     <div>
     
      <Shop></Shop>
      <Banner></Banner>
      <Gallery></Gallery>
     </div>
    
      
    );
};

export default Home;