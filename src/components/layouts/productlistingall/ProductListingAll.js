import React from "react";
import './productListingAll.style.css';
import ProductListingCard from "../../cards/product-listing-card/ProductListingCard";
import { BookData } from "../../../pages/homepage/util/BookData";

const ProductListingAll = () => {
    console.log(BookData);
    return(
        <section className="product-listing-all-container">
            <div className="container">
                <div className="grid-container">

                    {BookData.map((book)=>{
                        return(
                            <div className="grid-item">
                            <ProductListingCard bookData={book}/>
                        </div>
    
                        )
                    })}


                </div>
            </div>
        </section>
    )
}

export default ProductListingAll;