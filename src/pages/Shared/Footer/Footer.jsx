

const Footer = () => {
    return (
        <footer className="bg-[#f9fafb] text-black py-6 pt-10 ">
        <div className="container mx-auto flex flex-wrap justify-between p-5">
          <div className="w-full md:w-1/2 lg:w-auto mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Resources</h3>
            <ul>
              <li>Design Market</li>
              <li>Calendar</li>
              <li>Our Partners</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-auto mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Features</h3>
            <ul>
              <li>Project Management</li>
              <li>Purchasing</li>
              <li>Accounting</li>
              <li>Client Portal</li>
              <li>Reporting</li>
              <li>Advanced Features</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-auto mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Support</h3>
            <ul>
              <li>Get Support</li>
              <li>Login</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-auto">
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <ul>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p className="text-sm">&copy;2024 Design Manager, Inc.</p>
          <div className="mt-2">
            <a href="#" className="text-blue-300 hover:text-blue-400 mr-4">Terms</a>
            <a href="#" className="text-blue-300 hover:text-blue-400 mr-4">Cookies</a>
            <a href="#" className="text-blue-300 hover:text-blue-400">Privacy</a>
          </div>
        </div>
      </footer>
    );
};

export default Footer;