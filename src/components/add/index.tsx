import React, {FC, useState} from 'react';

export const AddProduct: FC = () => {
    const [formState, setFormState] = useState({});

    const addProduct = () => {
        return fetch('http://localhost:3000/products', {
            method: "post", headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }, body: JSON.stringify(formState)
        });
    };

    const add = (e: any) => {
        e.preventDefault();
        addProduct().then(r => {
            window.location.assign("/products");
        });
    }

    const setData = (value_map: object) => {
        setFormState({...formState, ...value_map});
    }

    return (
        <div className="container">
            <form id="form">
                <div>
                    <input name="title" type="text" placeholder="title" className="input"
                           onChange={(e) => setData({'title': e.target.value})}/>
                </div>
                <div>
                    <textarea name="description" placeholder="description" className="input" style={{height: "250px", resize: "none"}}
                              onChange={(e) => setData({'description': e.target.value})}></textarea>
                </div>
                <div style={{width: "250px"}}>
                    <input name="count" type="number" placeholder="count" className="input"
                           onChange={(e) => setData({'count': e.target.value})}/>
                </div>
                <div style={{width: "250px"}}>
                    <input name="price" type="text" placeholder="price" className="input"
                           onChange={(e) => setData({'price': e.target.value})}/>
                </div>
                <div>
                <input name="imageUrl" type="text" placeholder="imageUrl" className="input"
                           onChange={(e) => setData({'imageUrl': e.target.value})}/>
                </div>
                <div>
                    <button className="btn" style={{marginLeft: "auto"}} onClick={add}>Add Product</button>
                </div>
            </form>
        </div>
    );
};