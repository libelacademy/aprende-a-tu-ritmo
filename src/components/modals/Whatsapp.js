import React, {useState} from "react";
import "../../css/modals/Whatsapp.css";

import { IoLogoWhatsapp, IoCloseSharp } from "react-icons/io5";
import avatar1 from "../../images/avatar1.png"
import avatar2 from "../../images/avatar2.png";

const MemberTag = ({ name, dependency, avatar, url }) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="whatsapp-member"
        >
            <img className="member-avatar" src={avatar} alt="avatar"/>
            <div className="member-information">
                <p className="member-name">{name}</p>
                <p className="member-dependency">{dependency}</p>
            </div>
            <IoLogoWhatsapp className="icon-member-wpp" />
        </a>
    );
};

const Whatsapp = () => {

    const [openChat, setOpenChat] = useState(false);

    const hidden = { opacity: 0, visibility: "hidden" };
    const visible = { opacity: 1, visibility: "visible" };    

    return (
        <button className="Whatsapp" onClick={() =>    {setOpenChat(!openChat)}}>
            {!openChat ? <IoLogoWhatsapp /> : <IoCloseSharp />}

            <span style={!openChat ? visible : hidden}>
                <b>Chatea con nosotros</b>
            </span>

            <div className="whatsapp-chat" style={openChat ? { transform: "translateY(0)", ...visible } : { transform: "translateY(20px)", ...hidden }}>
                <div className="whatsapp-chat-header">
                        <h3>Inicia una conversación</h3>
                        <p>
                            ¡Hola! Elige una de las siguientes opciones
                        </p>
                </div>
                <div className="whatsapp-chat-body">
                    <p className="whatsapp-chat-body-desc">
                        Nuestro equipo usualmente responde en pocos minutos
                    </p>
                    <MemberTag
                        name={"Libel 24/7"}
                        dependency={"Atención al Alumno"}
                        avatar={avatar1}
                        url="https://wa.link/3yhau9"
                    />
                    <MemberTag
                        name={"Administrativo"}
                        dependency={"Registro y control"}
                        avatar={avatar2}
                        url="https://wa.link/zbatnw"
                    />
                </div>
            </div>
        </button>
    );
};

export default Whatsapp;
