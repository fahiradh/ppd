import React, { forwardRef } from 'react';

const About = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div ref={ref} className="h-auto px-20 py-10 flex-col justify-start items-center gap-10 inline-flex bg-[#EFF9FF]">
      {/* Title Section */}
      <div className="self-stretch text-center text-[#2995d7] text-4xl font-bold font-['Poppins'] leading-10">
        What is Dormify?
      </div>

      {/* Content Section */}
      <div className="self-stretch text-center text-[#052e4c] text-2xl font-medium font-['Poppins'] leading-9">
        <span>Based on a study by Indonesia Property Watch (IPW) in 2018, </span>
        <span className="font-bold">39.9% of students in Indonesia choose to live in dorms or apartments</span>
        <span>. Factors such as affordability, strategic location, and adequate facilities influence their decision. Dormify addresses these needs by providing a digital platform that simplifies the search for ideal housing, connects students with dorm owners, and offers tools to manage daily needs, making student living more organized, comfortable, and community-driven.</span>
      </div>
    </div>
  );
});

About.displayName = 'About';

export default About;