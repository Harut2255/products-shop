import React, {FC} from "react";

type Props = {
    basket: any;
    removeBasket: Function;
    plus: Function;
    minus: Function;
    checkout: Function;
}

export const Basket: FC<Props> = ({basket, removeBasket, plus, minus, checkout}) => {
    const total = basket.reduce((sum: number, el: { price: number; count: number; }) => sum+el.price * el.count, 0);

    return (
        <div className="container">
            {
                basket.map((el: any) =>
                    <div className="basket-item" key={el.id}>
                        <h2 className="basket-title">{el.title}</h2>
                        <div>
                            <button className="basket-btn" onClick={() => minus(el.id)}>-</button>
                            <span className="basket-count">{el.count}</span>
                            <button className="basket-btn" onClick={() => plus(el.id)}>+</button>
                            <span className="basket-price">{el.price * el.count}</span>
                            <button className="basket-remove" onClick={() => removeBasket(el.id)}>X</button>
                        </div>
                    </div>)
            }
            <div className="basket-total">Total: {total}</div>
            <div>
                <button className="btn" style={{marginLeft: "auto"}} onClick={checkout}>Checkout</button>
            </div>
        </div>
    )
};