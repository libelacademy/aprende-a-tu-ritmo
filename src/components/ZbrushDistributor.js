import React from "react";
import "../css/ZbrushDistributor.css";
import Tags from "./buttons/Tags";

import zbrush from "../images/logo_zbrush.png";
import decration from "../images/decorations/03.png"

const ZbrushDistributor = () => {
    return (
        <section className="ZbrushDistributor">
            <div className="distributor-container container padding">
                <div className="distributor-text">
                    <p>
                        Somos{" "}
                        <b>
                            distribuidores
                            <br />
                            autorizados
                        </b>{" "}
                        de
                    </p>
                </div>
                <div className="logo-zbrush">
                    <img src={zbrush} alt="Logo ZBRUSH" />
                </div>
                <div className="get-now">
                    <Tags
                        tag={"obtener ahora"}
                        url={"https://libel.academy/zbrush/ "}
                        width={210}
                    />
                </div>
                <img src={decration} alt="ZBrush Distributor" className="distributor-decoration"/>
            </div>
        </section>
    );
};

export default ZbrushDistributor;
