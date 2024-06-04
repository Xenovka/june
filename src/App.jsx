import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import FirstContent from "./partials/FirstContent";
import { useDispatch, useSelector } from "react-redux";
import { updateDisplayState } from "./store/slices/display";
import SecondContent from "./partials/SecondContent";
import Onboarding from "./partials/Onboarding";
import Verification from "./partials/Verification";
import ThirdContent from "./partials/ThirdContent";
import FourthContent from "./partials/FourthContent";
import Final from "./partials/Final";

function App() {
    const { isFirst, isSecond, isThird, isFourth, isFinal, isVerification } = useSelector((state) => state.display);

    const container = useRef();
    const dispatch = useDispatch();

    const { contextSafe } = useGSAP({ scope: container });

    const onNext = contextSafe(() => {
        gsap.to(".onboarding", {
            opacity: 0,
            display: "none",
            onComplete: () => {
                dispatch(updateDisplayState({ stateName: "isVerification", value: true }));
            }
        });
    });

    return (
        <div className="h-screen w-screen flex justify-center items-center overflow-hidden" ref={container}>
            <Onboarding onNext={onNext} />
            {isVerification && <Verification />}
            {isFirst && <FirstContent onNext={onNext} />}
            {isSecond && <SecondContent />}
            {isThird && <ThirdContent />}
            {isFourth && <FourthContent />}
            {isFinal && <Final />}
        </div>
    );
}

export default App;
