import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Shop = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [toys, setToys] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:5000/categories')
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        AOS.init({ duration: 1000 });
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
        setLoading(false);
      });
  }, []);
  
  useEffect(() => {
    setLoading(true);
  
    if (categories.length > 0) {
      
      fetch(`http://localhost:5000/toybycategory?category=${categories[activeCategory]}`)
        .then((res) => res.json())
        .then((data) => {
          setToys(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching toys:', error);
          setLoading(false);
        });
    }
  }, [categories, activeCategory]);
  
  const handleCategoryClick = (categoryIndex) => {
    setActiveCategory(categoryIndex);
  };
  

  return (
    <>
  
      <div className="flex justify-center flex-col md:flex-row ">
  <div data-aos="fade-up" className="text-center ">
    <Tabs forceRenderTabPanel defaultIndex={1}>
      <TabList className="flex bg-gray-200 rounded-md py-2 px-4 space-x-2">
        {categories.map((category, index) => (
          <Tab
            key={category}
            onClick={() => handleCategoryClick(index)}
            className="px-4 py-2 cursor-pointer hover:bg-gray-300 transition-colors duration-300"
          >
            {category}
          </Tab>
        ))}
      </TabList>
      {toys.map((toy) => (
        <TabPanel
          key={toy.name}
          hidden={toys.indexOf(toy) !== activeCategory}
          className="mt-4 mb-3"
        >
          <Tabs forceRenderTabPanel>
            <TabList className="flex">
              {toys.map((item) => (
                <Tab
                  key={item._id}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200 transition-colors duration-300"
                >
                  {item.name}
                </Tab>
              ))}
            </TabList>
            {toys.map((item) => (
              <TabPanel key={item._id}>
                <div className="card w-96 bg-white shadow-xl mx-auto">
                  <figure>
                    <img
                      src={item.imgLink}
                      alt=""
                      className="h-48 w-full object-cover md:h-64 lg:h-72"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-xl font-bold mb-2">{item.name}</h2>
                    <div className="flex justify-between">
                      <p>Price: {item.price}</p>
                      <p className="text-right">Rating: {item.rating}</p>
                    </div>
                    <div className="card-actions justify-center">
                      <Link to={`/alltoy/${item._id}`} className="btn btn-outline btn-warning mt-3" type="button">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </TabPanel>
      ))}
    </Tabs>
  </div>
</div>

    </>
  );
};

export default Shop;
