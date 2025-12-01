import React, { useEffect } from "react";
import "./leaf.css";

const Leaf = () => {
    useEffect(() => {
        const sectionsLeaf = [...document.querySelectorAll(".leaf")];
        const optionsLeaf = {
            rootMargin: "0px",
            threshold: 0.25,
        };

        const callbackLeaf = (entries) => {
            entries.forEach((entry) => {
                const { target } = entry;
                if (entry.intersectionRatio >= 0.25) {
                    target.classList.add("is-visible");
                    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
                        observerLeaf.unobserve(target);
                    }
                } else {
                    target.classList.remove("is-visible");
                }
            });
        };

        const observerLeaf = new IntersectionObserver(
            callbackLeaf,
            optionsLeaf
        );
        sectionsLeaf.forEach((section) => {
            observerLeaf.observe(section);
        });
        return () => {
            observerLeaf.disconnect(); // cleanup on unmount
        };
    }, []);

    return (
        <div className="box">
            {[...Array(10)].map((_, index) => (
                <div className="leaf" key={index}></div>
            ))}
        </div>
    );
};

export default Leaf;
