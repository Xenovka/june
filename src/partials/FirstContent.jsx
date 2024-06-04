import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useDispatch } from "react-redux";
import { updateDisplayState } from "@/store/slices/display";

function FirstContent() {
    const container = useRef();
    const dispatch = useDispatch();

    const timeline = useRef();

    useGSAP(
        () => {
            timeline.current = gsap
                .timeline()
                .fromTo(
                    ".text-1",
                    {
                        opacity: 0
                    },
                    {
                        opacity: 1,
                        duration: 0.5,
                        delay: 0.5
                    }
                )
                .fromTo(
                    ".text-2 span",
                    {
                        opacity: 0
                    },
                    {
                        duration: 0.5,
                        ease: "power2.inOut",
                        opacity: 1,
                        stagger: 0.09
                    }
                )
                .to(container.current, {
                    duration: 0.5,
                    opacity: 0,
                    delay: 1.5,
                    onComplete: () => {
                        dispatch(updateDisplayState({ stateName: "isFirst", value: false }));
                        dispatch(updateDisplayState({ stateName: "isSecond", value: true }));
                    }
                });
        },
        { scope: container }
    );

    return (
        <div ref={container} id="first" className="flex flex-col justify-center items-center text-5xl">
            <p className="text-1 font-thin">Welcome</p>
            <p className="text-2 text-6xl font-thin mt-6 mb-8">
                <span className="font-display text-9xl">K</span>
                <span>e</span>
                <span>i</span>
                <span>s</span>
                <span>h </span>
                <span className="font-display text-9xl">F</span>
                <span>i</span>
                <span>d</span>
                <span>e</span>
                <span>l</span>
                <span>i</span>
                <span>a </span>
                <span className="font-display text-9xl">W</span>
                <span>i</span>
                <span>l</span>
                <span>l</span>
                <span>i</span>
                <span>e</span>
            </p>
        </div>
    );
}

export default FirstContent;
