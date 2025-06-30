import React from 'react';
import Footer from '../components/Footer';
import './DealerShip.css';

const DealerShip = () => {
  return (
    <>
      <div>
      <div className="relative group w-full h-full">
  <img src="./assets/back-Img.png" alt="Background" className="w-full h-full object-cover" />
  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <span className="text-white text-3xl font-bold">About <span className='text-red-500'>Us</span></span>
  </div>
</div>


        <section>
          <div className="main2">
            <div className="aside1">
              <div className="text1" style={{ padding: '10px' }}>
                <h1 style={{ fontSize: '2rem' }}>Dealership</h1>
                <br />
                <h3>Welcome to our new website!</h3>
                <br />

              <div className="txx " style={{width:"95%"}}>
              <p >Welcome to Soni Auto Market, your premier destination for quality vehicles and exceptional service. With over 17 years of experience in the automotive industry, Soni Auto Market has established itself as a trusted name in the market.</p>
                <p>At Soni Auto Market, we pride ourselves on offering a diverse selection of vehicles to cater to every customers needs and preferences. Whether youre in the market for a reliable used car, a brand new model, a classic beauty, or an exotic gem, we have something for everyone.</p>
               <p>Our commitment to customer satisfaction extends beyond just providing a wide range of vehicles. We understand the importance of catering to the diverse needs of our clientele, which is why we have a dedicated staff representing various communities to ensure that every customer receives personalized attention and service.</p>
              </div>

                <div className="img" style={{ marginTop: '20px' }}>
                  <img src="./assets/car-im2.png" alt="Car 1" className="car1" />
                </div>
              </div>
            </div>

            <div className="aside2">
              <div className="text2" style={{ padding: '10px' }}>
                <div className="img">
                  <img src="./assets/car-im1.png" alt="Car 2"className="car2" />
                </div>

               <div className="txx" style={{marginTop:"50px" , width:"90%" , fontSize:"15px"}}>
               <p>When you choose Soni Auto Market, you can expect a seamless and stress-free car-buying experience from start to finish. Our friendly and knowledgeable team is here to assist you every step of the way, whether youre browsing our extensive inventory, exploring financing options, or scheduling a service appointment.</p>
                <p>In addition to our exceptional customer service, Soni Auto Market also boasts a state-of-the-art service center staffed by skilled technicians who are committed to keeping your vehicle in top condition for years to come.</p>
                <p>Experience the Soni Auto Market difference today. Visit us and discover why customers trust us for all their automotive needs.</p>

               </div>

              </div>
            </div>
          </div>
        </section>
      </div>

      <section>
        <Footer />
      </section>
    </>
  );
};

export default DealerShip;
