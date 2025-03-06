
import "../components/BackImgSection.css"


const BackImgSection = () => {
  return (
    <>
<div className="background-img-sec-rs flex flex-col items-center justify-center text-center">
    <h1 style={{ opacity:'10', zIndex:'1',textAlign:'center'}} className="text-2xl md:text-4xl font-bold mb-4 text-white ">WELCOME TO SONI AUTO MARKET</h1>
    <p style={{ width: '80%' , opacity:'10', zIndex:'1',textAlign:'center'}} className="mb-6 px-4  text-white text-sm md:text-base lg:text-lg">
        At SONi AUTO MARKETS, we treat the needs of each individual customer with paramount concern & are committed to saving our customers both time and money, while providing a wide selection of High Quality Pre-Owned Cars & Trucks. Offering a selection from Torontos best Family sedans & coupes such as Mercedes-Benz, Lexus, Honda, Toyota, Nissan, Infiniti, BMW to the finest SUVs and Wagons on todays market. Our experienced sales staff is eager to share its knowledge and enthusiasm with you.
    </p>
    <button
        style={{   opacity:'10', zIndex:'1' }}
        className="text-white py-2 px-4 w-32 rounded  transition hover-btn-sary"
    >
        Learn More
    </button>
</div>



    </>
  )
}

export default BackImgSection
