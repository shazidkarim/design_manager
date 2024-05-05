import banner_img_1 from "../../../assets/banner_img_1.png";

const Banner = () => {
    return (
       <>
       <div className="flex max-w-screen-2xl items-center pt-8 m-auto">
        <div className="">
            <h1 className="font-semibold text-start text-[50px] mb-8"> Interior Design. Managed.</h1>
            <p className="w-[75%] font-sans mb-8 ">Design Manager is all-in-one solution combines project management, accounting, and purchasing, keeping all your project details and finances in one place—and letting you run and grow your business with precision and efficiency.</p>
            <div className="bg-gray-500 w-[75%] px-8 py-12">
               <div>
               <button className="text-white">
                    start a free trial
                    </button>
               </div>
            </div>
        </div>
        <div>
            <img src={banner_img_1} alt="banner_img 1" />
        </div>
       </div>
       </>
    );
};

export default Banner;