import React from "react";
import "../css/Results.css";

import line from "../images/underline.png";
import Membership from "./cards/Membership";
import memberships from "../utils/memberships";

const Memberships = () => {
    
    return (
        <div className="Results" id="masters">
            <div className="results-container container">
                <h1>
                    <span>
                        <img
                            src={line}
                            alt="underline"
                            className="results-line"
                        />
                        MEMBRESÍAS
                    </span>
                </h1>
                <h2 style={{color: "white", marginTop: -40, marginBottom: 40}}>Lleva más, paga menos</h2>
                <div className="results-content">
                    {memberships
                        .map((result, index) => (
                            <Membership key={index} membership={result} />
                        ))}
                </div>
                <a className="button" href="https://cursos.libel.academy/collections?category=pack" target={"_blank"} rel="noreferrer">
                    VER PACKS
                </a>
            </div>
        </div>
    );
};

export default Memberships;
