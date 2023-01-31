import React from "react";
import Background from "../../components/layouts/showcase/Background";
import ProductListing from "../../components/layouts/productlisting/ProductListing";
import Footer from '../../components/layouts/footer/Footer'

const HomePage = () => {
    return (
        <section>
            <Background/>
            <ProductListing/>
            <Footer/>
        </section>

    )
}

export default HomePage;