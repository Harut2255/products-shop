import React, {FC} from "react";

type Props = {
    order: any;
}

export const OrderItem: FC<Props> = ({order}) => {
    return (
        <div className="order-item" key={order.id}>
            <div style={{marginBottom: "16px"}}><strong>id: </strong>{order.id}</div>
            <div style={{marginBottom: "16px"}}><strong>date: </strong>{order.date}</div>
            {
                order.items.map((item: any) => {
                    return (
                        <div className="order-info" key={item.id}>
                            <div className="order-img-wrap">
                                <img src={item.imageUrl} alt={item.title}/>
                            </div>
                            <div className="basket-title">{item.title}</div>
                            <div className="basket-title">count: {item.count}</div>
                            <div className="basket-title">{item.price} - USD</div>
                        </div>
                    )
                })
            }
        </div>
    );
};
