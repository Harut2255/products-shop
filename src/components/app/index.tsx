import React, { FC } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { AddProduct } from '../add';
import { Products } from '../products';
import { ProductPage } from '../product-page';
import { Orders } from '../orders';

const App: FC = () => {

    return (
        <BrowserRouter>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to={'/products'}>Products</Link>
                        </li>
                        <li>
                            <Link to={'/orders'}>Orders</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <Routes>
                <Route path='/' element={<Products/>}/>
                <Route path='/Products' element={<Products/>}/>
                <Route path="products/:id" element={<ProductPage/>}/>
                <Route path='/admin' element={<Admin/>}/>
                <Route path='/add' element={<AddProduct/>}/>
                <Route path='/orders' element={<Orders/>}/>
                <Route path='*' element={<h1>Not Found</h1>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
