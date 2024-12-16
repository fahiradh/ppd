import React from 'react';
import { FaArrowDown } from 'react-icons/fa';

interface HeroProps {
    scrollToAbout: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToAbout }) => {

  return (
    <div className="h-auto py-4 px-4 flex flex-col justify-center items-center gap-8 bg-[#EFF9FF] relative">
      {/* Hero Image */}
      <div className="relative w-full">
        <img className="w-full h-auto rounded-3xl object-cover" src="./hero.png" alt="Hero" />

        {/* Text on top of image */}
        <div className="absolute left-[10%] top-[35%] text-white text-8xl font-bold font-['Poppins'] leading-tight">
          DORMIFY
        </div>
        <div className="absolute left-[10%] top-[50%] text-white text-4xl font-normal font-['Poppins'] leading-tight">
          Smart Living by Simple Choices
        </div>
        <button className="absolute left-[10%] top-[60%] flex items-center gap-2" onClick={scrollToAbout}>
            <div className="h-12 px-8 py-3 bg-[#05a3f4] rounded-xl flex items-center justify-center text-white text-base font-semibold font-['Poppins'] hover:bg-[#0082D0]">
                <span>Get Started</span>
                <FaArrowDown className="text-white text-xl ml-2 animate-bounce" />
            </div>
        </button>
      </div>

      {/* Statistics Section */}
      <div className="absolute top-[75%] right-[2%] flex justify-between gap-3">
        {/* Box 1 */}
        <div className="p-5 bg-[#77d2fe] rounded-xl flex flex-col justify-center items-center">
          <div className="text-[#052e4c] text-2xl font-bold font-['Poppins'] leading-10">1000+</div>
          <div className="text-center text-[#052e4c] text-md font-medium font-['Poppins'] leading-normal">Registered Dorms</div>
        </div>
        {/* Box 2 */}
        <div className="p-5 bg-gradient-to-tl from-[#2995d7] to-[#87e3ff] rounded-xl flex flex-col justify-center items-center">
          <div className="text-[#052e4c] text-2xl font-bold font-['Poppins'] leading-10">1000+</div>
          <div className="text-center text-[#052e4c] text-md font-medium font-['Poppins'] leading-normal">Registered Dorms</div>
        </div>
        {/* Box 3 */}
        <div className="p-5 bg-gradient-to-tl from-[#2995d7] to-[#87e3ff] rounded-xl flex flex-col justify-center items-center">
          <div className="text-[#052e4c] text-2xl font-bold font-['Poppins'] leading-10">5000+</div>
          <div className="text-center text-[#052e4c] text-md font-medium font-['Poppins'] leading-normal">Students Helped</div>
        </div>
        {/* Box 4 */}
        <div className="p-5 bg-gradient-to-tl from-[#2995d7] to-[#87e3ff] rounded-xl flex flex-col justify-center items-center">
          <div className="text-[#052e4c] text-2xl font-bold font-['Poppins'] leading-10">90%</div>
          <div className="text-center text-[#052e4c] text-md font-medium font-['Poppins'] leading-normal">Users Satisfied</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
