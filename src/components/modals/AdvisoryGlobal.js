import React from 'react';
import { IoClose, IoCalendarOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import "../../css/modals/AdvisoryGlobal.css"
import { closeAdvisory } from '../../features/advisory';

const AdvisoryGlobal = () => {

    const dispatch = useDispatch()

    const modal = useSelector(state => state.advisory.value.modal)
    const mobile = window.innerWidth <= 460;

        return (
            <div
                className="AdvisoryGlobal"
                style={
                    modal
                        ? { opacity: 1, visibility: "visible" }
                        : {
                              opacity: 0,
                              visibility: "hidden",
                              transform: "translateY(200px)",
                          }
                }
            >
                <IoClose
                    className="ag-closer"
                    onClick={() => {
                        dispatch(closeAdvisory());
                    }}
                />
                {mobile ? (
                    <h1>Charlas informativas</h1>
                ) : (
                    <h1>Únete a nuestras charlas informativas</h1>
                )}
                <a
                    href="https://libel.academy/asesoria"
                    target={"_blank"}
                    rel="noreferrer"
                >
                    <IoCalendarOutline className="ag-icon" />
                    Programar
                </a>
            </div>
        );
};

export default AdvisoryGlobal;
