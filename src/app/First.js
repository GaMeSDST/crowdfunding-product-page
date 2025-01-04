import { useState } from "react";

export default function First({ onPress }) {
    const [bookmark, useBookmarked] = useState(false);
    return (
        <>
            <div className="bg-white min-h-32 relative top-60 mx-6 rounded-lg flex flex-col align-center text-center sm:w-[39rem] sm:mx-auto">
                <div className="w-[56px] h-[56px] relative m-auto bottom-8" style={{ backgroundImage: "url(/logo-mastercraft.svg)" }}></div>
                <p className="mt-[-1rem] mb-3 font-[700] text-[1.3rem] max-w-[20ch] mx-auto leading-6 sm:max-w-[25ch] sm:mt-[-0.3rem]">
                    Mastercraft Bamboo Monitor Riser
                </p>
                <p className="text-[#a3a3a3] text-[1rem] scale-90 ">A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
                <div className="mt-8 pb-8 flex justify-between gap-4 mx-5">
                    <button onClick={onPress} className="bg-[#3cb4ab] p-4 rounded-full w-[100%] text-[#f2ffff] font-[700] hover:bg-[#157a74] sm:w-52">
                        Back this project
                    </button>
                    <button className="w-[56px] h-[56px] sm:w-[11rem] inline-flex items-center" onClick={() => useBookmarked(!bookmark)}>
                        <svg className="z-[2]" width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fill-rule="evenodd">
                                <circle className={`${bookmark ? "fill-[#0f7d74]" : "hover:fill-[#707070]"}`} fill="#2F2F2F" cx="28" cy="28" r="28" />
                                <path className={`${bookmark ? "fill-white" : ""}`} fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
                            </g>
                        </svg>
                        <span
                            className={`hidden sm:inline pl-16 pr-6 h-[56px] bg-[#f4f4f4] content-center rounded-full absolute font-semibold ${
                                bookmark ? "text-[#21716c]" : "text-[#828282]"
                            }`}
                        >
                            {bookmark ? "Bookmarked" : "Bookmark"}
                        </span>
                    </button>
                </div>
            </div>
        </>
    );
}
