import React, { useEffect, useState } from 'react';
import "../../css/modals/Training.css"

import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector} from "react-redux"
import { closeTrainingMore } from '../../features/training';

const Training = () => {

    const [visibility, setVisibility] = useState("hidden");
    const [container, setContainer] = useState("training-closed");

    const dispatch = useDispatch();

    const modal = useSelector((state) => state.training.value.modal);
    const title = useSelector((state) => state.training.value.title);
    const more = useSelector((state) => state.training.value.more);

        useEffect(() => {
            if (modal) {
                setVisibility("visible");
                setContainer("");

                setTimeout(() => {
                    setContainer("");
                }, 100);
            }
        }, [modal]);

    
        const handleCloseModal = (event) => {
            if (event.target.className === "Training") {
                setContainer("training-closed");
                // dispatch(closeTrainingMore());
                // setVisibility("hidden");
                setTimeout(() => {
                    // handleOpenModal(false);
                    dispatch(closeTrainingMore());
                    setVisibility("hidden");
                }, 50);
            }
        };

    return (
        <div
            className="Training"
            style={{ visibility: `${visibility}` }}
            onClick={handleCloseModal}
        >
            <div className={`training-container ${container}`}>
                <button
                    className="training-closer"
                    onClick={() => {
                        setContainer("training-closed");
                        // dispatch(closeTrainingMore());
                        // setVisibility("hidden");
                        setTimeout(() => {
                            // handleOpenModal(false);
                            dispatch(closeTrainingMore());
                            setVisibility("hidden");
                        }, 50);
                    }}
                >
                    <IoClose />
                </button>
                <h1>{title}</h1>
                <p>{more}</p>
            </div>
        </div>
    );
};

export default Training;
