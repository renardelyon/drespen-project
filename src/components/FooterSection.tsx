import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto text-center px-4 font-montserrat">
        {/* Logo Section */}
        <div className="flex justify-center mb-6">
          <img
            loading="lazy"
            decoding="async"
            width="800"
            height="379"
            src="https://drespen.com/wp-content/uploads/2022/11/ezgif-3-dd69d7e08f-1024x485.webp"
            className="max-w-sm"
            alt="QX"
            srcSet="https://drespen.com/wp-content/uploads/2022/11/ezgif-3-dd69d7e08f-1024x485.webp 1024w, https://drespen.com/wp-content/uploads/2022/11/ezgif-3-dd69d7e08f-300x142.webp 300w, https://drespen.com/wp-content/uploads/2022/11/ezgif-3-dd69d7e08f-768x364.webp 768w, https://drespen.com/wp-content/uploads/2022/11/ezgif-3-dd69d7e08f.webp 1255w"
            sizes="(max-width: 800px) 100vw, 800px"
          />
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-white hover:text-yellow-500">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="text-white hover:text-yellow-500">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="text-white hover:text-yellow-500">
            <FaXTwitter size={20} />
          </a>
          <a href="#" className="text-white hover:text-yellow-500">
            <FaLinkedinIn size={20} />
          </a>
          <a href="#" className="text-white hover:text-yellow-500">
            <FaTiktok size={20} />
          </a>
          <a href="#" className="text-white hover:text-yellow-500">
            <FaEnvelope size={20} />
          </a>
        </div>

        {/* Terms and Conditions Links */}
        <div className="text-lg text-gray-300">
          <a href="#" className="hover:text-yellow-500 mx-4">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-yellow-500 mx-4">
            Privacy & Policies
          </a>
        </div>

        {/* Copyright Info */}
        <p className="text-lg mb-12 text-gray-500">
          Copyright © 2024 Quantum Global Ops (and subsidiary I Am Quantum Pty
          Ltd) – All Rights Reserved.
        </p>

        {/* Connect with Dr Espen */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-12 max-w-[800px] mx-auto font-montserrat">
          {/* Left Column: Social Links */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold">CONNECT WITH DR ESPEN</h3>
            <div className="flex justify-center md:justify-start space-x-4 my-6">
              <a href="#" className="hover:text-yellow-500">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="hover:text-yellow-500">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-yellow-500">
                <FaLinkedinIn size={20} />
              </a>
              <a href="#" className="hover:text-yellow-500">
                <FaEnvelope size={20} />
              </a>
            </div>
            <h3 className="font-semibold mb-4 ">GIVE US A CALL</h3>
            <p className="text-sm tracking-[0.2rem]">13000-LVL-UP</p>
            <p className="text-sm my-2 tracking-[0.2rem]">13000-568587</p>
          </div>
          <div className="lg:justify-self-end text-center lg:text-left">
            <div>
              <a href="#" className="hover:text-yellow-500">
                HOME
              </a>
            </div>
            <div className="my-2">
              <a href="#" className="hover:text-yellow-500">
                PRIVACY POLICY
              </a>
            </div>
            <div>
              <a href="#" className="hover:text-yellow-500">
                TERMS
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Info */}
        <p className="text-lg mb-12 text-gray-500">
          Copyright © 2024 Quantum Global Ops (and subsidiary I Am Quantum Pty
          Ltd) – All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
