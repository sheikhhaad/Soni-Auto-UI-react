import "../../src/App.css"
import Footer from "../components/Footer"

const ContactUs = () => {
  return (
    <>
    <div className="form1-back">
      <img src="./assets/back-Img.png" alt="" />
    </div> 

   <div className="container mx-auto">

   <div className="flex-bhai min-h-screen flex flex-col items-center justify-center p-4 relative ">
      {/* Background image container */}
      <div
        className=" w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('')" }}
      ></div>

      <div
          className=" contact-infoo flex flex-col p-6 rounded-lg shadow-lg  lg:w-1/3 space-y-4 " // Adjusted right and top
          style={{background: "#F3F3F3"}} 
        >
          <h3 className="text-xl font-semibold">Contact Information</h3>
          <div className="flex items-center space-x-2">
            <img src="./assets/phone.png" alt="" className="w-5 h-5" />
            <span>Phone: <strong>+1 629-5235-1669</strong></span>
          </div>
          <div className="flex items-center space-x-2">
            <img src="./assets/p2.png" alt="" className="w-5 h-5" />
            <span>Address: <strong>50 Manitoba St E, Moose Jaw, SK S6H 0A2, Canada</strong></span>
          </div>
          <div className="mt-4">
            <h4 className="text-lg font-medium flex items-center space-x-2">
              <img src="./assets/p1.png" alt="" className="w-5 h-5" />
              <span>Business Hours</span>
            </h4>
            <p>Monday-Friday: 11:00 AM - 07:00 PM</p>
            <p>Saturday: 11:00 AM - 07:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
          <button type="button" className="all-btn text-white py-2 px-4  w-fit mt-4">
            Get Directions
          </button>
        </div>

      <div className="contact-uss flex flex-col lg:flex-row justify-center w-full max-w-7xl p-4" style={{marginRight:"35vw"}}>
        {/* Contact Form */}
        <div style={{background: "#F3F3F3"}}  className=" contact-uss flex flex-col  p-6   lg:w-2/3 space-y-4">
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <form className="space-y-4 ">
            <div className="flex flex-col ">
              <label className="text-sm font-medium">First Name (required)</label>
              <input type="text" placeholder="First Name" className="border border-gray-300 p-1 w-[90%]" />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium">Last Name (required)</label>
              <input type="text" placeholder="Last Name" className="border border-gray-300  p-1 w-[90%]" />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium">Email (required)</label>
              <input type="email" placeholder="Email" className="border border-gray-300  p-1 w-[90%]" />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium">Phone (required)</label>
              <input type="tel" placeholder="Phone" className="border border-gray-300  p-1 w-[90%]" />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium">Search (Year Make Model)</label>
              <input type="text" placeholder="Search" className="border border-gray-300  p-1 w-[90%]" />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium">Message</label>
              <textarea placeholder="Message" className="border border-gray-300  p-1 h-24 w-[90%]"></textarea>
            </div>
            <button style={{display:"flex" , justifyContent:"center" , alignItems:"center"}} type="submit" className="all-btn text-white py-2 w-40 p-5 ">
              Send
            </button>
          </form>
        </div>

        {/* Contact Information - Fixed Position on the Right */}
        <div
          className="contact-info flex flex-col bg-white p-6    lg:w-1/3 space-y-4 absolute  right-10 top-[-10vw] " // Adjusted right and top
          style={{background: "#F3F3F3"}} 
        >
          <h3 className="text-lg font-bold">Contact Information</h3>
          <div className="flex items-center space-x-2">
            <img src="./assets/p3.png" alt="phone icon" className="w-5 h-5" />
            <span><strong>Phone: </strong>+1 629-5235-1669</span>
          </div>
          <div className="flex items-start space-x-2 ">
            <img src="./assets/p2.png" alt="location icon" className="w-5 h-5 mt-1" />
            <span><strong>Address :</strong>  <br /><span>50 Manitoba St E, Moose Jaw, SK S6H 0A2, Canada</span></span>
          </div>
          <div className="mt-4">
            <h4 className="text-lg font-medium flex items-center space-x-2">
              <img src="./assets/p1.png" alt="clock icon" className="w-5 h-5" />
              <span>Business Hours</span>
            </h4>
            <div className="flex justify-between p-1 px-7">
            <p>Monday-Friday: </p>
            <p>11:00 AM - 07:00 PM</p>
            </div>

            <div className="flex justify-between p-1 px-7">
            <p>Saturday:</p>
            <p> 11:00 AM - 07:00 PM</p>
            </div>

            <div className="flex justify-between p-1 px-7">
            <p>Sunday:</p>
            <p > Closed</p>
            </div>

          </div>
          <button type="button" className="all-btn text-white py-2 px-4  w-fit mt-4">
            Get Directions
          </button>
        </div>
      </div>
    </div>

   </div>
    
    <section>
      <Footer/>
    </section>
  </>
  )
}

export default ContactUs
