import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import alexandra from "@/assets/music/alexandra.mp3";
import { useDispatch } from "react-redux";
import { updateDisplayState } from "@/store/slices/display";

function ThirdContent() {
    const container = useRef();
    const timeline = useRef();

    const dispatch = useDispatch();

    const audioPlayer = new Audio(alexandra);
    audioPlayer.volume = 0.3;

    useGSAP(() => {
        timeline.current = gsap
            .timeline()
            .to(".text-1", {
                duration: 0.5,
                opacity: 1,
                onComplete: () => {
                    gsap.to(".text-1", {
                        duration: 0.5,
                        opacity: 0,
                        delay: 4
                    });
                }
            })
            .to(".text-2", {
                duration: 0.5,
                opacity: 1,
                delay: 4.5,
                onComplete: () => {
                    gsap.to(".text-2", {
                        duration: 0.5,
                        opacity: 0,
                        delay: 3,
                        onComplete: () => {
                            audioPlayer.play();
                            dispatch(updateDisplayState({ stateName: "isThird", value: false }));
                            dispatch(updateDisplayState({ stateName: "isFourth", value: true }));
                        }
                    });
                }
            });
    });

    return (
        <div ref={container} className="flex flex-col justify-center items-center text-5xl">
            <p className="text-1 opacity-0 text-center">Before we continue, let me play a song for you.</p>
            <p className="text-2 opacity-0 text-center text-7xl mt-8">
                <span className="font-display text-9xl">A</span>lexandra.
            </p>
        </div>
    );
}

export default ThirdContent;
