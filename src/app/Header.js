export default function Header({ hamburger, onBurger }) {
    return (
        <>
            <div className="w-[100%] h-[300px] bg-cover absolute sm:hidden" style={{ backgroundImage: "url(/image-hero-mobile.jpg)" }}></div>
            <div className="w-[100%] h-[300px] bg-cover absolute max-sm:hidden" style={{ backgroundImage: "url(/image-hero-desktop.jpg)" }}></div>
            <div className="bg-gradient-to-b from-[rgba(0,0,0,0.3)] to-transparent w-[100%] h-[300px] absolute top-0"></div>
            <div className="top-8 relative mx-5 sm:mx-auto flex flex-row z-[2] max-w-[70rem] justify-between">
                <div className="w-[128px] h-[20px] sm:ml-4" style={{ backgroundImage: "url(/logo.svg)" }}></div>
                <div
                    onClick={onBurger}
                    className="w-[16px] h-[15px] absolute right-0 mt-2 min-[640px]:hidden bg-no-repeat"
                    style={hamburger ? { backgroundImage: "url(/icon-close-menu.svg)" } : { backgroundImage: "url(/icon-hamburger.svg)" }}
                ></div>
                <div className="hidden sm:flex gap-8 text-[#fffdff] sm:mr-4">
                    <span className="cursor-pointer">About</span>
                    <span className="cursor-pointer">Discover</span>
                    <span className="cursor-pointer">Get Started</span>
                </div>
            </div>
        </>
    );
}
