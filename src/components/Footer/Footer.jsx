import React from "react";

function Footer(){
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>Made with 💙 by <a href="https://github.com/connectnitesh" target="_blank">Nitesh Rawat</a> | Copyright ⓒ {year}</p>
        </footer>
    );
}

export default Footer;