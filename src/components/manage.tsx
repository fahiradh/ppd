import React from 'react';

const Manage: React.FC = () => {
  return (
    <div className="h-auto px-20 py-10 bg-[#052e4c] flex flex-col justify-start items-center gap-10">
      {/* Title Section */}
      <div className="text-center">
        <span className="text-[#2995d7] text-4xl font-bold font-['Poppins'] leading-10">
          Manage and Market
        </span>
        <span>&nbsp;</span>
        <span className="text-[#dff1ff] text-4xl font-bold font-['Poppins'] leading-10">
          your Dorm with Ease
        </span>
      </div>

      {/* Subheading Section */}
      <div className="h-16 flex flex-col justify-start items-center gap-6">
        <div className="text-center">
          <span className="text-[#eff9ff] text-2xl font-medium font-['Poppins'] leading-9">
            Dormify isn’t just for students—it’s also for
          </span>
          <span>&nbsp;</span>
          <span className="text-[#eff9ff] text-2xl font-bold font-['Poppins'] leading-9">
            dorm owners
          </span>
          <span>&nbsp;</span>
          <span className="text-[#eff9ff] text-2xl font-medium font-['Poppins'] leading-9">
            who want to expand their reach and increase the visibility of their properties.
          </span>
        </div>
      </div>

      {/* Features Section */}
      <div className="flex justify-center gap-10">
        {/* Add New Dorms */}
        <div className="flex-col justify-start items-center gap-2 text-center">
          <div className="text-[#2995d7] text-2xl font-bold font-['Poppins'] leading-10">
            Add New Dorms
          </div>
          <div className="w-72 text-[#eff9ff] text-xl font-medium font-['Poppins'] leading-9">
            Easily add detailed information about available dorms.
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-3 h-3 bg-[#2FBCFF] rounded-full" />
          <div className="w-[60px] h-[4px] bg-[#2FBCFF]" />
          <div className="w-3 h-3 bg-[#2FBCFF] rounded-full" />
        </div>

        {/* Showcase Facilities */}
        <div className="flex-col justify-start items-center gap-2 text-center">
          <div className="text-[#2995d7] text-2xl font-bold font-['Poppins'] leading-10">
            Showcase Facilities
          </div>
          <div className="w-72 text-[#eff9ff] text-xl font-medium font-['Poppins'] leading-9">
            Highlight your dorm’s features to attract more tenants.
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-3 h-3 bg-[#2FBCFF] rounded-full" />
          <div className="w-[60px] h-[4px] bg-[#2FBCFF]" />
          <div className="w-3 h-3 bg-[#2FBCFF] rounded-full" />
        </div>

        {/* Receive Reviews */}
        <div className="flex-col justify-start items-center gap-2 text-center">
          <div className="text-[#2995d7] text-2xl font-bold font-['Poppins'] leading-10">
            Receive Reviews
          </div>
          <div className="w-72 text-[#eff9ff] text-xl font-medium font-['Poppins'] leading-9">
            Collect feedback to build a positive reputation.
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <button className="px-10 py-2 bg-[#05A3F4] rounded-xl text-center hover:bg-[#0082D0]">
        <div className="text-white text-xl font-semibold font-['Poppins']">
            Join Dormify and start attracting more tenants with ease!
        </div>
      </button>
    </div>
  );
};

export default Manage;
