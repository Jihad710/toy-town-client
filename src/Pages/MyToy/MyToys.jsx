import React, { useContext, useEffect, useState } from 'react';
import MyToy from './MyToy';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const MyToys = () => {


    const {user,loading, setLoading } = useContext(AuthContext)
    const [toy, setToy] = useState([])

    const URL = `http://localhost:5000/mytoy`
    
    useEffect(()=>{
        setLoading(true)
        fetch(URL,{
            method:"GET"
        })
        .then(res=>res.json())
        .then(data=>{
            setToy(data)
           
        })
        setLoading(false)
    },[URL])
    console.log(toy)
    
    const handleDeleteMyToy = id =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/allToys/${id}`,{
                method: "DELETE"
              })
              .then(res=>res.json())
              .then(data=>{
                console.log(data)
                if(data.deletedCount>0){
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                    const remainingToys = toy.filter(toy=> toy._id !== id)
                    setToy(remainingToys);
                }
              })

                
            }
          }) 
    }

    console.log((toy))


    return (
        <div className=''>
            <h2 className='  '>added Toys:({toy.length})</h2>
            <table className="o">
            <thead>

            </thead>

            {
                toy.map(toy=><MyToy key={toy._id} toy={toy} handleDelete={handleDeleteMyToy}></MyToy>)

}   

        </table>

        
        </div>
    );
};

export default MyToys;