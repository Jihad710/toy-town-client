
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

                    <h2 className='fs-3 d-flex align-items-center gap-3 my-3'><FaRegQuestionCircle></FaRegQuestionCircle> What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <p className='fs-6'>An access token is a credential that is issued by an authentication server to a client application after successful authentication. It represents the client's authorization to access specific resources or perform certain actions on behalf of the authenticated user. Access tokens are usually short-lived and have an expiration time associated with them. They are commonly used in API requests to authenticate the client and provide access to protected resources.A refresh token is a long-lived credential that is also issued by the authentication server alongside the access token. The purpose of a refresh token is to obtain a new access token when the current one expires. Unlike access tokens, refresh tokens are typically not transmitted with each API request but are kept securely on the client-side. The client can use the refresh token to request a new access token without requiring the user to re-authenticate.The client authenticates with the server using credentials (e.g., username and password) or other authentication methods.Upon successful authentication, the server generates an access token and a refresh token.The server sends the access token back to the client, which includes it in subsequent API requests as an authorization header or query parameter.
                    </p>
                </div>
                <div className="">

                    <h2 className='fs-3 d-flex align-items-center gap-3 my-3'><FaRegQuestionCircle></FaRegQuestionCircle> Compare SQL and NoSQL databases?</h2>
                    <p className='fs-6'>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                    </p>
                </div>
                
                <div className="">
                    <h2 className='fs-3 d-flex align-items-center gap-3 my-3'><FaRegQuestionCircle></FaRegQuestionCircle> Tell us the difference between nodejs and express js.</h2>
                    <p className='fs-6'>Node.js is a JavaScript runtime that allows developers to run JavaScript on the server-side. It provides a platform for building server-side applications using JavaScript.
                        Express.js is a framework built on top of Node.js that provides a set of features and tools for building web applications and APIs. It simplifies the process of building web applications by providing a routing system, middleware support, and other helpful features.
                        In short, Node.js is a JavaScript runtime, while Express.js is a framework built on top of Node.js for building web applications and APIs.</p>
                </div>
                <div className="">
                    <h2 className='fs-3 d-flex align-items-center gap-3 my-3' ><FaRegQuestionCircle></FaRegQuestionCircle> What is express js? What is Nest JS?</h2>
                    <p className='fs-6'>NestJS has a more structured and organized documentation, while Express's documentation is more flexible and open-ended. In conclusion, NestJS and Express are both powerful and popular frameworks that can be used to build a wide range of web applications and APIs</p>
                </div>
                <div className="">
                    <h2 className='fs-3 d-flex align-items-center gap-3 my-3' ><FaRegQuestionCircle></FaRegQuestionCircle> What is MongoDB aggregate and how does it work? </h2>
                    <p className='fs-6'>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
                </div>

</div>
            </div>
    );
};

export default Blog;