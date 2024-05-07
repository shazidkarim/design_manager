import { useState } from "react";
import logo from "../../../../assets/design_manager_logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleFeaturesMenu = () => {
    setIsFeaturesOpen(!isFeaturesOpen);
  };
  return (
    <nav className="bg-[#f9fafb] text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Design Manager" className="h-8 mr-4" />
          <ul className="hidden md:flex list-none">
            <li className="nav-item">
              <a href="#" className="text-black hover:text-blue-500 px-3 py-2">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="text-black hover:text-blue-500 px-3 py-2">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="text-black hover:text-blue-500 px-3 py-2">
                Resources
              </a>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none focus:text-black"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto`}
        >
          <ul className="md:flex md:flex-row list-none ">
            <li className="nav-item">
              <a href="#" className="text-black hover:text-blue-500 px-8 py-2">
                Log In
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="bg-[#218554] hover:bg-[#266848] text-white lg:font-semibold lg:px-5 lg:py-3 rounded"
              >
                Start a Free Trial
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import { useState } from "react";
// import logo from "../../../../assets/design_manager_logo.svg";

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <div>
//             <nav className="bg-[#f9fafb] text-black p-4">
//                 <div className="container mx-auto flex justify-between items-center">
//                     {/* Logo */}
//                     <div className="flex items-center">
//                         <img src={logo} alt="Design Manager" className="h-8 ml-4 mr-4" />

//                     </div>

//                     {/* Hamburger Menu (Mobile) */}
//                     <div className="block lg:hidden">
//                         <button onClick={() => setIsOpen(!isOpen)}className="text-black focus:outline-none">
//                             <svg  className="h-6 w-6"  fill="none"  viewBox="0 0 24 24"  stroke="currentColor"  aria-hidden="true">
//                                 {isOpen ? (
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M6 18L18 6M6 6l12 12"
//                                     />
//                                 ) : (
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M4 6h16M4 12h16m-7 6h7"
//                                     />
//                                 )}
//                             </svg>
//                         </button>
//                     </div>

//                     {/* Menu Items (Mobile) */}
//                     {isOpen && (
//                         <div className="lg:hidden">
//                             <ul className="flex flex-col list-none">
//                                 <li className="nav-item">
//                                     <a href="#" className="text-black hover:text-blue-500 px-3 py-2">Features</a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a href="#" className="text-black hover:text-blue-500 px-3 py-2">Pricing</a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a href="#" className="text-black hover:text-blue-500 px-3 py-2">Resources</a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a href="#" className="text-black hover:text-blue-500 px-3 py-2">Log In</a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a href="#" className="bg-[#218554] hover:bg-[#266848] text-white font-mono rounded">Start a Free Trial</a>
//                                 </li>
//                             </ul>
//                         </div>
//                     )}

//                     {/* Menu Items (Desktop) */}
//                     <div className="hidden lg:flex">
//                         <ul className="flex list-none">
//                             <li className="nav-item">
//                                 <a href="#" className="text-black hover:text-blue-500 px-3 py-2">Features</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a href="#" className="text-black hover:text-blue-500 px-3 py-2">Pricing</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a href="#" className="text-black hover:text-blue-500 px-3 py-2">Resources</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a href="#" className="text-black hover:text-blue-500 px-8 py-2">Log In</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a href="#" className="bg-[#218554] hover:bg-[#266848] text-white font-semibold px-5 py-3 rounded">Start a Free Trial</a>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     );
// };

// export default Navbar;
