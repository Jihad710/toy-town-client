import React, { useEffect } from 'react';

const pageTitle = (title) => {
        
    useEffect(()=>{

        document.title = `${title} - ToyTown`;

    },[title])
    
    

};

export default pageTitle;