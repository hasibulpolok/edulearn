import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <p>&copy; All right reserved by Edulearn 2021-<script>document.write(new Date().getFullYear())</script></p>
        </div>
    );
};

export default Footer;