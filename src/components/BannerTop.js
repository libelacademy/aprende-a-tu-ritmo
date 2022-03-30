import React from "react";
import "../css/BannerTop.css";

import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { closeBanner } from "../features/banner";

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
                <p>Crea e imprime personajes en Blender<span> | <a href="https://libel.academy/impresion-3d-con-blender/">Descubre más</a></span></p>
            </div>
        </div>
    );
};

export default BannerTop;
