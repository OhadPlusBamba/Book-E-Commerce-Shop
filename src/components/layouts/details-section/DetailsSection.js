import React , {useEffect , useState} from "react";
import './detailsSection.style.css';
import BookDetailImage from '../../../assets/books-images/book2.jpg';
import { useParams } from "react-router-dom";
import{BookData} from '../../../pages/homepage/util/BookData';

const DetailsSection = () => {
    const {id} = useParams();
    const [bookData,setBookData] = useState({});

    useEffect(()=>{
        let newData = BookData.filter((book) =>book.id === parseInt(id));
        setBookData(newData[0]);
    },[])

    return(
        <section className="detail-section-container">
            <div className="container">
                <div className="flex-container">
                    <div className="book-image-container">
                        <img src={bookData.book_url} alt="book" />
                    </div>
                    <div className="book-detail-container">
                        <h2>{bookData.book_name}</h2>
                        <p className="text-primary">{bookData.author_name}</p>
                        <p className="book-description"> {bookData.book_description}</p>
                        <p><b>Language:</b> {bookData.language}</p>
                        <p><b>Book Length:</b> {bookData.print_length}</p>
                        <h3>${bookData.price}</h3>

                        <a href="#" className="cart-button">Add To Cart</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailsSection;