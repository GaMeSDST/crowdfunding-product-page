import { useContext, useEffect, useReducer, useState } from "react";
import ValuesContext from "./Context.js";

function Option({ title, price, desc, left, choosed, setValues, values, setThanks }) {
    let valuesCopy = values;
    useEffect(() => {
        if (title == choosed) document.getElementById(price).scrollIntoView({ behavior: "smooth", block: "center" });
    });

    return (
        <div id={price} className={`has-[:checked]:border-[#6f9e98] group rounded-lg border-2 mx-4 mb-6 transition ${left == 0 && "opacity-50"}`}>
            <div className="flex flex-row mx-4 gap-4 my-4 items-center">
                <div className="relative top-[3px] cursor-pointer">
                    <input
                        type="radio"
                        name="radio"
                        disabled={left == 0 && true}
                        defaultChecked={choosed == title && true}
                        className="peer appearance-none top-0 left-0 h-6 w-6 focus:border-[#3cb4ac] hover:border-[#3cb4ac] border-2 rounded-full relative cursor-pointer"
                    />
                    <div className="absolute top-0 left-0 peer-checked:bg-[#3cb4ac] w-4 h-4 ml-1 mt-1 rounded-full pointer-events-none cursor-pointer"></div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:w-[100%]">
                    <div className="text-black font-[700] text-[1rem] sm:mr-4">{title}</div>
                    {price == "null" ? "" : <div className="text-[#82bab1] mt-[0.225rem] font-bold">Pledge ${price} or more</div>}
                    {left == "null" ? (
                        ""
                    ) : (
                        <div className="max-[640px]:hidden sm:ml-auto text-[#a3a3a3]">
                            <span className="text-black font-[700] text-[1.2rem] mr-1">{left}</span> left
                        </div>
                    )}
                </div>
            </div>
            <div className="mx-4 text-[1rem] text-[#a3a3a3] mb-6 sm:ml-[3.3rem] sm:text-[0.9rem]">{desc}</div>
            {price == "null" ? (
                ""
            ) : (
                <div className="flex items-center text-[#a3a3a3] mb-2 mx-4 sm:hidden">
                    <span className="text-black font-[700] text-[1.2rem] mr-2">{left}</span>
                    left
                </div>
            )}
            <div className="flex flex-row max-h-0 items-center overflow-hidden transition-all duration-500 ease-in-out group-has-[:checked]:border-t-2 group-has-[:checked]:max-h-72">
                <div className="flex flex-row max-[500px]:flex-col items-center w-full my-6">
                    <span className="ml-4 flex-grow text-[#848484] max-[500px]:mb-6 max-[500px]:ml-0">Enter your pledge</span>
                    <div className="flex flex-row">
                        <div className="max-[500px]:mr-4 border-2 border-[#ececec] hover:border-[#6ea19c] focus-within::border-[#6ea19c] rounded-full w-24 h-14 flex flex-row items-center">
                            <span className="text-[#bdbdbd] ml-[20px] font-bold">$</span>
                            <input
                                type="number"
                                min={price}
                                className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ml-2 w-10 text-black font-bold outline-none"
                            ></input>
                        </div>
                        <button
                            onClick={() => {
                                if (price == 25 && document.querySelector("#formData")[4].value >= 25) {
                                    setValues({
                                        ...values,
                                        firstItemLeft: values.firstItemLeft - 1,
                                        backed: values.backed + parseInt(document.querySelector("#formData")[4].value),
                                        total: values.total + 1,
                                    });
                                    setThanks();
                                } else if (price == 75 && document.querySelector("#formData")[7].value >= 75) {
                                    document.querySelector("#formData")[7].value;
                                    setValues({
                                        ...values,
                                        secondItemLeft: --values.secondItemLeft,
                                        backed: values.backed + parseInt(document.querySelector("#formData")[7].value),
                                        total: values.total + 1,
                                    });
                                    setThanks();
                                } else if (price == 200 && document.querySelector("#formData")[10].value >= 200) {
                                    document.querySelector("#formData")[10].value;
                                    setValues({
                                        ...values,
                                        thirdItemLeft: values.thirdItemLeft - 1,
                                        backed: values.backed + parseInt(document.querySelector("#formData")[10].value),
                                        total: values.total + 1,
                                    });
                                    setThanks();
                                } else if (document.querySelector("#formData")[1].value != "") {
                                    setValues({
                                        ...values,
                                        backed: values.backed + parseInt(document.querySelector("#formData")[1].value),
                                        total: values.total + 1,
                                    });
                                    setThanks();
                                }
                            }}
                            type="submit"
                            className="hover:bg-[#167974] bg-[#3cb3ab] p-4 px-6 rounded-full max-[500px]:m-0 mx-4 text-white font-bold block"
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SuccessScreen({ values, onPress, setThanks, contextSucks }) {
    useEffect(() => {
        contextSucks(values);
    });

    return (
        <div className="flex flex-col items-center justify-center gap-4 h-full">
            <div style={{ backgroundImage: "url(/icon-check.svg)" }} className="w-[64px] h-[64px] mb-6"></div>
            <p className="mb-3 font-[700] text-[1.5rem]">Thanks for your support!</p>
            <p className="text-[#a3a3a3] max-[640px]:w-[28ch] mb-4 w-[43ch] text-center">
                Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Rise worldwide. You will get an email once our campaign is
                completed.
            </p>
            <button
                onClick={() => {
                    onPress();
                    setThanks();
                }}
                className={`bg-[#3cb3ab] rounded-full py-4 px-8 text-white font-[700] hover:bg-[#167974]`}
            >
                Got it!
            </button>
        </div>
    );
}

export default function Modal({ data, onPress, chosen, contextSucks }) {
    const [values, setValues] = useState(data);
    const [thanks, setThanks] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <>
            <div onClick={onPress} className={`w-[100%] h-[100%] fixed inset-0 bg-black opacity-25 z-[3]`}></div>
            <div className="w-[90%] max-w-[650px] h-[530px] bg-white fixed inset-0 m-auto z-[3] rounded-xl sm:px-4 overflow-y-auto">
                {thanks == false ? (
                    <>
                        <div className="flex flex-row justify-between mx-4 my-6 mb-4 items-center">
                            <div className="text-black font-[700] text-[1rem] mb-0.5">Back this project</div>
                            <div
                                className="w-[15px] h-[15px] cursor-pointer"
                                onClick={onPress}
                                style={{ backgroundImage: "url(./icon-close-modal.svg)" }}
                            ></div>
                        </div>
                        <div className="text-[#a3a3a3] text-[14px] sm:max-w-[60ch] sm:text-[15px] mb-4 leading-7 mx-4">
                            Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
                        </div>
                        <form id="formData" onSubmit={handleSubmit}>
                            <Option
                                title="Pledge with no reward"
                                price="null"
                                desc="Choose to support us without a reward if you simply believe in our project. As a backer. you will be signed up to receive product updates via email."
                                left="null"
                                choosed={chosen}
                                values={values}
                                setValues={setValues}
                                setThanks={() => setThanks(!thanks)}
                            />
                            <Option
                                title="Bamboo Stand"
                                price="25"
                                desc="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
                                left={values.firstItemLeft}
                                choosed={chosen}
                                values={values}
                                setValues={setValues}
                                setThanks={() => setThanks(!thanks)}
                            />
                            <Option
                                title="Black Edition Stand"
                                price="75"
                                desc="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
                                left={values.secondItemLeft}
                                choosed={chosen}
                                values={values}
                                setValues={setValues}
                                setThanks={() => setThanks(!thanks)}
                            />
                            <Option
                                title="Mahogany Special Edition"
                                price="200"
                                desc="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
                                left={values.thirdItemLeft}
                                choosed={chosen}
                                values={values}
                                setValues={setValues}
                                setThanks={() => setThanks(!thanks)}
                            />
                        </form>
                    </>
                ) : (
                    <SuccessScreen setThanks={() => setThanks(!thanks)} onPress={onPress} values={values} contextSucks={contextSucks} />
                )}
            </div>
        </>
    );
}
