import React, { useEffect, useState } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Shop = () => {
  const [categories, setCategories] = useState([]);
  const [toys, setToys] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5000/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleClick = (category) => {
    fetch(`http://localhost:5000/toycategory?category=${category}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  };

  const handleCategoryClick = (index) => {
    setActiveCategory(index);
  };

  return (
    <Tabs forceRenderTabPanel defaultIndex={1}>
      <TabList>
        {categories.map((category, index) => (
          <Tab key={category} onClick={() => handleClick(category)}>
            {category}
          </Tab>
        ))}
      </TabList>
      {toys.map((toy) => (
        <TabPanel key={toy._id} hidden={toy._id !== activeCategory}>
          <Tabs forceRenderTabPanel>
            <TabList>
              {toy.map((item) => (
                <Tab key={item.name}>{item.name}</Tab>
              ))}
            </TabList>
            {toy.map((item) => (
              <TabPanel key={item.name}>
                <p>{item.price}</p>
                <img src={item.imgLink} alt={item.name} />
              </TabPanel>
            ))}
          </Tabs>
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default Shop;
