import { updateDisplayState } from "@/store/slices/display";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useDispatch } from "react-redux";

function FourthContent() {
    const container = useRef();
    const timeline = useRef();

    const dispatch = useDispatch();

    const enterAnimation = {
        duration: 0.5,
        opacity: 1
    };

    const exitAnimation = {
        duration: 0.5,
        opacity: 0
    };

    useGSAP(
        () => {
            timeline.current = gsap
                .timeline()
                .to(".detail-1", {
                    ...enterAnimation,
                    onComplete: () => {
                        gsap.to(".detail-1", {
                            ...exitAnimation,
                            delay: 2
                        });
                    }
                })
                .to(".detail-2", {
                    ...enterAnimation,
                    delay: 2.5,
                    onComplete: () => {
                        gsap.to(".detail-2", {
                            ...exitAnimation,
                            delay: 3
                        });
                    }
                })
                .to(".detail-3", {
                    ...enterAnimation,
                    delay: 3.5,
                    onComplete: () => {
                        gsap.to(".detail-3", {
                            ...exitAnimation,
                            delay: 3
                        });
                    }
                })
                .to(".detail-4", {
                    ...enterAnimation,
                    delay: 3.5,
                    onComplete: () => {
                        gsap.to(".detail-4", {
                            ...exitAnimation,
                            delay: 3
                        });
                    }
                })
                .to(".detail-5", {
                    ...enterAnimation,
                    delay: 3.5,
                    onComplete: () => {
                        gsap.to(".detail-5", {
                            ...exitAnimation,
                            delay: 3
                        });
                    }
                })
                .to(".detail-6", {
                    ...enterAnimation,
                    delay: 3.5,
                    onComplete: () => {
                        gsap.to(".detail-6", {
                            ...exitAnimation,
                            delay: 3
                        });
                    }
                })
                .to(".detail-7", {
                    ...enterAnimation,
                    delay: 3.5,
                    onComplete: () => {
                        gsap.to(".detail-7", {
                            ...exitAnimation,
                            delay: 3,
                            onComplete: () => {
                                dispatch(updateDisplayState({ stateName: "isFourth", value: false }));
                                dispatch(updateDisplayState({ stateName: "isFinal", value: true }));
                            }
                        });
                    }
                });
        },
        { scope: container }
    );

    return (
        <div ref={container} className="w-full flex flex-col justify-center items-center text-5xl">
            <div className="text-1 pl-8 w-full">
                <p className="detail-1 opacity-0">
                    Happy Birthday <span className="font-display text-7xl tracking-tighter">Baby</span>
                </p>
                <p className="detail-2 opacity-0">
                    Thank you for being an <span className="font-display text-7xl tracking-tighter">Angel</span> in my
                    life
                </p>
                <p className="detail-3 opacity-0">
                    Thank you for <span className="font-display text-7xl tracking-tighter">Spending</span> time with me
                </p>
                <p className="detail-4 opacity-0">
                    Thank you for being so <span className="font-display text-7xl tracking-tighter">Patience</span>
                </p>
                <p className="detail-5 opacity-0">
                    You&apos;re a gift from <span className="font-display text-7xl tracking-tighter">God</span>
                </p>
                <p className="detail-6 opacity-0">
                    Given to me to make my day <span className="font-display text-7xl tracking-tighter">Wonderful</span>
                </p>
                <p className="detail-7 opacity-0">
                    Thank you for <span className="font-display text-7xl tracking-tighter">Loving</span> me
                </p>
            </div>
        </div>
    );
}

export default FourthContent;
