import React, {FC, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useAppDispatch} from "../../store";
import {useSelector} from "react-redux";
import {productsSelector} from "../../store/app-selector";
import {getProductById} from "../../store/products/products-slice";

export const ProductPage: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const product_id = params.id;

    const product = useSelector(productsSelector);

    useEffect(() => {
        dispatch(getProductById(product_id));
    }, []);

    return (
        <div className="container">
            <button className="btn" onClick={() => {
                navigate(-1);
            }}>Back
            </button>

            <div className="product-page">
                <div>
                    <img src={product.selected_product.imageUrl} alt={product.selected_product.title}
                         style={{width: "250px"}}/>
                </div>
                <div className="product-item-info">
                    <h2>{product.selected_product.title}</h2>
                    <div className="product-item-price"><strong>Price: </strong> {product.selected_product.price} USD</div>
                    <div>{product.selected_product.description}</div>
                </div>
            </div>
        </div>
    );
}