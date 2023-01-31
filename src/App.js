import React from "react";
import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/homepage/HomePage";
import BooksPage from "./pages/bookpage/BookPage";
import BookDetailsPage from "./pages/bookdetailpage/BookDetails";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/books" element={<BooksPage />} />
                
                {/* dyanmic route */}
                <Route path="book-details/:id" element = {<BookDetailsPage/>}/> 
            </Routes>
        </div>
    )
}

export default App;