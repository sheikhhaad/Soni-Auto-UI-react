import Footer from "../components/Footer";
import "./Direction.css"

const Direction = () => {
    return (
      <>
      
      <div className="flex flex-col lg:flex-row gap-8 p-8  h-auto">
        {/* Map Section */}
        <div className="p-6 shadow-lg rounded-md w-[60%] h-[auto] diret-wala"  style={{backgroundColor:"#F3F3F3"}}>
          
          <h1 className="text-3xl font-bold mb-6">Get Directions</h1>
          {/* Google Maps Embed */}
          <div className="w-full h-[100%]  lg:h-full rounded-md overflow-hidden">
            <iframe className=" ifram"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.2339370100154!2d-105.55868822353861!3d50.39324857147378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c51cb7e380dff%3A0x6f8c257d3428d9c3!2s80%20Manitoba%20St%20E%2C%20Moose%20Jaw%2C%20SK%20S6H%200A2%2C%20Canada!5e0!3m2!1sen!2sus!4v1698420000000!5m2!1sen!2sus"
              width="100%"
              height="500px"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
  
        {/* Contact Information Section */}
        <div className=" p-6 shadow-lg rounded-md w-[35%] h-max  diret-wala " style={{backgroundColor:"#F3F3F3"}}> {/* Set height to max-content */}
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
          <p>Monday-Friday <span style={{marginLeft:'20px'}}>11:00 AM - 07:00 PM</span> </p>
          <p>Saturday <span style={{marginLeft:'65px'}}>11:00 AM - 07:00 PM</span></p>
          <p>Sunday <span style={{marginLeft:'75px'}}>Closed</span></p>
        </div>
        <button className="all-btn text-white p-3 w-30">Get Directions</button>
      </div>
      </div>

      <section className="diewct-3000">
        <Footer/>
      </section>
      </>
    );
  }
  
  export default Direction;
  