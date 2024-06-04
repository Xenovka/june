import { updateDisplayState } from "@/store/slices/display";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useDispatch } from "react-redux";

function Verification() {
    const container = useRef();
    const dispatch = useDispatch();

    const { contextSafe } = useGSAP({ scope: container });

    useGSAP(() => {
        gsap.to(container.current, {
            opacity: 1
        });
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const auth = {
            isBoyfriend: "yes",
            petName: "moshi",
            datingDate: new Date("2023-12-21").toString(),
            favoriteBand: "reality club",
            favoriteColor: "blue",
            favoriteSinger: "laufey",
            favoriteDrink: "americano"
        };

        const {
            0: isBoyfriend,
            1: petName,
            2: datingDate,
            3: favoriteBand,
            4: favoriteColor,
            5: favoriteSinger,
            6: favoriteDrink
        } = e.target;

        const onFormComplete = contextSafe(() => {
            gsap.to(container.current, {
                opacity: 0,
                onComplete: () => {
                    dispatch(updateDisplayState({ stateName: "isVerification", value: false }));
                    dispatch(updateDisplayState({ stateName: "isFirst", value: true }));
                }
            });
        });

        const isDatingDate = new Date(datingDate.value).toString() === auth.datingDate;
        const isBf = isBoyfriend.value === auth.isBoyfriend;
        const isPetName = petName.value === auth.petName;
        const isFavoriteBand = favoriteBand.value === auth.favoriteBand;
        const isFavoriteColor = favoriteColor.value === auth.favoriteColor;
        const isFavoriteSinger = favoriteSinger.value === auth.favoriteSinger;
        const isFavoriteDrink = favoriteDrink.value === auth.favoriteDrink;

        if (
            isDatingDate &&
            isBf &&
            isPetName &&
            isFavoriteBand &&
            isFavoriteColor &&
            isFavoriteSinger &&
            isFavoriteDrink
        ) {
            onFormComplete();
        }
    };

    return (
        <div ref={container} className="opacity-0 flex flex-col justify-center items-center">
            <p className="text-4xl mb-6">
                Only the <span className="font-display text-6xl">R</span>ight person could answer these questions
            </p>
            <form className="text-lg" onSubmit={handleSubmit}>
                <div className="mb-4  flex justify-between">
                    <label className="font-light">Is the person who send this your boyfriend?</label>
                    <select
                        className="font-normal text-primary-500 ml-4 border-none outline-none bg-secondary-500"
                        name="name"
                        id="is-bf"
                    >
                        <option className="text-primary-500 font-normal" value="no">
                            no
                        </option>
                        <option className="text-primary-500 font-normal" value="yes">
                            yes
                        </option>
                    </select>
                </div>

                <div className="mb-4  flex justify-between">
                    <label className="font-light">Wendy&apos;s pet name?</label>
                    <select
                        className="font-normal text-primary-500 ml-4 border-none outline-none bg-secondary-500"
                        name="name"
                        id="is-bf"
                    >
                        <option className="text-primary-500 font-normal" value="tapei">
                            tapei
                        </option>
                        <option className="text-primary-500 font-normal" value="tomo">
                            tomo
                        </option>
                        <option className="text-primary-500 font-normal" value="moshi">
                            moshi
                        </option>
                        <option className="text-primary-500 font-normal" value="komo">
                            komo
                        </option>
                    </select>
                </div>

                <div className="mb-4  flex justify-between">
                    <label className="font-light">Our official date</label>
                    <input
                        className="font-normal text-primary-500 ml-4 border-none outline-none bg-secondary-500"
                        type="date"
                        name="date"
                        id="date"
                    />
                </div>

                <div className="mb-4  flex justify-between">
                    <label className="font-light">Keisha&apos;s Favorite Band?</label>
                    <select
                        className="font-normal text-primary-500 ml-4 border-none outline-none bg-secondary-500"
                        name="name"
                        id="is-bf"
                    >
                        <option className="text-primary-500 font-normal" value="wave to earth">
                            wave to earth
                        </option>
                        <option className="text-primary-500 font-normal" value="reality club">
                            reality club
                        </option>
                        <option className="text-primary-500 font-normal" value="radwimps">
                            radwimps
                        </option>
                        <option className="text-primary-500 font-normal" value="yoasobi">
                            yoasobi
                        </option>
                    </select>
                </div>

                <div className="mb-4 flex justify-between">
                    <label className="font-light">Keisha&apos;s Favorite Color?</label>
                    <select
                        className="font-normal text-primary-500 ml-4 border-none outline-none bg-secondary-500"
                        name="name"
                        id="is-bf"
                    >
                        <option className="text-primary-500 font-normal" value="black">
                            black
                        </option>
                        <option className="text-primary-500 font-normal" value="white">
                            white
                        </option>
                        <option className="text-primary-500 font-normal" value="purple">
                            purple
                        </option>
                        <option className="text-primary-500 font-normal" value="blue">
                            blue
                        </option>
                    </select>
                </div>

                <div className="mb-4  flex justify-between">
                    <label className="font-light">Keisha&apos;s Favorite Singer?</label>
                    <select
                        className="font-normal text-primary-500 ml-4 border-none outline-none bg-secondary-500"
                        name="name"
                        id="is-bf"
                    >
                        <option className="text-primary-500 font-normal" value="adele">
                            adele
                        </option>
                        <option className="text-primary-500 font-normal" value="conan gray">
                            conan gray
                        </option>
                        <option className="text-primary-500 font-normal" value="taylor swift">
                            taylor swift
                        </option>
                        <option className="text-primary-500 font-normal" value="laufey">
                            laufey
                        </option>
                    </select>
                </div>

                <div className="mb-4 flex justify-between">
                    <label className="font-light">Keisha&apos;s Favorite Drink?</label>
                    <select
                        className="font-normal text-primary-500 ml-4 border-none outline-none bg-secondary-500"
                        name="name"
                        id="is-bf"
                    >
                        <option className="text-primary-500 font-normal" value="milkshake">
                            milkshake
                        </option>
                        <option className="text-primary-500 font-normal" value="americano">
                            americano
                        </option>
                        <option className="text-primary-500 font-normal" value="hot chocolate">
                            hot chocolate
                        </option>
                    </select>
                </div>

                <input
                    className="mt-8 w-full block bg-secondary-500 text-primary-500 font-normal px-8 py-2 cursor-pointer"
                    type="submit"
                    value="I'm Keisha"
                />
            </form>
        </div>
    );
}

export default Verification;
