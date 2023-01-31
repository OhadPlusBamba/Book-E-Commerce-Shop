import React from "react";
import './productlisting.style.css';
import ProductListingCard from "../../cards/product-listing-card/ProductListingCard";
import { BookData } from "../../../pages/homepage/util/BookData";

const ProductListing = () => {
    return (
        <div className="prodict-lising-container">
            <div className="container">
                <h2>Here are some <span className="text-primary">books</span> that you might like</h2>
                <div className="listing-container">
                    {BookData.slice(0, 5).map((book) => (
                        <ProductListingCard bookData={book} />
                    ))}
                </div>
            </div>
        </div>

    )
}

export default ProductListing;