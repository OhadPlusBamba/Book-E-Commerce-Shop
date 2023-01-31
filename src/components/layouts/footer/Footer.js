import React from "react";
import './footer.style.css';

const Footer = () => {
    return (
        <section className="footer-container">
            <div className="container">
                <h2>If you have any queries feel free to ask here.</h2>
                <form className="footer-form">
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input type="text" id="name" className="form-input" placeholder="Enter your name"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label" >Email:</label>
                        <input type="email" className="form-input" id="email" placeholder="Enter your E-mail"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="query" className="form-label">Query:</label>
                        <textarea className="form-input" id="query" placeholder="Type your Query" ></textarea>
                    </div>
                    <div className="form-group">
                        <a href="#" className="form-submit">Submit</a>
                    </div>
                </form>
                <p>&copy; 2023 BookWorm. A book is a gift you can open again and again</p>
            </div>
        </section>

    )
}

export default Footer;