import React, { useEffect } from 'react';

const usePageTitle = (title) => {
    useEffect(()=>{
        document.title = `${title} - ToyTown`
    },[title])
    
    
};

export default usePageTitle;