import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-transparent">
      <div className="gradient-background p-10 text-white">
        <div className="flex justify-between">
          <div>
            <h2 className="font-bold text-lg mb-16">Follow Us</h2>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {/* Icons would be inserted here */}
            </div>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-16">Subscribe to Our Newsletter</h2>
            {/* Newsletter Form */}
            <form className="flex flex-col space-y-4">
              <input type="email" placeholder="Email address:" className="p-2 rounded bg-opacity-50 bg-white text-black"/>
              <button type="submit" className="p-2 rounded bg-blue-500 hover:bg-blue-700 transition-colors">SUBMIT</button>
            </form>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex justify-between mt-10 border-t border-opacity-50 pt-5">
          {/* Learn Column */}
          <ul>
            {['Cryptocurrency', 'Programming', 'Technologies'].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          {/* Deals Column */}
          <ul>
            {['Preferred Company Coupon', 'Logispremium Coupon Code'].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Copyright */}
        <p className="mt-10 text-center text-gray-500">
          Copyright © 2024 Tech Blogger | Powered by Tech Blogger
        </p>
      </div>
    </footer>
  );
};

export default Footer;
