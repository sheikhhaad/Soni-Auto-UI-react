import Footer from "../components/Footer";
import "./Order.css"
const Order = () => {

  return (
    <>
      
      {/* Navigation Tabs */}
      <div style={{borderBottom:"2px solid gray" , margin:"20px 20px"}} className="flex flex-wrap justify-between items-center gap-5 p-4  mb-6">
        <div className="flex space-x-4 order-wala-btn">
          <button className="font-semibold text-gray-700 hover:text-red-500">Personal Information</button>
          <button className="font-semibold text-gray-700 hover:text-red-500">Vehicle Information</button>
          <button className="font-semibold text-gray-700 hover:text-red-500">Part List</button>
        </div>
        <button  className="black-hover search-part text-white  rounded-md">Search Parts</button>
      </div>

      <div>
        <img style={{width:"100%"}} src="./assets/ssyoutube.online - Mazda RX7 FD - Midnight Run_1080p 1.png" alt="" />
      </div>
      
<div className="order-l-img">
  
<div className="one-img">
    <img src="./assets/o-1.png" alt="" />
    <span className=" text-img-1">Rim</span>
    </div>
    
    <div className="two-img">
    <img src="./assets/o-2.png" alt="" />
    <span className="text-img-2">Back Lights</span>
    </div>
   
   <div className="three-img">
   <img src="./assets/o-3.png" alt="" />
   <span className="text-img-3">Staring</span> 
   </div>
</div>
 
 
<div className="order-left-sec-img">

  <div className="four-img">
  <img src="./assets/o-4.png" alt=""/>
       <span className= "text-img-4" >Front Lights</span>
  </div>

  <div className="left-inner">

    <div className="five-img" >
    <img src="./assets/o-5.png" alt=""  />
    <span className= "text-img-5">AC</span>
    </div>

    <div className="six-img">
    <img src="./assets/o-6.png" alt=""  />
    <span className= "text-img-6" >Battery</span> 
    </div>

  </div>

</div>



  

    <section className="mt-[-20px]">
      <Footer/>
    </section>
    </>
  );
}

export default Order;
