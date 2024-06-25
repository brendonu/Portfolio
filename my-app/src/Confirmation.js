import React from 'react';
import { Link } from 'react-router-dom';

function Confirmation() {
    return (
        <div className="App2">
            <h2>Thank you for contacting me!</h2>
            <p>Your message has been sent successfully.</p>
            <Link to="/">Go back to Home</Link>
            <div>
            <img src="mail.webp" alt="Mail" />                
            </div>
        </div>
    );
}

export default Confirmation;