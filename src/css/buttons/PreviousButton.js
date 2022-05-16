import React from "react";
import "../../css/buttons/NavButton.css";
import { IoChevronBack } from "react-icons/io5";

const PreviousButton = ({ onClick, disable }) => {
    return (
        <div className="NavButton">
            <IoChevronBack />
        </div>
    );
};

export default PreviousButton;
