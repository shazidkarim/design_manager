const Testimonials = () => {
  const testimonials = [
    {
      rating: "*****",
      quote:
        "Design Manager keeps my team organized and running smoothly. It lets us focus on being creative rather than billing and project management.",
      name: "Matthew P. Smyth",
      title: "Principal Designer",
    },
    {
      rating: "****",
      quote:
        "I tried QuickBooks and it did not fit her business so that is when she switched to industry-specific software, Design Manager.",
      name: "Bria Hammel",
      title: "Bria Hammel Interiors",
    },
    {
      rating: "*****",
      quote:
        "Design Manager Provides Peace of Mind for Business Owners. I love Design Manager because I do not have to think about it.",
      name: "Thom Filicia",
      title: "CEO at Thom Filicia",
    },
  ];
  return (
    <>
      <div className="bg-[#f2f4f7] pb-20">
        <h1 className="font-sans text-[50px] text-center pt-10">
          Your Trusted, Silent Partner
        </h1>
        <p className="text-center text-[#000000] font-extralight text-[19px] pb-5 ">
          Industry leaders in onboarding, training, and customer support.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-screen-2xl  p-4">
          {testimonials.map((testimonial, index) => (
            <>
              <div
                key={index}
                className="bg-[#ffffff] shadow-md rounded-lg p-10"
              >
                <p className="text-[40px]">{testimonial.rating}</p>
                <blockquote>
                  <p className="text-black font-sans mb-4">{testimonial.quote}</p>
                </blockquote>
                <div className="flex items-center">
                  <div>
                    <h4 className="text-lg font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
