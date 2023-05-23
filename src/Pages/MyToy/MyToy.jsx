import React, { useEffect } from 'react';
import { FaStar} from "react-icons/fa";
import { Link } from 'react-router-dom';
import usePageTitle from '../../hooks/usePageTitle';
import Aos from 'aos';

const MyToy = ({ toy ,handleDeleteMyToy}) => {
    usePageTitle('My Toy')
    const { _id,  sellerName, rating, price, name, message, imgLink, email, category, availableQuantity, applyDate } = toy
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
     
      return (
        <>
        <div data-aos='fade-up'>
        <tbody className='overflow-x-scroll mr-5 mx-auto'>

            <tr >
                

                <td >
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle m-10  w-6 md:w-32">
                                <img src={imgLink} />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold mr-10 ml-5">{name}</div>

                        </div>
                    </div>
                </td>

                <td>
                    <div>
                        <div className="font-semibold mr-5 ml-5"><p>{category}</p></div>

                    </div>
                </td>

                <td>
                    <div className="font-bold mr-6">
                        <p>{price}<span className='font-normal'> TK</span></p>
                    </div>
                </td>
                <td className={availableQuantity >= 4 ? 'text-success font-bold mr-6 ml-6' : availableQuantity <= 3 ? 'text-error font-bold' : ''}>
                    {availableQuantity} Pcs
                </td>
               
                <td>
                    <div className="">
                        <p className='flex items-center mr-4 ml-4'> {rating}<FaStar className='text-yellow-400'></FaStar></p>
                    </div>
                </td>
                <td>
                    <div className="mr-5 ml-5">
                        <p>{applyDate}</p>
                    </div>
                </td>
                <td>
                    <div className="tooltip">
                        <p>{message.slice(0, 20)}...</p>
                    </div>
                </td>
                <th>
                    <div> 
                    <Link to={`/updateToys/${_id}`}><button className='btn btn-outline btn-warning mr-5 ml-5'> Update</button></Link>
            
                    </div>

                </th>
                <th>
                <div>

                    
                <button onClick={() => handleDeleteMyToy(_id)} className="btn btn-outline btn-error">Delete</button>


                
                </div>
                </th>
            </tr>


        </tbody>
        </div>
        
        </>
          );
        };
        

export default MyToy;