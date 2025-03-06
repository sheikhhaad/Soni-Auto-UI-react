import Footer from "../components/Footer";

const ApplyForCredit = () => {
  return (
  <>
  
  <div className="p-6  px-10 credit-div">
      {/* Main Form */}
      <div style={{background: "#F3F3F3" }}  className="shadow-lg rounded-lg div-credit flex  flex-col ">
        <div className="  p-6 div-credit">
          <h2 className="text-3xl font-bold mb-2">Apply For Credit</h2>
          <h3 className="text-md font-bold mb-2">Get approved from home!</h3>
          <p className="left-txt text-gray-600 mb-4">Get approved from home! Please fill out the secure credit application below.</p>

          {/* Personal Information */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 input-sapce">
              <input type="text" placeholder="First Name" className="p-2 border "/>
              <input type="text" placeholder="Last Name" className="p-2 border "/>
              <input type="email" placeholder="Email" className="p-2 border "/>
              <input type="tel" placeholder="Phone" className="p-2 border "/>
              <div className="relative w-[100%]">
              <select className="w-full p-2 border  appearance-none pr-8" placeholder="Used cars in Toronto, Ontario">
              <option>Salutation</option>
              <option>MR</option>
              <option>Miss</option>
                </select>
                <span style={{display:"flex" , alignItems:"center" ,fontSize:"20px" , gap:"10px"}} className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-auto text-black">
                  <span style={{marginBottom:"4px" , fontSize:"22px"}}>| </span><i className="fa-solid fa-angle-down"></i>
                </span>
              </div>

              <div className="relative w-[100%]">
              <select className="w-full p-2 border  appearance-none pr-8" placeholder="Used cars in Toronto, Ontario">
              <option>Marital Status</option>
              <option>Maried</option>
              <option>Un maried</option>
                </select>
                <span style={{display:"flex" , alignItems:"center" ,fontSize:"20px" , gap:"10px"}} className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-auto text-black">
                  <span style={{marginBottom:"4px" , fontSize:"22px"}}>| </span><i className="fa-solid fa-angle-down"></i>
                </span>
              </div>
              <input type="text" placeholder="Birth Date" className="p-2 border  col-span-2 w-[50%]"/>
            </div>
          </div>

          {/* Other Information */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Other Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

            <div className="relative w-[100%]">
              <select className="w-full p-2 border  appearance-none pr-8" placeholder="Used cars in Toronto, Ontario">
              <option>Bankruptcy</option>
              <option>UBL</option>
              <option>HBL</option>
                </select>
                <span style={{display:"flex" , alignItems:"center" ,fontSize:"20px" , gap:"10px"}} className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-auto text-black">
                  <span style={{marginBottom:"4px" , fontSize:"22px"}}>| </span><i className="fa-solid fa-angle-down"></i>
                </span>
              </div>

                <div className="relative w-[100%]">
              <select className="w-full p-2 border rounded-md appearance-none pr-8" placeholder="Used cars in Toronto, Ontario">
              <option>Repossession</option>
              <option>Repossession</option>
              <option>Repossession</option>
                </select>
                <span style={{display:"flex" , alignItems:"center" ,fontSize:"20px" , gap:"10px"}} className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-auto text-black">
                  <span style={{marginBottom:"4px" , fontSize:"22px"}}>| </span><i className="fa-solid fa-angle-down"></i>
                </span>
              </div>

               <div className="relative w-[100%]">
              <select className="w-full p-2 border  appearance-none pr-8" placeholder="Used cars in Toronto, Ontario">
              <option>Is Co-signer Available?</option>
              <option>Is signer Available?</option>
              <option>Is Co-signer Not Available?</option>
                </select>
                <span style={{display:"flex" , alignItems:"center" ,fontSize:"20px" , gap:"10px"}} className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-auto text-black">
                  <span style={{marginBottom:"4px" , fontSize:"22px"}}>| </span><i className="fa-solid fa-angle-down"></i>
                </span>
              </div>

               <div className="relative w-[100%]">
              <select className="w-full p-2 border  appearance-none pr-8" placeholder="Used cars in Toronto, Ontario">
              <option>Rate Your Credit</option>
              <option> Credit</option>
              <option>Rate Your Credit</option>
                </select>
                <span style={{display:"flex" , alignItems:"center" ,fontSize:"20px" , gap:"10px"}} className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-auto text-black">
                  <span style={{marginBottom:"4px" , fontSize:"22px"}}>| </span><i className="fa-solid fa-angle-down"></i>
                </span>
              </div>
            </div>
          </div>

          {/* Vehicle Information */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Choose Your Vehicle</h3>
            <input type="text" placeholder="Search Year Make Model" className="p-2 w-full border rounded mb-4"/>
            <div className="apply-kara flex gap-4 mb-4 ">
        
              <button className=" left-btn all-btn text-white   w-full">Advance Search</button>
              <button className=" left-btn all-btn text-white   w-full">Appraise My Trade</button>
              <button className="left-btn all-btn text-white  w-full">Car Finder</button>
            </div>
          </div>

          {/* Agreement Text */}
          <p className="left-txt text-sm text-gray-600 mb-4">
            I agree that by submitting this application, I authorize and give this dealership, as well as any potential financing source this dealership presents this application to, my consent to obtain my credit report from any credit reporting agency used to complete an investigation of my credit.
          </p>
          <p className="p text-sm text-gray-600 mb-4">
            Disclaimer: By submitting this application, you authorize us to run your credit report.
          </p>

          {/* Submit Button */}
          <button className="all-btn text-white py-2 px-4 w-25  ">Get Approved</button>
        </div>

        {/* Sidebar Help */}
     
      </div>
      <div  className="left-side div-credit p-6 flex flex-col items-start" style={{backgroundColor:"#f5f5f5"}}>
          <h3 className="text-lg font-semibold mb-4">Online Credit Application</h3>
          <p className="text-gray-600 mb-4 ">
            Need help filling out your application? We would be happy to help you.
          </p>
          <button className="all-btn text-white py-2 px-4 all-btn">Contact Us</button>
        </div>
    </div>

    <section>
      <Footer/>
    </section>
  </>
  );
}

export default ApplyForCredit

