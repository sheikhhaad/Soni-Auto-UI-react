import "../components/Footer.css"

const Footer = () => {
  return (
    <>
<div className="footer-back-img mt-5 py-5">
  <div className="mb-10 f-logo">
    <img src="./assets/soni_auto_1 1.png" alt="" />
  </div>
  <div className="footerr  text-white">
    <div style={{marginRight:'70px'}} >
      <h4 className="heading text-lg " style={{fontWeight:'bold'}}>
        Dealership
      </h4>
      <p style={{fontSize:"14px"}}>
      Welcome to Soni Auto Market, your premier destination for quality vehicles and <br /> exceptional service. With over 17 years of experience in the automotive industry, <br /> Soni Auto Market has established itself as a trusted name in the market.
      </p>
      <div className=" mt-5 social-icons">
      <i className="fa-brands fa-tiktok"></i>
      <i className="fa-brands fa-instagram"></i>
      <i className="fa-brands fa-facebook-f"></i>
      </div>

    </div>




  <div className="f-all-text " style={{lineHeight:"30px"}}>

  <div>
      <h4 className="heading text-lg" style={{fontWeight:'bold'}}>
        Dealership
      </h4>
      <p>Monday</p>
      <p>Tuesday</p>
      <p>Wednesday</p>
      <p>Thursday</p>
      <p>Friday</p>
      <p>Saturday</p>
      <p>Sunday</p>
    </div>
    <div className="mt-12">
      <p>11:00 AM - 07:00 PM</p>
      <p>11:00 AM - 07:00 PM</p>
      <p>11:00 AM - 07:00 PM</p>
      <p>11:00 AM - 07:00 PM</p>
      <p>11:00 AM - 07:00 PM</p>
      <p>11:00 AM - 07:00 PM</p>
      <p>11:00 AM - 07:00 PM</p>
    </div>
    <div>
      <h4 className="heading text-lg" style={{fontWeight:'bold'}}>
      Our Contacts
      </h4>
      <h6 style={{color:'red'}}>Call us +1 93843-34934-32</h6>
      <p>456 New Place, Moose Jaw, SK S6H 2B2, Canada</p>

     <div className="f-sell">
     <div>
      <div className="f-heading">
        <h3>Browse by Location:</h3>
      </div>
        <div className="f-tex">
        <p>Used Cars in Toronto, ON</p>
        <p>Used Cars in Brampton, ON</p>
        <p>Used Cars in Mississauga, ON</p>
        <p>Used Cars in Markhan, ON</p>
        </div>
      </div>

      <div>
      <div className="f-heading">
        <h3>Sell My Car:</h3>
      </div>
        <div className="f-tex">
        <p>Sell My Car in Toronto</p>
        <p>Sell My Car in Mississauga</p>
        <p>Sell My Car in London</p>
        <p>Sell My Car in Ottawa</p>
        
        </div>
      </div>
     </div>
    </div>

  </div>





  </div>
</div>



    </>
  )
}

export default Footer
