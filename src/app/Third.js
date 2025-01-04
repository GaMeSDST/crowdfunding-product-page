import ValuesContext from "./Context.js";

function hidden(left) {
    if (left == 0) return true;
    return false;
}

function Reward({ title, price, desc, left, onPress }) {
    return (
        <>
            <div className={`rounded-lg border-2 p-4 mb-8 ${hidden(left) && "opacity-50"}`}>
                <div className="mb-4 mt-2">
                    <div className="text-black font-[700] text-[1rem] mb-0.5">{title}</div>
                    <div className="text-[#82bab1]">Pledge ${price} or more</div>
                </div>
                <div className="text-[#a3a3a3] sm:w-[55ch] sm:text-[15px] mb-4 leading-7">{desc}</div>
                <div className="sm:flex sm:justify-between sm:items-center sm:mt-6 sm:mb-4">
                    <div className="flex items-center text-[#a3a3a3] mb-2">
                        <span className="text-black font-[700] text-[2rem] mr-2">{left}</span>
                        left
                    </div>
                    <button
                        onClick={onPress}
                        disabled={hidden(left)}
                        id={title}
                        className={`bg-[#3cb3ab] rounded-full py-4 px-8 text-white font-[700] ${hidden(left) ? "cursor-auto" : "hover:bg-[#157a74]"}`}
                    >
                        {hidden(left) ? "Out of Stock" : "Select Reward"}
                    </button>
                </div>
            </div>
        </>
    );
}

export default function Third({ data, onPress }) {
    return (
        <>
            <div className="bg-white top-72 relative mx-6 px-4 py-8 sm:w-[39rem] sm:mx-auto sm:my-0 sm:px-8 rounded-xl">
                <div className="text-black font-[700] mb-4 text-[1.4rem]">About this project</div>
                <div className="text-[#a3a3a3] min-w-[27ch] text-sm mb-4">
                    The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing
                    height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work,
                    helping you stay focused on the task at hand.
                </div>
                <div className="text-[#a3a3a3] text-sm min-w-[27ch] mb-6">
                    Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens,
                    and USB sticks to be stored under the stand.
                </div>
                <Reward
                    title="Bamboo Stand"
                    price="25"
                    desc="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
                    left={data.firstItemLeft}
                    onPress={onPress}
                />
                <Reward
                    title="Black Edition Stand"
                    price="75"
                    desc="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
                    left={data.secondItemLeft}
                    onPress={onPress}
                />
                <Reward
                    title="Mahogany Special Edition"
                    price="200"
                    desc="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
                    left={data.thirdItemLeft}
                    onPress={onPress}
                />
            </div>
        </>
    );
}
