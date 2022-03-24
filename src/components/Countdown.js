import React, { useEffect, useState } from "react";
import "../css/Countdown.css"

import { getRemainingTimeUntilMsTimestamp } from "../utils/countdown";

const defaultRemainingTime = {
    seconds: "00",
    minutes: "00",
    hours: "00",
    days: "00",
};


const Countdown = ({ countdownTimestampMs }) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);


    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [countdownTimestampMs]);

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }
    return (
        <div className="Countdown">
            <h3>COMIENZA EN</h3>
            <div className="countdown-timer">
                <div className="segment">
                    <div className="number">{remainingTime.days}</div>
                    <div className="text">DÍAS</div>
                </div>
                <div className="segment">
                    <div className="number">{remainingTime.hours}</div>
                    <div className="text">HOR</div>
                </div>
                <div className="segment">
                    <div className="number">{remainingTime.minutes}</div>
                    <div className="text">MIN</div>
                </div>
                <div className="segment">
                    <div className="number">{remainingTime.seconds}</div>
                    <div className="text">SEG</div>
                </div>
            </div>
            <h4>- 28 MARZO 2022 -</h4>
        </div>
    );
};

export default Countdown
