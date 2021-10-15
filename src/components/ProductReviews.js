import React from 'react';
import "../styles/ProductReviews.css"
import ProductCard from './ProductCard';

const ProductReviews = ({productReviews}) => {
    console.log(productReviews)
    return (
        <div className="product-review">
            {productReviews.map((item,index)=>(
                <ProductCard price={item.price} image={item.image} review={item.review} index={index} key={item.key}/>

            ))}
        </div>
    )
}

export default ProductReviews
