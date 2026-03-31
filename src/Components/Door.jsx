import React from "react";
import frameImg from "../img/frame.png";
import "./Door.css";

export default function Door({ onDoorClick }) {
    const [isOpen, setIsOpen] = React.useState(false);

    React.useEffect(() => {
        // ensure fade overlay is hidden on mount
        const overlay = document.querySelector(
            ".fade-transition"
        );
        if (overlay) overlay.classList.remove("active");
    }, []);

    const handleMouseEnter = () => setIsOpen(true);
    const handleMouseLeave = () => setIsOpen(false);

    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();

        // start fade-out
        const overlay = document.querySelector(
            ".fade-transition"
        );
        if (overlay) overlay.classList.add("active");

        // call the parent handler after 2s (half of 4s total transition)
        setTimeout(() => {
            if (onDoorClick) {
                onDoorClick();
            }
        }, 2000);
    };

    return (
        <div className="open-world">
            <div className="fade-transition" />
            <div className="container">
                <div className="flipbox">
                    <button
                        type="button"
                        className="framedoor"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleClick}
                    >
                        <img
                            src={frameImg}
                            className="frame"
                            alt="Door to new experience"
                        />
                        <div
                            className={`flipbox-active ${
                                isOpen ? "locked-open" : ""
                            }`}
                            aria-hidden="true"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}
