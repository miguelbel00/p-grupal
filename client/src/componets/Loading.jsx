import React from "react";
import logo from "../assets/circles.gif"
import "../styles/loading.css"


export default function Loading() {
    return (
        <div className="load">
            <img
                src={logo}
                alt="loading..."
            />
        </div>
    )
}