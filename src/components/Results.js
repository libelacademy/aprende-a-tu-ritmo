import React from "react";
import "../css/Results.css";
import Result from "./cards/Result";

import results from "../utils/results";
import line from "../images/underline.png";

const Results = () => {
    
    return (
        <div className="Results" id="masters">
            <div className="results-container container">
                <h1>
                Aplica hasta el{" "}
                    <span>
                        <img
                            src={line}
                            alt="underline"
                            className="results-line"
                        />
                        90% Dto
                    </span>
                </h1>
                <div className="results-content">
                    {results
                        .map((result, index) => (
                            <Result key={index} result={result} />
                        ))}
                </div>
                <a HREF="https://cursos.libel.academy/collections?category=courses" target={"_blank"} rel="noreferrer" className="button">
                    VER MÁS CURSOS
                </a>
            </div>
        </div>
    );
};

export default Results;
