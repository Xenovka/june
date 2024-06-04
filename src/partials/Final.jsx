import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import image from "@/assets/images/keca.jpg";
import image1 from "@/assets/images/keca-1.jpg";
import image2 from "@/assets/images/keca-2.jpg";
import image3 from "@/assets/images/keca-3.jpg";
import image4 from "@/assets/images/keca-4.jpg";
import image5 from "@/assets/images/keca-5.jpg";
import image6 from "@/assets/images/keca-6.jpg";
import image7 from "@/assets/images/keca-7.jpg";
import image8 from "@/assets/images/keca-8.jpg";
import image9 from "@/assets/images/keca-9.jpg";
import image10 from "@/assets/images/keca-24.jpg";
import image11 from "@/assets/images/keca-33.jpg";
import image12 from "@/assets/images/keca-12.jpg";
import image13 from "@/assets/images/keca-32.jpg";
import image14 from "@/assets/images/keca-14.jpg";
import image15 from "@/assets/images/keca-36.jpg";
import image16 from "@/assets/images/keca-29.jpg";
import wengie from "@/assets/images/wengie.jpg";

import gsap from "gsap";

function Final() {
    const container = useRef();
    const timeline = useRef();

    useGSAP(
        () => {
            timeline.current = gsap
                .timeline()
                .fromTo(
                    ".fig-container-1",
                    {
                        x: window.innerWidth
                    },
                    {
                        x: -window.innerWidth - 2570,
                        duration: 25,
                        ease: "none"
                    }
                )
                .fromTo(
                    ".fig-container-2",
                    {
                        x: window.innerWidth
                    },
                    {
                        x: -window.innerWidth - 2150,
                        duration: 25,
                        ease: "none"
                    },
                    "<52.5%"
                )
                .to(".thank-wengie", {
                    duration: 0.5,
                    opacity: 1,
                    delay: 2
                })
                .to(".image-18", {
                    duration: 0.5,
                    display: "block",
                    opacity: 1,
                    onComplete: () => {
                        gsap.to(".image-18", {
                            duration: 0.5,
                            display: "none",
                            opacity: 0,
                            delay: 5
                        });
                        gsap.to(".thank-wengie", {
                            duration: 0.5,
                            display: "none",
                            opacity: 0,
                            delay: 5
                        });
                    }
                })
                .to(".love", {
                    duration: 0.5,
                    opacity: 1,
                    display: "block",
                    delay: 5.5,
                    onComplete: () => {
                        gsap.to(".love", {
                            duration: 0.5,
                            display: "none",
                            opacity: 0,
                            delay: 4
                        });
                    }
                })
                .to(".end", {
                    duration: 0.5,
                    opacity: 1,
                    display: "block",
                    delay: 4.5
                });
        },
        { scope: container }
    );

    return (
        <div ref={container}>
            <div className="fig-container-1 relative w-screen">
                <figure className="image w-[350px] absolute left-0 -top-[450px]">
                    <img src={image} alt="keca" />
                    <figcaption className="text-lg font-light mt-4">Look at her gorgeous smile</figcaption>
                </figure>
                <figure className="image-1 w-[350px] absolute left-[400px] -top-[550px]">
                    <img src={image1} alt="keca" />
                    <figcaption className="text-lg font-light mt-4">She looks very pretty</figcaption>
                </figure>
                <figure className="image-2 w-[450px] absolute left-[120px] top-[150px]">
                    <img src={image2} alt="keca" />
                    <figcaption className="text-lg font-light mt-4">Look who just woke up!</figcaption>
                </figure>
                <figure className="image-3 w-[350px] absolute left-[800px] -top-[450px]">
                    <img src={image3} alt="keca" />
                    <figcaption className="text-lg font-light mt-4">Thank you for making me laughing, bby</figcaption>
                </figure>
                <figure className="image-4 w-[350px] absolute left-[780px] -top-[50px]">
                    <img src={image4} alt="keca" />
                    <figcaption className="text-lg font-light mt-4">Is this my girlfriend??!!!!</figcaption>
                </figure>
                <figure className="image-5 w-[550px] absolute left-[1200px] -top-[300px]">
                    <figcaption className="text-lg font-light mt-4">She went to Malaysia with her fam</figcaption>
                    <img src={image5} alt="keca" />
                </figure>
                <figure className="image-6 w-[350px] absolute left-[1800px] -top-[350px]">
                    <figcaption className="text-lg font-light mt-4">Working on her assignment</figcaption>
                    <img src={image6} alt="keca" />
                </figure>
                <figure className="image-7 w-[350px] absolute left-[2200px] -top-[550px]">
                    <img src={image7} alt="keca" />
                    <figcaption className="text-lg font-light mt-4">Keca and her kincah smile</figcaption>
                </figure>
                <figure className="image-8 w-[350px] absolute left-[2570px] -top-[200px]">
                    <figcaption className="text-lg font-light mt-4">Keca shorthair era</figcaption>
                    <img src={image8} alt="keca" />
                </figure>
            </div>
            <div className="fig-container-2 relative w-screen">
                <figure className="image-9 w-[550px] absolute left-[50px] -top-[450px]">
                    <img src={image9} alt="keca" />
                    <figcaption className="text-lg font-light mt-4">Smiling little Keisha</figcaption>
                </figure>
                <figure className="image-10 w-[350px] absolute left-[90px] -top-[80px]">
                    <img src={image10} alt="keca" />
                    <figcaption className="text-lg font-light mt-4">Little Keisha with her frog custome</figcaption>
                </figure>
                <figure className="image-11 w-[450px] absolute left-[550px] -top-[430px]">
                    <img src={image11} alt="keca" />
                    <figcaption className="text-lg font-light mt-4">Little Keisha and water</figcaption>
                </figure>
                <figure className="image-12 w-[350px] absolute left-[1050px] -top-[550px]">
                    <img src={image12} alt="keca" />
                    <figcaption className="text-lg font-light mt-4">Her favorite smile</figcaption>
                </figure>
                <figure className="image-13 w-[450px] absolute left-[1450px] -top-[450px]">
                    <img src={image13} alt="keca" />
                    <figcaption className="text-lg font-light mt-4">With Tapei dan Komo</figcaption>
                </figure>
                <figure className="image-14 w-[750px] absolute left-[1950px] -top-[550px]">
                    <img src={image14} alt="keca" />
                    <figcaption className="text-lg font-light mt-4">OMO SHEE LOOKSS SO PRETTYYYY!!!!</figcaption>
                </figure>
                <figure className="image-15 w-[550px] absolute left-[2850px] -top-[400px]">
                    <figcaption className="text-lg font-light mt-4">Our first date, watching Ghibli movie</figcaption>
                    <img src={image15} alt="keca" />
                </figure>
                <figure className="image-16 w-[650px] absolute left-[2150px] -top-[50px]">
                    <img src={image16} alt="keca" />
                    <figcaption className="text-lg font-light mt-4">My favorite picture of her 💙</figcaption>
                </figure>
            </div>
            <div className="fig-container-3">
                <img
                    src={wengie}
                    className="image-18 w-[550px] absolute left-[55%] top-[150px] -z-10 opacity-0"
                    alt="wengie"
                />
                <p className="thank-wengie text-5xl text-center opacity-0">Thanks to Wengie for helping me</p>
            </div>
            <div className="text-5xl">
                <p className="love text-center hidden opacity-0">
                    I Love You, <span className="font-display text-7xl">K</span>eisha.
                </p>
                <p className="end text-center hidden opacity-0">
                    <span className="font-display text-7xl">T</span>he <span className="font-display text-7xl">E</span>
                    nd.
                </p>
            </div>
        </div>
    );
}

export default Final;
