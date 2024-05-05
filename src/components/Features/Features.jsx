import feature1 from "../../../assets/feature1.png";
import feature2 from "../../../assets/feature2.png";
import feature3 from "../../../assets/feature3.png";
import feature4 from "../../../assets/feature4.png";
import feature5 from "../../../assets/feature5.png";
import feature6 from "../../../assets/feature6.png";
import { IoArrowForward } from "react-icons/io5";

const Features = () => {
    const features = [
        {
            img: feature1,
          title: 'Project Management',
          description: 'Keep your projects organized with industry-leading specification tools, and keep accurate time billing.',
        },
        {
            img: feature2,
          title: 'Accounting',
          description: 'Collect deposits, retainers, and payments from your clients and automatically ladder them up to firm-level accounting.',
        },
        {
            img: feature3,
          title: 'Purchasing',
          description: 'Issue purchase orders and track order status, plus construct complex multi-step work orders for custom jobs.',
        },
        {
            img: feature4,
          title: 'Reporting',
          description: 'Dozens of custom reports help you uncover actionable insights into your projects and firm-wide metrics.',
        },
        {
            img: feature5,
          title: 'Client Portal',
          description: 'Easily send proposals and invoices to your clients digitally and collect payments instantly to keep projects moving.',
        },
        {
            img: feature6,
          title: 'Advanced Features',
          description: 'For the most complex firms, we have modules for inventory management, data collection, point of sale, and showrooms.',
        },
      ];
    return (
       <>
       <h1 className="font-sans text-[40px] text-center m-10">Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-screen-2xl p-4 mb-20">
        {features.map((feature, index) => (
          <div key={index} className="bg-white hover:shadow rounded-lg p-10">
            <img className="w-[40%] m-auto p-5" src={feature.img} alt="" />
            <h3 className="text-lg text-center font-semibold mb-6 ">{feature.title}</h3>
            <p className="text-gray-600 text-center">{feature.description}</p>
            <IoArrowForward  className="m-auto  mt-8 hover:transform hover:translate-x-2 transition-transform "/> 
          </div>
        ))}
      </div>
       </>
    );
};
   

export default Features;