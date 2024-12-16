import React from 'react';
import { FaSearch, FaStar, FaUser, FaComments, FaMapMarkerAlt } from 'react-icons/fa';
import { IoIosAddCircle } from "react-icons/io";

const Services: React.FC = () => {
  return (
    <div className="h-auto w-full px-14 py-10 flex-col justify-start items-center inline-flex bg-[#EFF9FF]">
      {/* Title Section */}
      <div className="self-stretch text-center p-10">
        <span className="text-[#2995d7] text-4xl font-bold font-['Poppins'] leading-10">
          We offer quality, 
        </span>
        <span> </span>
        <span className="text-[#0167a9] text-4xl font-bold font-['Poppins'] leading-10">
            with the best services
        </span>
      </div>

      {/* Services Section */}
      <div className="self-stretch flex flex-wrap justify-center">
        {/* Service 1: Add new dorm */}
        <div className="h-44 p-7 bg-[#dff1ff] rounded-tl-3xl border-b-2 border-white justify-center items-center gap-7 inline-flex">
            <IoIosAddCircle className="w-14 h-14 relative text-[#015c92]" />
            <div className="flex-col justify-start items-start gap-4 inline-flex">
                <div className="self-stretch text-[#015c92] text-3xl font-bold font-['Poppins'] leading-10">Add new dorm</div>
                <div className="w-96 text-[#052e4c] text-2xl font-medium font-['Poppins'] leading-7">Easily add and discover dorm options around your campus.</div>
            </div>
        </div>

        {/* Service 2: Search dorm */}
        <div className="h-44 p-7 bg-[#dff1ff] rounded-tr-3xl border-l-2 border-b-2 border-white justify-center items-center gap-7 inline-flex">
            <FaSearch className="w-14 h-14 relative text-[#015c92]" />
            <div className="flex-col justify-start items-start gap-4 inline-flex">
                <div className="self-stretch text-[#015c92] text-3xl font-bold font-['Poppins'] leading-10">Search dorm</div>
                <div className="w-96 text-[#052e4c] text-2xl font-medium font-['Poppins'] leading-7">Find the perfect dorm that meets your needs.</div>
            </div>
        </div>
      </div>

      <div className="self-stretch flex flex-wrap justify-center">
        {/* Service 3: Rate dorm */}
        <div className="h-44 p-7 bg-[#dff1ff] border-b-2 border-white justify-center items-center gap-7 inline-flex">
            <FaStar className="w-14 h-14 relative text-[#015c92]" />
            <div className="flex-col justify-start items-start gap-4 inline-flex">
                <div className="self-stretch text-[#015c92] text-3xl font-bold font-['Poppins'] leading-10">Rate dorm</div>
                <div className="w-96 text-[#052e4c] text-2xl font-medium font-['Poppins'] leading-7">Share reviews and ratings to help others make informed choices.</div>
            </div>
        </div>

        {/* Service 4: User management */}
        <div className="h-44 p-7 bg-[#dff1ff] border-l-2 border-b-2 border-white justify-center items-center gap-7 inline-flex">
            <FaUser className="w-14 h-14 relative text-[#015c92]" />
            <div className="flex-col justify-start items-start gap-4 inline-flex">
                <div className="self-stretch text-[#015c92] text-3xl font-bold font-['Poppins'] leading-10">User management</div>
                <div className="w-96 text-[#052e4c] text-2xl font-medium font-['Poppins'] leading-7">Manage your profile seamlessly, including personal data and preferences.</div>
            </div>
        </div>
      </div>

      <div className="self-stretch flex flex-wrap justify-center">
        {/* Service 5: Forum */}
        <div className="h-44 p-7 bg-[#dff1ff] rounded-bl-3xl justify-center items-center gap-7 inline-flex">
            <FaComments className="w-14 h-14 relative text-[#015c92]" />
            <div className="flex-col justify-start items-start gap-4 inline-flex">
                <div className="self-stretch text-[#015c92] text-3xl font-bold font-['Poppins'] leading-10">Forum</div>
                <div className="w-96 text-[#052e4c] text-2xl font-medium font-['Poppins'] leading-7">Connect with other students, share experiences, and build your community.</div>
            </div>
        </div>

        {/* Service 6: Explore nearby */}
        <div className="h-44 p-7 bg-[#dff1ff] rounded-br-3xl border-l-2 border-white justify-center items-center gap-7 inline-flex">
            <FaMapMarkerAlt className="w-14 h-14 relative text-[#015c92]" />
            <div className="flex-col justify-start items-start gap-4 inline-flex">
                <div className="self-stretch text-[#015c92] text-3xl font-bold font-['Poppins'] leading-10">Explore nearby</div>
                <div className="w-96 text-[#052e4c] text-2xl font-medium font-['Poppins'] leading-7">Discover popular spots like restaurants & healthcare facilities near your dorm.</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
