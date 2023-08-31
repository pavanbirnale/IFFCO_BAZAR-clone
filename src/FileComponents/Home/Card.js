import React, { useState } from 'react'
import './Card.css'
import Data from '../../Data'
const Card = ({ curEle, handleClick }) => {

    const { id, imgsrc, Title, name, Discount_price, Price } = curEle;
    return (
        <>
            <div className='card_single' key={id}>
                <img src={imgsrc} alt="My image" className='card_img' />
                <div className='card_info'>
                    <span className='card_category'>{Title}</span>
                    <h3 className='card_name'>{name}</h3>
                    <span className='price'> ₹ {Discount_price} </span> <span className='price-2'> ₹ {Price}</span>
                    <br />
                    <a  target="_blank">
                        <button type="button" className="btn btn-outline-success btn-sml btn-block " onClick={() => { handleClick(curEle) }}> Add To Cart</button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Card
