import { updateDisplayState } from "@/store/slices/display";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useDispatch } from "react-redux";

function SecondContent() {
    const container = useRef();
    const timeline = useRef();

    const dispatch = useDispatch();

    useGSAP(
        () => {
            timeline.current = gsap
                .timeline()
                .to(".text-1", {
                    duration: 0.5,
                    opacity: 1,
                    onComplete: () => {
                        gsap.to(".text-1", {
                            opacity: 0,
                            delay: 1
                        });
                    }
                })
                .to(".text-2", {
                    duration: 0.5,
                    opacity: 1,
                    delay: 1.5,
                    onComplete: () => {
                        gsap.to(".text-2", {
                            opacity: 0,
                            delay: 1.5
                        });
                    }
                })
                .to(".text-3", {
                    duration: 0.5,
                    opacity: 1,
                    delay: 2,
                    onComplete: () => {
                        gsap.to(".text-3", {
                            opacity: 0,
                            delay: 3,
                            onComplete: () => {
                                dispatch(updateDisplayState({ stateName: "isSecond", value: false }));
                                dispatch(updateDisplayState({ stateName: "isThird", value: true }));
                            }
                        });
                    }
                });
        },
        { scope: container }
    );

    return (
        <div ref={container} className="flex flex-col justify-center items-center text-5xl">
            <p className="text-1 text-center opacity-0">Hi Beautiful...</p>
            <p className="text-2 text-center opacity-0">Happy 20th birthday \^o^/</p>
            <p className="text-3 text-center opacity-0">
                See? you&apos;re 20 year old now. <br />
                Which is our age gap is only 1 year!! (￣y▽,￣)╭{" "}
            </p>
        </div>
    );
}

export default SecondContent;
