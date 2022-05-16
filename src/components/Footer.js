import React from "react";
import "../css/Footer.css";

import logo from "../images/logo.png";
import facebook from "../images/social_networks/005-facebook.png";
import twitch from "../images/social_networks/020-twitch.png";
import instagram from "../images/social_networks/008-instagram.png";
import whatsapp from "../images/social_networks/023-whatsapp.png";
import linkedin from "../images/social_networks/009-linkedin.png";
import discord from "../images/social_networks/Trazado 57.png";
import youtube from "../images/social_networks/025-youtube.png";
import telegram from "../images/social_networks/018-telegram.png";
import DegradeButton from "./buttons/DegradeButton";

const Footer = () => {
    return (
        <div className="Footer">
            <div className="footer-content">
                <div className="footer-content-container container">
                    <div className="footer-shortcuts">
                        <ul className="footer-list">
                            <li>
                                <a href="https://cursos.libel.academy/collections?category=courses">
                                    Cursos
                                </a>
                            </li>
                            <li>
                                <a href="https://libel.academy/master/">
                                    Masters
                                </a>
                            </li>
                            <li>
                                <a href="https://cursos.libel.academy/bundles/membresia-plus-escuela-zbrush">
                                    Escuela Zbrush
                                </a>
                            </li>
                            <li>
                                <a href="https://libel.academy/escuela-domina-blender/">
                                    Escuela Blender
                                </a>
                            </li>
                            <li>
                                <a href="https://cursos.libel.academy/collections?q=Rigging">
                                    Escuela Rigging
                                </a>
                            </li>
                            <li>
                                <a href="https://cursos.libel.academy/collections?q=concep">
                                    Escuela Ilustración
                                </a>
                            </li>
                            {/* <li>
                                <a href="https://libel.academy/zbrush/">
                                    Licencias
                                </a>
                            </li>
                            <Link
                                to="results"
                                hashSpy={true}
                                spy={true}
                                smooth={true}
                                duration={700}
                                offset={-80}
                                className={"footer-list-li"}
                            >
                                Resultados
                            </Link> */}
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <img
                            src={logo}
                            alt="Libel Academy"
                            className="footer-logo"
                        />
                        <h4>CONTACTO</h4>
                        <DegradeButton
                            name="CREAR CUENTA"
                            width={200}
                            url={"https://cursos.libel.academy/users/sign_up"}
                        />
                        <p className="help">
                            <a href="/#">Trabaja con nosotros</a>
                            <br />o <a href="/#">solicita ayuda</a>
                        </p>
                        <div className="social-networks">
                            <a
                                href="https://www.facebook.com/libelacademy"
                                target={"_blank"}
                                rel="noreferrer"
                            >
                                <img src={facebook} alt="facebook" />
                            </a>
                            <a href="/#" target={"_blank"} rel="noreferrer">
                                <img src={twitch} alt="twitch" />
                            </a>
                            <a
                                href="https://www.instagram.com/libelacademy/"
                                target={"_blank"}
                                rel="noreferrer"
                            >
                                <img src={instagram} alt="instagram" />
                            </a>
                            <a
                                href="https://wa.link/1wru1w"
                                target={"_blank"}
                                rel="noreferrer"
                            >
                                <img src={whatsapp} alt="whatsapp" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/libelstudios/?originalSubdomain=co"
                                target={"_blank"}
                                rel="noreferrer"
                            >
                                <img src={linkedin} alt="linkedin" />
                            </a>
                            <a
                                href="https://discord.gg/r6UHQEtGrQ"
                                target={"_blank"}
                                rel="noreferrer"
                            >
                                <img src={discord} alt="discord" />
                            </a>
                            <a
                                href="https://www.youtube.com/channel/UCUgle_FMVoBU75h0Vx8L7xA"
                                target={"_blank"}
                                rel="noreferrer"
                            >
                                <img src={youtube} alt="youtube" />
                            </a>
                            <a
                                href="https://bit.ly/3gNaaTG "
                                target={"_blank"}
                                rel="noreferrer"
                            >
                                <img src={telegram} alt="telegram" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="footer-container container">
                    <a
                        href="https://libel.academy/libel/politicas-de-privacidad/"
                        target={"_blank"}
                        rel="noreferrer"
                        className="privacy-policy"
                    >
                        Política de Privacidad
                    </a>
                    <a
                        href="https://libel.academy/libel/terminos-y-condiciones/"
                        target={"_blank"}
                        rel="noreferrer"
                        className="terms"
                    >
                        Términos y Condiciones
                    </a>
                    <p className="copyright">&copy; Copyright 2022</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
