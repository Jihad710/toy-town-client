
import React, { useEffect } from 'react';
import { FaRegQuestionCircle } from 'react-icons/fa';
import usePageTitle from '../../hooks/usePageTitle';
import Aos from 'aos';

const Blog = () => {
    usePageTitle('Blogs')
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
        <div data-aos='fade-up'  className='pt-3 pb-5 d-flex flex-column m-6 '>
<div>
                <div className="">

                    <h2 className='fs-3 d-flex align-items-center gap-3 my-3'><FaRegQuestionCircle></FaRegQuestionCircle> Tell us the differences between uncontrolled and controlled components.</h2>
                    <p className='fs-6'>A Controlled Component is one that takes its current value through props and notifies changes through callbacks like onChange. A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component. You could also call this a "dumb component".A Uncontrolled Component is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.
                        In another way, The difference between them is that components that their value is set/passed and have a callback are called controlled components. like react bootstrap's Image component, And traditional HTML where an input element handle their own value and can be read via refs called uncontrolled components.
                    </p>
                </div>
                <div className="">
                    <h2 className='fs-3 d-flex align-items-center gap-3 my-3'><FaRegQuestionCircle></FaRegQuestionCircle> How to validate React props using PropTypes?</h2>
                    <p className='fs-6'>To validate props using PropTypes in a React component, i need to follow these steps:
                        <ol>
                            <li>
                                Install the prop-types package by running the following command in terminal: npm install prop-types. This package is used to define the types of the props that component expects.
                            </li>
                            <li>
                                Now, validate proptypes by  PropTypes.(PropTypes name).isRequired, PropTypes can be bool, func, array, object, symbol.
                            </li>
                            <li>If a prop with an incorrect type is passed to component, a warning will be shown in the console. </li>
                        </ol>
                    </p>
                </div>
                <div className="">
                    <h2 className='fs-3 d-flex align-items-center gap-3 my-3'><FaRegQuestionCircle></FaRegQuestionCircle> Tell us the difference between nodejs and express js.</h2>
                    <p className='fs-6'>Node.js is a JavaScript runtime that allows developers to run JavaScript on the server-side. It provides a platform for building server-side applications using JavaScript.
                        Express.js is a framework built on top of Node.js that provides a set of features and tools for building web applications and APIs. It simplifies the process of building web applications by providing a routing system, middleware support, and other helpful features.
                        In short, Node.js is a JavaScript runtime, while Express.js is a framework built on top of Node.js for building web applications and APIs.</p>
                </div>
                <div className="">
                    <h2 className='fs-3 d-flex align-items-center gap-3 my-3' ><FaRegQuestionCircle></FaRegQuestionCircle> What is a custom hook, and why will you create a custom hook?</h2>
                    <p className='fs-6'>In React, a custom hook is a function that allows you to reuse logic across multiple components. Custom hooks enable you to extract common functionality from components and share it among them.
                        Custom hooks are created by using the use prefix before the name of the hook function. By convention, custom hooks are usually defined in separate files from the components that use them.</p>
                </div>

</div>
            </div>
    );
};

export default Blog;