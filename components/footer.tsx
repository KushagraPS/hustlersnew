import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Image } from "next/image"; // Import Image component from next/image
import { MdOutlineAlternateEmail, MdOutlineLocalPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-black">
      <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col lg:flex-row gap-4 mb-8 lg:mb-0">
          {/* Logo */}
          <div className="mb-4 lg:mb-0">
            {/* Replace img element with Image component */}
            <Image src="https://pedalstart.com/startup/images/2021-05-logo.png" alt="Logo" width={120} height={40} />
          </div>
          {/* About */}
          <div>
            <h2 className="text-lg font-bold mb-2">About SaaSHustlers</h2>
            <p className="text-gray-600 dark:text-gray-400">Brief description about the company or website.</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 mb-8 lg:mb-0">
          {/* Quick Links */}
          <h2 className="text-lg font-bold mb-2">Quick Links</h2>
          <ul className="text-gray-600 dark:text-gray-400">
            <li><Link href="/about">Home</Link></li>
            <li><Link href="/services">Events</Link></li>
            <li><Link href="/portfolio">Resources</Link></li>
            <li><Link href="/contact">Tools</Link></li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 mb-8 lg:mb-0">
          {/* Quick Links */}
          <h2 className="text-lg font-bold mb-2">Pages</h2>
          <ul className="text-gray-600 dark:text-gray-400">
            <li><Link href="/about">Terms & Conditions</Link></li>
            <li><Link href="/services">Privacy & Policy</Link></li>
            <li><Link href="/services">Guidelines</Link></li>
            {/* <li><Link href="/portfolio">Resources</Link></li>
            <li><Link href="/contact">Tools</Link></li> */}
          </ul>
        </div>
        <div className="flex flex-col gap-4 mb-8 lg:mb-0">
          {/* Quick Links */}
          <h2 className="text-lg font-bold mb-2">Events</h2>
          <ul className="text-gray-600 dark:text-gray-400">
            <li><Link href="/about">Online</Link></li>
            <li><Link href="/services">Offline</Link></li>
            {/* <li><Link href="/portfolio">Resources</Link></li>
            <li><Link href="/contact">Tools</Link></li> */}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          {/* Social Links */}
          <div className="flex gap-2">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
              <FaLinkedin />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
              <FaGithub />
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
              <FaWhatsapp />
            </a>
          </div>
          {/* Events */}
         
        </div>
      </div>
      {/* Copyright */}
      <div className="bg-gray-200 dark:bg-gray-900 py-4">
        <div className="container mx-auto text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2024 SaaSHustlers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
