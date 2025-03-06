import "../components/LastImg.css"

const LastImg = () => {
  return (
    <>
<div className="last-img bg-cover bg-center h-auto flex flex-col lg:flex-row justify-center items-center gap-8 text-white p-4 md:p-8">
    {/* Left Section */}
    <div className="w-full max-w-[713px] h-auto lg:h-[302px] text-white p-4 flex flex-col justify-center items-center rounded-lg shadow-md">
        <div className="flex flex-col items-center space-y-2 ">
            <p>Serving the SONI AUTO MARKETS, located at 456 New Place, Moose Jaw, SK S6H 2B2, Canada.</p>
            <p>We have a strong and committed sales staff with many years of experience satisfying our customers’ needs.</p>
            <p>Feel free to browse our inventory online, request more information about vehicles, set up a test drive or inquire about financing!</p>
        </div>
        <div className="flex justify-evenly mt-4 w-full flex-wrap gap-4">
            <img width={100} src="./assets/carfaxcanada_icon.png.png" alt="Car" />
            <img width={100} src="./assets/logo-omvic.png.png" alt="Car" />
            <img width={100} src="./assets/logo-ucda.png.png" alt="Car" />
            <img width={100} src="./assets/sgii_logo 1.png" alt="Car" />
        </div>
    </div>

    {/* Right Section */}
    <div style={{borderRight:'6px solid red'}} className="w-full max-w-[713px] bg-black  p-4 flex flex-col justify-center items-start  shadow-md">
    <div className="space-y-4">
        <div style={{lineHeight:"25px"}} className="flex items-center space-x-6 view-wala-card">
            <i className="fa-solid fa-car text-2xl"></i>

            <h2 className="md:text-left">VIEW OUR INVENTORY <br /> <span>find Your Dream Car at a Competitive price</span></h2>
        </div>
        <div style={{lineHeight:"25px"}} className="flex items-center space-x-8 view-wala-card">
        <i className="fa-solid fa-dollar-sign text-2xl"></i>
            <h2 className="md:text-left">VIEW OUR INVENTORY <br /> <span>find Your Dream Car at a Competitive price</span></h2>
        </div>
        <div style={{lineHeight:"25px"}} className="flex items-center space-x-6 view-wala-card">
        <i className="fa-solid fa-right-left text-2xl"></i>
            <h2 className="md:text-left">VIEW OUR INVENTORY <br /> <span>find Your Dream Car at a Competitive price</span></h2>
        </div>
    </div>
</div>

</div>



    </>
  )
}

export default LastImg
