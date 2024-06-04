import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { PiArrowRightThin } from "react-icons/pi";
import PropTypes from "prop-types";

function Onboarding({ onNext }) {
    const container = useRef();
    const animation = useRef();
    const btnRef = useRef();

    useGSAP((context, contextSafe) => {
        animation.current = gsap
            .timeline()
            .to(".text-1", {
                opacity: 1,
                duration: 0.75
            })
            .to(".text-2", {
                opacity: 1,
                duration: 1
            })
            .to(".btn-next", {
                display: "block",
                opacity: 1,
                duration: 0.5
            });

        const onMouseOver = contextSafe(() => {
            gsap.to(btnRef.current, { scale: 1.2, duration: 0.25 });
        });

        const onMouseLeave = contextSafe(() => {
            gsap.to(btnRef.current, { scale: 1, duration: 0.25 });
        });

        btnRef.current.addEventListener("mouseover", onMouseOver);
        btnRef.current.addEventListener("mouseleave", onMouseLeave);
    });

    return (
        <div ref={container} className="flex flex-col justify-center items-center text-5xl onboarding">
            <div className="text-center mb-6">
                <p className="text-1 opacity-0">Hewoooo</p>
                <p className="text-2 opacity-0">Let&apos;s do a quick verification</p>
            </div>
            <div
                ref={btnRef}
                onClick={onNext}
                className="btn-next opacity-0 display-none flex bg-secondary-500 rounded-full p-6 mt-4 cursor-pointer"
            >
                <PiArrowRightThin size={48} fill="#333" />
            </div>
        </div>
    );
}

export default Onboarding;

Onboarding.propTypes = {
    onNext: PropTypes.func.isRequired
};
