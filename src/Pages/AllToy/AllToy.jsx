import React, { useEffect, useState } from 'react';
import TableRow from '../TableRow/TableRow';
import Aos from 'aos';
import { toast } from 'react-hot-toast';
import usePageTitle from '../../hooks/usePageTitle';

const AllToy = () => {
usePageTitle('All Toys')
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

      

      useEffect(() => {
        Aos.refresh();
      });

      
      const fetchToy = async sort => {
        try {
          setLoading(true);
    
          const response = await fetch(`http://localhost:5000/alltoy?sort=${sort}`);
          const data = await response.json();
          setToy(data);
          setLoading(false);
          if (sort !== "all") {
            toast.success(`sort by ${sort}`)
          }
        } catch (error) {
          console.error('Error fetching toys:', error);
        }
      };

      const handleSort = sortType => {
        setSort(sortType);
      };
      const handleSearch = () => {
        fetch(`http://localhost:5000/getSearchByText/${searchText}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setToy(data);
          });
      };
            
        
    

    return (
        <div data-aos="fade-up" className="overflow-x-auto w-full">
      <div className="container mx-auto flex justify-between items-center py-2" >
        <h2 className="text-2xl font-semibold">Showing toys: ({toy.length})</h2>
        <div className="">
          <div className="form-control">
            <div className="input-group">

             
      
                <input
                  onChange={(e) => setSearchText(e.target.value)}
                  type="text"
                  placeholder="Search…"
                  className="input input-bordered"
                />
                <button className='btn btn-square' onClick={handleSearch}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></button>
            
          </div>
        </div>
      </div>

      <div className="dropdown-left dropdown dropdown-hover">
        <label tabIndex={0} className="btn btn-sm btn-outline btn-warning"> Filter by price: </label>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
  <li>
    <button onClick={() => handleSort('asc')} className={`btn btn-sm btn-outline btn-warning mb-3 ${sort === 'asc' ? 'active' : ''}`}>
      Ascending
    </button>
  </li>
  <li>
    <button onClick={() => handleSort('desc')} className={`btn btn-sm btn-outline btn-warning mb-3 ${sort === 'desc' ? 'active' : ''}`}>
      Descending
    </button>
  </li>
</ul>

      </div>

    </div>
      {
    loading && (
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
    </div >
    );
};

export default AllToy;