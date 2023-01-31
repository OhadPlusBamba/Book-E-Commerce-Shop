import React from "react";
import './background.style.css'
import Nevbar from "../navbar/Navbar";
import SearchInputForm from "../../forms/searchInputForm/SearchInputForm";

const Background = () => {
    return(
        <section className="background-container">

             <Nevbar darkTheme ={false}/>   

            <div className="overlay"></div>
            <div className="background-content">
                <h1>Best <span className="text-primary">Books</span> Available</h1>
                <p>Buy quality books at cheaper price</p>
                <SearchInputForm darkTheme={true}/>

            </div>
        </section>
    )

}

export default Background;