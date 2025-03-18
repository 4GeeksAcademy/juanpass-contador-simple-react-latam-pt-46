import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Counter(props) {
    return (
        <div className="card d-flex flex-row align-items-center justify-content-center bg-dark mt-5 mx-5 p-5">
            <div className="btn btn-lg fs-1 py-3 text-white me-2"><FontAwesomeIcon icon={faClock} /></div>
            <div className="btn btn-lg fs-1 py-3 text-white me-2">
                {Math.floor(props.number / 100000) % 10}
            </div>
            <div className="btn btn-lg fs-1 py-3 text-white me-2">
                {Math.floor(props.number / 10000) % 10}
            </div>
            <div className="btn btn-lg fs-1 py-3 text-white me-2">
                {Math.floor(props.number / 1000) % 10}
            </div>
            <div className="btn btn-lg fs-1 py-3 text-white me-2">
                {Math.floor(props.number / 100) % 10}
            </div>
            <div className="btn btn-lg fs-1 py-3 text-white me-2">
                {Math.floor(props.number / 10) % 10}
            </div>
            <div className="btn btn-lg fs-1 py-3 text-white">
                {Math.floor(props.number / 1) % 10}
            </div>
        </div>
    );
}

export default Counter;