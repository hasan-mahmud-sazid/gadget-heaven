import React from "react";

const HeroSection = () => {
  return (
    <div className="relative mb-60 md:mb-112.5">
      <div className="bg-[#9538E2] rounded-b-4xl pt-10 pb-44 md:pb-72 text-center text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-6xl font-bold">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="py-6 text-sm md:text-lg opacity-80 max-w-2xl mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button className="btn bg-white text-[#9538E2] hover:bg-gray-100 font-extrabold rounded-full px-10 border-none transition-all">
            Shop Now
          </button>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 w-[90%] -bottom-40 md:w-[85%] md:-bottom-64  lg:w-5xl lg:h-142.5 lg:-bottom-87.5">
        <div className="p-2 md:p-4 border-2 border-white/30 rounded-3xl md:rounded-[40px] bg-white/20 backdrop-blur-2xl">
          <div className="rounded-[18px] md:rounded-4xl overflow-hidden shadow-2xl bg-white">
            <img
              src="https://i.ibb.co.com/Y7KTvdnQ/image.png"
              alt="Gadget Banner"
              className="h-62.5 md:h-140.75 lg:w-265.5 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
