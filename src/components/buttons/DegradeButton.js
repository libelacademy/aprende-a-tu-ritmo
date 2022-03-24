import React from 'react'
import "../../css/buttons/DegradeButton.css";
import { IoChevronForward } from "react-icons/io5";

const DegradeButton = ({ url = "/#", name, width, paddingLeft = 20 }) => {
    
    return (

        <a
            href={url}
            className="DegradeButton"
            style={{ width: width, paddingLeft: paddingLeft }}
        >
            {name}
            <span className="create-account">
                <IoChevronForward />
            </span>
        </a>
    );
}

export default DegradeButton;
