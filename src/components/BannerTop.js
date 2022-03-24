import React from "react";
import "../css/BannerTop.css";

import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { closeBanner } from "../features/banner";

import libelIcon from "../images/logo_dot.png"

const BannerTop = () => {

    const dispatch = useDispatch();
    const banner = useSelector(state => state.banner.value.banner);

    const menu = useSelector((state) => state.sideMenu.value.menu);

    if (menu) {
        dispatch(closeBanner());
    }

    return (
        <div
            className="BannerTop"
            style={
                banner
                    ? { display: "flex", visibility: "visible", opacity: 1 }
                    : { display: "none", visibility: "hidden", opacity: 0 }
            }
        >
            <IoClose
                className="close-icon"
                onClick={() => {
                    dispatch(closeBanner());
                }}
            />
            <div className="banner-container container">
                <div className="banner-information">
                    <img src={libelIcon} alt="Libel Academy"/>
                    <h1>Aprende Blender en 15 días</h1>
                    <p>"No necesitas conocimientos previos"</p>
                </div>
                <a
                    href="https://libel.academy/curso-blender"
                    target={"_blank"}
                    rel="noreferrer"
                >
                    ÚNETE AHORA
                </a>
            </div>
        </div>
    );
};

export default BannerTop;
