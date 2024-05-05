

const Features = () => {
    const features = [
        {
          title: 'Project Management',
          description: 'Keep your projects organized with industry-leading specification tools, and keep accurate time billing.',
        },
        {
          title: 'Accounting',
          description: 'Collect deposits, retainers, and payments from your clients and automatically ladder them up to firm-level accounting.',
        },
        {
          title: 'Purchasing',
          description: 'Issue purchase orders and track order status, plus construct complex multi-step work orders for custom jobs.',
        },
        {
          title: 'Reporting',
          description: 'Dozens of custom reports help you uncover actionable insights into your projects and firm-wide metrics.',
        },
        {
          title: 'Client Portal',
          description: 'Easily send proposals and invoices to your clients digitally and collect payments instantly to keep projects moving.',
        },
        {
          title: 'Advanced Features',
          description: 'For the most complex firms, we have modules for inventory management, data collection, point of sale, and showrooms.',
        },
      ];
    return (
       <>
       <h1 className="font-sans text-[40px] text-center m-10">Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto max-w-screen-2xl p-4">
        {features.map((feature, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <img src="" alt="" />
            <h3 className="text-lg font-semibold mb-2 ">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
       </>
    );
};
   

export default Features;