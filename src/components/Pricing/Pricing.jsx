const Pricing = () => {
  return (
    <div className="bg-[#218554] text-center py-10 px-4 md:px-10  md:py-20">
      <h1 className="font-medium font-serif text-2xl md:text-4xl text-[#f2f4f7] mb-8">
        The Do-Everything Platform to Scale Your Interior Design Business
      </h1>
      <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-4">
        <button className="bg-white hover:bg-[#218554] hover:border hover:text-white p-4 rounded-lg font-sans mb-4 md:mb-0 md:mr-4">Start A Free Trial</button>
        <button className="text-white border rounded-lg p-4 md:px-8">See Pricing</button>
      </div>
      <p className="text-white text-base mt-8">✓ Zero Commitment & No Credit Card Required</p>
    </div>
  );
};

export default Pricing;

