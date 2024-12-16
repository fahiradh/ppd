import React from 'react';
import { FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#2995D7] to-[#87E3FF] py-10 px-16 rounded-t-[24px]">
      <div className="flex flex-col md:flex-row items-start justify-between gap-8">
        {/* Logo and Description */}
        <div className="flex flex-col items-center gap-5">
          <img
            className="w-[123px] h-[104px]"
            alt="Frame"
            src="./logo-footer.png"
          />
          <div className="text-center">
            <h1 className="text-white text-2xl font-bold">Dormify</h1>
            <p className="text-white text-lg">Smart living by simple choices</p>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row gap-8 text-white">
          <div className="flex flex-col gap-4">
            <div className="text-xl font-medium">Home</div>
            <div className="text-xl font-medium">About</div>
            <div className="text-xl font-medium">Features</div>
            <div className="text-xl font-medium">Contact Us</div>
          </div>

          {/* Contact Info Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <div className="text-xl font-medium">📍</div>
              <p className="text-xl font-medium">Jl. Raya Kampus No. 123, Jakarta, Indonesia</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-xl font-medium">📧</div>
              <p className="text-xl font-medium">support@dormify.com</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-xl font-medium">📞</div>
              <p className="text-xl font-medium">+62 812-3456-7890</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-xl font-medium">🕒</div>
              <p className="text-xl font-medium">Monday - Friday: 09:00 AM - 06:00 PM</p>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center md:items-start gap-5">
          <div className="text-white text-xl font-medium">Visit our social media!</div>
          <div className="flex gap-6">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white text-3xl hover:text-[#C13584]" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-white text-3xl hover:text-[#FF0000]" />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="text-white text-3xl hover:text-[#000000]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
