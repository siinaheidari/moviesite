import React from 'react';
import "./footer.scss"

const Footer = () => {
    return (
        <div className={"footer"}>
            <div className={"footer-container"}>
            </div>
            <div className={"contact"}>
                <h2>Contact Me.</h2>
                <div className={"contact-img"}>
                    <a href={"https://www.instagram.com/siinaheidari"} target={"_blank"}>
                        <img src={"/img/instagram.png"} alt={""} width={"30px"}/>
                    </a>
                    <a href={"https://github.com/siinaheidari"} target={"_blank"}>
                        <img src={"/img/github.png"} alt={""} width={"60px"}/>
                    </a>
                    <a href={"https://telegram.me/siinaheidari"} target={"_blank"}>
                        <img src={"/img/telegram.png"} alt={""} width={"30px"}/>
                    </a>

                    <a href={"mailto:siinaheidari@gmail.com"} className={"img3"}>
                        <img src={"/img/gmail.png"} alt={""} width={"30px"}/>
                    </a>
                </div>
                <p>Copyright © 2022-2030 Sina Heidari. All rights reserved.</p>
            </div>
        </div>

    );
};

export default Footer;
