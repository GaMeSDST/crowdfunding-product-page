export default function Hamburger({ onPress }) {
    return (
        <>
            <div onClick={onPress} className={`w-[100%] h-[100%] fixed inset-0 bg-black opacity-25 z-[1]`}></div>
            <div className="bg-white w-[90%] max-w-[22rem] h-44 absolute right-4 top-20 rounded-lg z-[4] text-black font-[500] text-[1rem] flex flex-col">
                <div className="pl-6 mt-4 cursor-pointer">About</div>
                <div className="border-y-2 pl-6 my-4 py-4 cursor-pointer">Discover</div>
                <div className="pl-6 cursor-pointer">Get Started</div>
            </div>
        </>
    );
}
