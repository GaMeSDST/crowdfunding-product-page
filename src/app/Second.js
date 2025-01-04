import { useContext } from "react";
import ValuesContext from "./Context.js";

export default function Second({ backed, total, left }) {
    return (
        <>
            <div className="bg-white flex flex-col min-h-32 relative top-64 align-middle justify-center text-center mx-6 sm:w-[39rem] sm:mx-auto sm:my-0 rounded-xl">
                <div className="sm:flex sm:flex-row sm:gap-10 sm:items-center sm:mt-8 sm:mb-2">
                    <div className="mt-8 sm:mt-0 text-[#a3a3a3] sm:ml-[5%]">
                        <div className="text-black font-[700] text-[2rem]">
                            <span>$</span>
                            {Intl.NumberFormat("en-US").format(backed)}
                        </div>{" "}
                        of $100,000 backed
                    </div>
                    <div className="max-[640px]:w-40 mx-auto my-8 py-6 border-y-2 text-[#a3a3a3] sm:border-y-0 sm:my-0 sm:py-0 sm:mx-0 sm:border-x-2 sm:pl-10 sm:pr-16">
                        <div className="text-black font-[700] text-[2rem] block sm:text-start">{Intl.NumberFormat("en-US").format(total)}</div> total
                        backers
                    </div>
                    <div className="text-[#a3a3a3]">
                        <div className="text-black font-[700] text-[2rem]">{left}</div> days left
                    </div>
                </div>
                <div className="w-[90%] h-4 bg-[#f4f4f4] my-8 mx-[5%] rounded-full">
                    <div className={`max-w-[100%] h-4 bg-[#3bb4ad] rounded-full`} style={{ width: `${(backed / 100000) * 100}%` }}></div>
                </div>
            </div>
        </>
    );
}
