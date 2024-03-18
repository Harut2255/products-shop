import React, {FC, useEffect} from "react";
import {useSelector} from "react-redux";
import {ordersSelector} from "../../store/app-selector";
import {useAppDispatch} from "../../store";
import {getOrders} from "../../store/orders/orders-slice";
import {OrderItem} from "../order-item";

export const Orders: FC = () => {
    const dispatch = useAppDispatch();
    const orders = useSelector(ordersSelector);

    useEffect(() => {
        dispatch(getOrders());
    }, []);

    return (
        <div className="container">
            {
                orders.orders.map((el: { id: React.Key | null | undefined; }) => <OrderItem key={el.id} order={el} />)
            }
        </div>
    );
};
