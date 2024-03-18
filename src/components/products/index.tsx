import React, {FC, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getProducts} from '../../store/products/products-slice';
import {productsSelector} from '../../store/app-selector';
import {useAppDispatch} from '../../store';
import {ProductList} from "../product-list";
import {Basket} from "../Basket";
import {Filter} from "../Filter";

export const Products: FC = () => {
    const [basket, setBasket] = useState([]);
    const [basketShow, setBasketShow] = useState(false);
    const [count, setCount] = useState(0);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const dispatch = useAppDispatch();
    const products = useSelector(productsSelector);

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    const addOrder = () => {
        let currentDate = new Date().toJSON().slice(0, 10);

        return fetch('http://localhost:3000/orders', {
            method: "post", headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }, body: JSON.stringify({
                date: `${currentDate}`,
                items: basket
            })
        });
    }

    const checkout = () => {
        addOrder().then(r => {
            setBasket([]);
            window.location.assign("/orders");
        });
    }

    const handlerBasket = () => {
        setBasketShow(!basketShow)
    }

    const addBasket = (item: any) => {
        const index: number = basket.findIndex(el => el.id === item.id);
        if (index === -1){
            let newBasket = {
                ...item,
                count: 1,
            };
            setBasket([...basket, newBasket]);
        } else {
            let newBasket = basket.map((el, i) => {
                if (i === index) {
                    el.count++;
                }
                return el;
            });
            setBasket(newBasket);
        }
        setCount(count+1);
    }

    const removeBasket = (id: any) => {
        const itemCount: any = basket.find(item => item.id === id).count;
        setCount(count - itemCount);
        const newBasket = basket.filter(el => el.id !== id);
        setBasket(newBasket);
    }

    const plus = (id: any) => {
        let newOrders: any = basket.map(el => {
            if (el.id === id) {
                el.count++;
            }
            return el;
        });
        setBasket(newOrders);
        setCount(count + 1);
    };

    const minus = (id: any) => {
        let newBasket :any = basket.map(el => {
            if (el.id === id) {
                if(el.count > 1) {
                    el.count = el.count - 1;
                    setCount(count-1)
                } else {
                    el.count = 1;
                }
            }
            return el;
        });
        setBasket(newBasket);
    };

    const filterFunction = (text: string) => {
        let newProducts = products.products.filter((item) => item.title.toString().toLowerCase().includes(text.toString().toLowerCase()));
        setFilteredProducts(newProducts);
    };

    const sortByFunc = () => {

    }

  return (
      <div className="container">
          {basketShow ?
              <Basket basket={basket} removeBasket={removeBasket} plus={plus} minus={minus} checkout={checkout} />
              :
              <>
                  <Link to={'/add'} className="btn" style={{maxWidth: "200px", marginLeft: "auto"}}>Add Product</Link>

                  <Filter filterFunction={filterFunction} sortByFunc={sortByFunc} />

                  <ProductList products={filteredProducts.length > 0 ? {products: filteredProducts} : products}
                               addBasket={addBasket} />
              </>
          }
          <button className="cart" onClick={handlerBasket}>{count}</button>
      </div>
  );
};
