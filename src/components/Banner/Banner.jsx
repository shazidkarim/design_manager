
import banner_img_1 from "../../../assets/banner_img_1.png";
import banner_img_2 from "../../../assets/Line Pattern Header 1.1.svg";

const Banner = () => {
    return (
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 pt-8">
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:ml-8">
                    <h1 className="font-semibold text-[30px] md:text-[50px] mb-4 md:mb-8">Interior Design. Managed.</h1>
                    <p className="text-sm md:text-base mb-4 md:mb-8">Design Manager is all-in-one solution combines project management, accounting, and purchasing, keeping all your project details and finances in one place—and letting you run and grow your business with precision and efficiency.</p>
                    <div className="md:w-[75%] bg-[#218554] w-[75%] px-5 py-8">
                        <button className="text-white bg-[#3aa170] hover:bg-[#286b4b] px-6 py-3 md:px-10 md:py-5 rounded">
                            Start a Free Trial
                        </button>
                    </div>
                </div>
                <div className="md:w-1/2 md:mt-10 relative">
                    <img src={banner_img_1} className="w-[90%] mt-5"  alt="banner_img 1" />
                    <img src={banner_img_2} className="absolute top-0 right-0"  alt="banner img 2" />
                </div>
            </div>
        </div>
    );
};

export default Banner;