import React, {FC} from "react";
import { ProductItem } from '../product-item';

type Props = {
    products: any;
    addBasket: Function;
}

export const ProductList: FC<Props> = ({products, addBasket}) => {
    return (
        <div className="row">
            {
                products.products.map((el: any) => <ProductItem key={el.id} product={el} addBasket={addBasket} />)
            }
        </div>
    );
};