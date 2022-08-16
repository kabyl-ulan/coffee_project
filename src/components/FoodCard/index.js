import React from 'react';
import {addToBasket} from "../../redux/actions/actionCreators";
import {useDispatch} from "react-redux";

const FoodCard = ({el}) => {
    const {title, image, price, volume} = el
    const dispatch = useDispatch()
    return (
        <>
            <div className="food-product">
                <img src={image}
                     className="food-product__image"
                     alt=""/>
                <div className="food-product__item">
                    <h3 className="food-product__item__title">{title}</h3>
                    <h3 className="food-product__item__volume">{volume} мл</h3>
                    <div className="food-product__item__elem">
                        <h3 className="food-product__item__elem__price">{price} сом</h3>
                        <button className="food-product__item__elem__btn"
                                onClick={() => dispatch(addToBasket(el))}
                        >
                            Добавить
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FoodCard;