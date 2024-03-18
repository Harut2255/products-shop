import React, {FC} from "react";
import {Link} from "react-router-dom";

type Props = {
    product: any;
    addBasket: Function;
}

export const ProductItem: FC<Props> = ({product, addBasket}) => {
    return (
        <div className="col-4">
            <div className="product-item" key={product.id}>
                <div className="product-item-img-wrap">
                    <Link to={`/products/${product.id}`}>
                        <img src={product.imageUrl} alt={product.title} />
                    </Link>
                </div>
                <div className="product-item-info">
                    <h2><Link to={`/products/${product.id}`}>{product.title}</Link></h2>
                    <div className="product-item-price"><strong>Price: </strong> {product.price} USD</div>
                    <button className="btn btn-add-cart" onClick={() => addBasket(product)}>Add Cart</button>
                </div>
            </div>
        </div>
    );
};
