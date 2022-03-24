import React, { useEffect, useState } from 'react'
import '../../css/cards/Question.css'
import { IoChevronDown, IoChevronUp } from 'react-icons/io5'

const Question = ({ id, question, answer, handleQuestion, active }) => {
    // const [active, setActive] = useState(false);
    const [visibility, setVisibility] = useState("none");

    useEffect(() => {
        active ? setVisibility("flex") : setVisibility("none");
    }, [active]);

    return (
        <div className="Question">
            <div
                className={
                    active ? "question-header-active" : "question-header"
                }
                onClick={() => {
                    active ? handleQuestion(-1) : handleQuestion(id)
                }}
            >
                <p>{question}</p>
                {active ? <IoChevronUp /> : <IoChevronDown />}
            </div>
            <div className="question-body" style={{ display: visibility }}>
                {answer}
            </div>
        </div>
    );
};

export default Question
