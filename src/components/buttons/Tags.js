import React from "react";
import "../../css/buttons/Tags.css";

import { IoAdd } from "react-icons/io5";

const Tags = ({ tag, width, url }) => {

    return (
        <a
            className="Tags"
            style={{ width: width }}
            href={url}
            target={"_blank"}
            rel="noreferrer"
        >
            {tag}
            <span className={"tags-circle"}>
                <IoAdd />
            </span>
        </a>
    );
};

export default Tags;
