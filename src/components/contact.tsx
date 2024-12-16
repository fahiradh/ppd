import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="h-auto py-20 px-10 bg-[#EFF9FF] flex justify-center items-center">
      <div className="w-full max-w-6xl flex justify-between gap-12">
        {/* Image Section */}
        <div className="relative w-1/2">
          <img
            className="w-580 h-844 object-cover rounded-xl"
            src="./mockup.png"
            alt="Placeholder"
          />
        </div>

        {/* Contact Form Section */}
        <div className="w-1/2 flex flex-col justify-start items-start gap-10">
          <div className="text-left w-full">
            <div className="text-[#2995d7] text-4xl font-bold font-['Poppins'] leading-10">
              Get in Touch!
            </div>
            <div className="text-[#064873] text-2xl font-normal font-['Poppins'] leading-7 mt-4">
              We’d love to hear from you! Whether you have questions, feedback, or need assistance, feel free to reach out to us.
            </div>
          </div>

          <div className="w-full flex flex-col gap-8">
            {/* Full name */}
            <div className="flex flex-col gap-2">
              <div className="text-[#052e4c] text-2xl font-medium font-['Poppins'] leading-7">
                Full Name
              </div>
              <input
                type="text"
                className="h-16 px-4 bg-white rounded-xl border border-[#2995d7] text-xl"
                placeholder="Your Full Name"
              />
            </div>

            {/* Email address */}
            <div className="flex flex-col gap-2">
              <div className="text-[#052e4c] text-2xl font-medium font-['Poppins'] leading-7">
                Email Address
              </div>
              <input
                type="email"
                className="h-16 px-4 bg-white rounded-xl border border-[#2995d7] text-xl"
                placeholder="Your Email Address"
              />
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-2">
              <div className="text-[#052e4c] text-2xl font-medium font-['Poppins'] leading-7">
                Subject
              </div>
              <input
                type="text"
                className="h-16 px-4 bg-white rounded-xl border border-[#2995d7] text-xl"
                placeholder="Subject"
              />
            </div>

            {/* Your message */}
            <div className="flex flex-col gap-2">
              <div className="text-[#052e4c] text-2xl font-medium font-['Poppins'] leading-7">
                Your Message
              </div>
              <textarea
                className="h-60 px-4 py-4 bg-white rounded-xl border border-[#2995d7] text-xl resize-none"
                placeholder="Type your message here..."
              />
            </div>

            {/* Submit Button */}
            <button
            type="submit"
            className="px-10 py-3 bg-[#05a3f4] rounded-xl flex justify-center items-center mt-6 hover:bg-[#0082D0]"
            >
                <div className="text-center text-white text-xl font-semibold font-['Poppins']">
                    Send Message
                </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
