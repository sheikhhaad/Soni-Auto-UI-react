import Footer from "../components/Footer";
import "./Appointment.css"

function Appointment() {
  return (
  <>
    <div className="flex flex-col lg:flex-row gap-8 p-8 min-h-screen">
      {/* Form Section */}
      <div style={{background: "#F3F3F3"}} className=" p-6 shadow-lg  w-full lg:w-3/4">
        <h1 className="text-2xl font-semibold mb-6">Service Appointment</h1>

        {/* Personal Information */}
        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">First Name <span className="text-red-500">*</span></label>
            <input type="text" className="w-full border p-2 " placeholder="First Name" required />
          </div>
          <div>
            <label className="block font-medium">Last Name <span className="text-red-500">*</span></label>
            <input type="text" className="w-full border p-2 " placeholder="Last Name" required />
          </div>
          <div>
            <label className="block font-medium">Email <span className="text-red-500">*</span></label>
            <input type="email" className="w-full border p-2 " placeholder="Email" required />
          </div>
          <div>
            <label className="block font-medium">Phone <span className="text-red-500">*</span></label>
            <input type="tel" className="w-full border p-2" placeholder="Phone" required />
          </div>
        </div>

        {/* Vehicle Information */}
        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Make</label>
            <input type="text" className="w-full border p-2 " placeholder="Make" />
          </div>
          <div>
            <label className="block font-medium">Model</label>
            <input type="text" className="w-full border p-2" placeholder="Model" />
          </div>
          <div>
            <label className="block font-medium">VIN</label>
            <input type="text" className="w-full border p-2 " placeholder="VIN" />
          </div>

          <div>
          <div className="relative w-[100%] mt-6">
              <select className="w-full p-2 border appearance-none pr-8" placeholder="Used cars in Toronto, Ontario">
              <option>Year</option>
              <option>2012</option>
              <option>2020</option>
                </select>
                <span style={{display:"flex" , alignItems:"center" ,fontSize:"20px" , gap:"10px"}} className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-auto text-black">
                  <span style={{marginBottom:"4px" , fontSize:"22px"}}>| </span><i className="fa-solid fa-angle-down"></i>
                </span>
              </div>
          </div>

        </div>

        {/* Appointment Information */}
        <h3 className="text-md font-bold mb-6 mt-4">Appointment Information</h3>

        <div className="mb-4">
          <label className="block font-medium">Date <span className="text-red-500">*</span></label>
          <input type="date" className="w-[50%] border p-2 " required />
        </div>
        <div className="mb-4">
          <label className="block font-medium">Comments</label>
          <textarea className="w-full h-40 border p-2 " placeholder="Comments"></textarea>
        </div>
        
        {/* Availability Button */}
        <button style={{textAlign:'center'}} className="bg-black focuss text-white p-3 text-center   lg:w-1/3 mt-4 mb-4">Check Availability</button>

        {/* Service List */}
        <div className="mt-8">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">Service List</h2>
            <button className="all-btn focuss text-white p-2 px-5">Add</button>
          </div>
          <div className="mb-2 mt-8">
            <div className="flex items-center gap-2">
            <input type="text" className="w-[60vw] border p-2 " placeholder="Request Service" />
            <img style={{width:"20px" , height:"20px" , objectFit:"contain" , cursor:"pointer"}} src="./assets/btn-site-border.png.png" alt="" />
            </div>
            <input type="text" className="w-[60vw] mt-6 border p-2 rounded" placeholder="Comment Service" />
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div style={{background: "#F3F3F3"}}  className=" card-bhai p-6 shadow-lg  w-full lg:w-1/4 h-max"> {/* Set height to max-content */}
        <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
        <div className="flex items-center gap-2 mb-4"> 
        <div>
          <img style={{width:"20px" , height:"20px", objectFit:"contain"}} src="./assets/p3.png" alt="" />
          </div>
        <p className="text-lg "> <strong>Phone:</strong> +1 639-525-1669</p>
        </div>

        <div className="flex items-start gap-2 mb-4">
        <div>
          <img style={{width:"25px" , height:"25px", objectFit:"contain" , marginTop:"4px"}} src="./assets/p2.png" alt="" />
          </div>
        <p className="text-lg "><strong>Address:</strong> 80 Manitoba St E, Moose Jaw, SK S6H 0A2, Canada</p>

        </div>

        <div className="mb-4">
          <div className="flex items-start gap-2 mb-4">
          <div>
          <img style={{width:"20px" , height:"20px", objectFit:"contain" , marginTop:"4px"}} src="./assets/p1.png" alt="" />
          </div>
          <h3 className="text-lg font-semibold">Business Hours</h3>
          </div>
          <p className="info-text">Monday-Friday <span style={{marginLeft:'20px'}}>11:00 AM - 07:00 PM</span> </p>
          <p className="info-text">Saturday <span style={{marginLeft:'65px'}}>11:00 AM - 07:00 PM</span></p>
          <p className="info-text">Sunday <span style={{marginLeft:'75px'}}>Closed</span></p>
        </div>
        <button className="all-btn text-white p-3 w-30">Get Directions</button>
      </div>            
    </div>

    <section>
      <Footer/>
    </section>
  
  
  </>
  );
}

export default Appointment;
