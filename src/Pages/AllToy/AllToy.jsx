import React, { useEffect, useState } from 'react';
import TableRow from '../TableRow/TableRow';
import Aos from 'aos';

const AllToy = () => {

    const [toy, setToy] = useState([])
    const [loading , setLoading] = useState(true)
    const [sort, setSort] = useState('all')
    const [searchText, setSearchText] = useState("")


     useEffect(()=>{
        fetchToy (sort);
     },[sort])
     useEffect(() => {
        Aos.init({
          duration: 1000,
          once: true,
          easing: 'ease-out',
        });
        
      }, []);

     const fetchToy = async sort =>{
        try {
            setLoading(true);

  const response = await fetch(`http://localhost:5000/alltoy?sort=${sort}`);
  const data = await response.json();
      setToy(data);
      setLoading(false);
    } catch (error) {
      console.error( error);
    }
  };

  const handleSort = sortType => {
    setSort(sortType);
  };
            
        
    

    return (
        <div className="overflow-x-auto w-full">
        <div className="container mx-auto flex justify-between items-center py-2" >
          <h2 className="text-2xl font-semibold">Showing toys: ({toy.length})</h2>
  
          <div className="dropdown-left dropdown dropdown-hover">
            <label  className="text-xl text-warning"> Filter by price: </label>
            
              <button  onClick={() => handleSort('asc')} className={`btn mr-3 ${sort === 'asc' ? 'active' : ''}`}>
                Ascending
              </button>
              <button onClick={() => handleSort('desc')} className={`btn ${sort === 'desc' ? 'active' : ''}`}>
                Descending
              </button>
            
          </div>
          
        </div>
        {loading && (
          <div className="flex justify-center"><progress className="progress w-full container"></progress>
          </div>
          )
        }
        <table className="table w-full container mx-auto">
          <thead>
            <tr>
              <th>Toy</th>
              <th>Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
  
          {
            toy.map(toy => <TableRow key={toy._id} toy={toy} />)
          }
  
  
        </table>
      </div>
    );
};

export default AllToy;