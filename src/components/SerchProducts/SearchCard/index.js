import React from 'react';
import {addToBasket} from "../../../redux/actions/actionCreators";
import {useDispatch} from "react-redux";

const SearchCard = ({el}) => {
    const dispatch = useDispatch()
    const {title, image, volume, price} = el
    return (
        <div className="search__card">
            <img className="search__card__img"
                 src={image} alt=""/>
            <div className='search__card__item'>
                <h2 className="search__card__item__title">{title}</h2>
                <h3 className="search__card__item__volume">{volume} мл</h3>
                <div className="search__card__item__elem">
                    <h3 className="search__card__item__elem__price">{price} сом</h3>
                    <button className="search__card__item__elem__btn"
                            onClick={() => dispatch(addToBasket(el))}
                    >
                        Добавить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchCard;