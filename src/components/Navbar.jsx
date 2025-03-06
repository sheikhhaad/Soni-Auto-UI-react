import { useState, useEffect } from 'react';
import '../components/Navbar.css';
import SimpleDropdown from './SimpleDropdown';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1093);
  const [openDropdown, setOpenDropdown] = useState(null); 

  const dropdownOptions1 = ['All Inventory', 'Appraise My Trade', 'Car Finder Page'];
  const dropdownLinks1 = ['/Inventory', '/MyTrade', '/CarFinder'];
  
  const dropdownOptions2 = ['Financing', 'Apply For Credit'];
  const dropdownLinks2 = ['/Finance', '/ApplyForCredit'];
  
  const dropdownOptions3 = ['Appointment', 'Order Part'];
  const dropdownLinks3 = ['/Appointment', '/Order'];
  
  const dropdownOptions4 = ['Image Gallery', 'Video Gallery'];
  const dropdownLinks4 = ['/ImageGallery', '/VideoGallery'];

  const dropdownOptions5 = ['Dealership', 'Contact Us', 'Direction'];
  const dropdownLinks5 = ['/Dealership', '/Contact', '/Direction'];

  const handleResize = () => {
    const currentWidth = window.innerWidth;
    setIsMobile(currentWidth <= 1093);
    if (currentWidth > 1093) {
      setIsDrawerOpen(false);
    }
  };

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleDropdownToggle = (dropdownIndex) => {
   
    setOpenDropdown((prev) => (prev === dropdownIndex ? null : dropdownIndex));
  };

  return (
    <>
      <div className='navbar-background-img items-center px-8 flex justify-between '>
        <div>
          <img className='main-logo-img' width={180} height={98} src="./assets/soni_auto_1 1.png" alt="Logo" />
        </div>

        {/* Desktop View */}
        {!isMobile && (
          <div className='p-2'>
            <div className="p-3 flex justify-end items-center gap-5">
              {/* Search Input with Icons */}
              <div className="relative">
                <span className="absolute left-3 top-2">
                  <img src="./assets/Vector (9).png" alt="Search Icon" />
                </span>
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-10 py-1 rounded-md focus:outline-none focus:ring"
                />
                <span style={{cursor:"pointer"}} className="absolute right-3 top-3">
                  <img src="./assets/Arrow 1.png" alt="Search Arrow" />
                </span>
              </div>

              {/* Center Phone Number and Icons */}
              <div className="flex items-center gap-3">
                <span className=' text-lg'>|</span>
                <img style={{cursor:"pointer"}} width={20} className="icon" src="./assets/SVG.png" alt="Main Icon" />
                <span style={{cursor:"pointer"}} className="font-semibold  text-lg  navbar-wala-bg">(123) 456-7890</span>
                <img style={{cursor:"pointer"}} width={20} className="icon" src="./assets/Link.png" alt="Link Icon" />
                <img style={{cursor:"pointer"}} width={20} className="icon" src="./assets/SVG (1).png" alt="SVG Icon" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              {/* Left Section for Home */}
              <div className="flex-shrink-0 text-center mr-8">
                <Link className=" font-wala-nav hoverr  navbar-wala-bg" to="/">Home</Link>
              </div>        

              {/* Right Section for Dropdowns */}
              <div className="flex gap-3">
                <SimpleDropdown 
                  title="Inventory" 
                  options={dropdownOptions1} 
                  links={dropdownLinks1} 
                  isOpen={openDropdown === 1} 
                  onToggle={() => handleDropdownToggle(1)} 
                />
                <SimpleDropdown 
                  title="Financing" 
                  options={dropdownOptions2} 
                  links={dropdownLinks2} 
                  isOpen={openDropdown === 2} 
                  onToggle={() => handleDropdownToggle(2)} 
                />
                <SimpleDropdown 
                  title="Services & Parts" 
                  options={dropdownOptions3} 
                  links={dropdownLinks3} 
                  isOpen={openDropdown === 3} 
                  onToggle={() => handleDropdownToggle(3)} 
                />
                <SimpleDropdown 
                  title="Media" 
                  options={dropdownOptions4} 
                  links={dropdownLinks4} 
                  isOpen={openDropdown === 4} 
                  onToggle={() => handleDropdownToggle(4)} 
                />
                <SimpleDropdown 
                  title="Dealership" 
                  options={dropdownOptions5} 
                  links={dropdownLinks5} 
                  isOpen={openDropdown === 5} 
                  onToggle={() => handleDropdownToggle(5)} 
                />
              </div>
            </div>
          </div>
        )}

        {/* Hamburger Icon for Mobile */}
        {isMobile && (
          <button className="p-2 " onClick={toggleDrawer}>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        )}
      </div>

      {/* Drawer for Mobile View */}
      {isDrawerOpen && isMobile && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 " onClick={() => setIsDrawerOpen(false)}>
          <div
            className="fixed top-0 right-0 w-3/4 max-w-xs h-full   navbar-wala-bg shadow-lg p-4 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button onClick={() => setIsDrawerOpen(false)} className=" navbar-wala-bg mb-4 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Drawer Content */}
            <div className="p-3 flex flex-col gap-5">
              {/* Search Input */}
              <div className="relative mb-4">
                <span className="absolute left-3 top-2">
                  <img src="./assets/Vector (9).png" alt="Search Icon" />
                </span>
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-10 py-1 text-black rounded-md focus:outline-none focus:ring w-full"
                />
                <span className="absolute right-3 top-3">
                  <img src="./assets/Arrow 1.png" alt="Search Arrow" />
                </span>
              </div>

              {/* Center Phone Number and Icons */}
              <div className="flex items-center gap-3 mb-4">
                <span className='text-lg navbar-wala-bg'>|</span>
                <img width={20} src="./assets/SVG.png" alt="Main Icon" />
                <span className="phone-nav font-semibold  text-lg  navbar-wala-bg">(123) 456-7890</span>
                <img width={20} src="./assets/Link.png" alt="Link Icon" />
                <img width={20} src="./assets/SVG (1).png" alt="SVG Icon" />
              </div>

              {/* Drawer Links */}
              <h3 className=" text-lg mb-2 home-1100 hoverr  navbar-wala-bg"><Link to="/">Home</Link></h3>
              <SimpleDropdown 
  title="Inventory" 
  options={dropdownOptions1} 
  links={dropdownLinks1} 
  isOpen={openDropdown === 1} 
  onToggle={() => handleDropdownToggle(1)} 
  style={{
    marginBottom: openDropdown === 1 ? '130px' : '0px',
    marginTop: openDropdown === 1 ? '0px' : '10px',
  }}
/>

              <SimpleDropdown 
                title="Financing" 
                options={dropdownOptions2} 
                links={dropdownLinks2} 
                isOpen={openDropdown === 2} 
                onToggle={() => handleDropdownToggle(2)} 
                style={{
                  marginBottom: openDropdown === 2 ? '80px' : '0px',
                  marginTop: openDropdown === 2 ? '0px' : '10px',
                }}
              />
              <SimpleDropdown 
                title="Services & Parts" 
                options={dropdownOptions3} 
                links={dropdownLinks3} 
                isOpen={openDropdown === 3} 
                onToggle={() => handleDropdownToggle(3)} 
                style={{
                  marginBottom: openDropdown === 3 ? '80px' : '0px',
                  marginTop: openDropdown === 3 ? '0px' : '10px',
                }}
              />
              <SimpleDropdown 
                title="Media" 
                options={dropdownOptions4} 
                links={dropdownLinks4} 
                isOpen={openDropdown === 4} 
                onToggle={() => handleDropdownToggle(4)}
                style={{
                  marginBottom: openDropdown === 4 ? '80px' : '0px',
                  marginTop: openDropdown === 4 ? '0px' : '10px',
                }} 
              />
              <SimpleDropdown 
                title="Dealership" 
                options={dropdownOptions5} 
                links={dropdownLinks5} 
                isOpen={openDropdown === 5} 
                onToggle={() => handleDropdownToggle(5)} 
                style={{
                  marginBottom: openDropdown === 5 ? '120px' : '0px',
                  marginTop: openDropdown === 5 ? '0px' : '10px',
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
