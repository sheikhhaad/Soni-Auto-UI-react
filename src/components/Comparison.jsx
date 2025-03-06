

const Comparison = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-12 ">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">BUY WITH CONFIDENCE</h2>
      <p className="text-center mb-8 text-gray-700">
        Every car we sell has undergone rigorous inspection to ensure top-tier reliability.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full comparison-gp">
        {/* Dealer Ship */}
        <div className="bg-white shadow-lg text-center  transform transition-transform hover:scale-105 card-pr-hover">
          <div style={{cursor:"pointer"}} className="bg-gray-200 hover-bg-red  text-gray-700 font-semibold text-lg py-2">
            Dealer Ship
          </div>
          <ul className="mt-4 space-y-3 text-gray-600 text-start py-3 px-3">
            <li style={{cursor:"pointer"}} className="flex items-center">
              <img width={20} src="./assets/sad-face 5.png" alt="Sad Face" className="mr-2" />
              Higher Prices
            </li>
            <li style={{cursor:"pointer"}} className="flex items-center">
              <img width={20} src="./assets/sad-face 5.png" alt="Sad Face" className="mr-2" />
              Limited Inventory
            </li>
            <li style={{cursor:"pointer"}} className="flex items-center">
              <img width={20} src="./assets/sad-face 5.png" alt="Sad Face" className="mr-2" />
              No inspection report
            </li>
            <li style={{cursor:"pointer"}} className="flex items-center">
              <img width={20} src="./assets/sad-face 5.png" alt="Sad Face" className="mr-2" />
              Mostly former rental cars
            </li>
          </ul>
        </div>

        {/* Soni Auto Market */}
        <div className="bg-white shadow-lg text-center transform transition-transform hover:scale-105 card-pr-hover">
          <div style={{cursor:"pointer"}} className="bg-gray-200 text-gray-700 hover-bg-red font-semibold text-lg py-2 ">
            Soni Auto Market
          </div>
          <ul className="mt-4 space-y-3 text-gray-600 py-3 px-3">
            <li style={{cursor:"pointer"}} className="flex items-center">
              <img width={20} src="./assets/Mask group.png" alt="Check Mark" className="mr-2" />
              Pay less than marketplace
            </li>
            <li style={{cursor:"pointer"}} className="flex items-center">
              <img width={20} src="./assets/Mask group.png" alt="Check Mark" className="mr-2" />
              Pre-book cars of your choice
            </li>
            <li style={{cursor:"pointer"}} className="flex items-center">
              <img width={20} src="./assets/Mask group.png" alt="Check Mark" className="mr-2" />
              RV boats
            </li>
            <li style={{cursor:"pointer"}} className="flex items-center">
              <img width={20} src="./assets/Mask group.png" alt="Check Mark" className="mr-2" />
              Hundreds of cars to pick from
            </li>
            <li style={{cursor:"pointer"}} className="flex items-center">
              <img width={20} src="./assets/Mask group.png" alt="Check Mark" className="mr-2" />
              Certified inspection report
            </li>
            <li style={{cursor:"pointer"}} className="flex items-center">
              <img width={20} src="./assets/Mask group.png" alt="Check Mark" className="mr-2" />
              No former rental cars or taxis
            </li>
            <li style={{cursor:"pointer"}} className="flex items-center">
              <img width={20} src="./assets/Mask group.png" alt="Check Mark" className="mr-2" />
              No haggling
            </li>
          </ul>
        </div>

        {/* Private Seller */}
        <div className="bg-white  shadow-lg  text-center transform transition-transform hover:scale-105 card-pr-hover">
          <div style={{cursor:"pointer"}} className="bg-gray-200 hover-bg-red  text-gray-700 font-semibold text-lg py-2">
            Private Seller
          </div>
          <ul style={{cursor:"pointer"}} className="mt-4 space-y-3 text-gray-600 py-3 px-3">
            <li className="flex items-center">
              <img width={20} src="./assets/sad-face 5.png" alt="Sad Face" className="mr-2" />
              Haggle with strangers
            </li>
            <li className="flex items-center">
              <img width={20} src="./assets/sad-face 5.png" alt="Sad Face" className="mr-2" />
              Potentially stolen car
            </li>
            <li className="flex items-center">
              <img width={20} src="./assets/sad-face 5.png" alt="Sad Face" className="mr-2" />
              No inspection report
            </li>
            <li className="flex items-center">
              <img width={20} src="./assets/sad-face 5.png" alt="Sad Face" className="mr-2" />
              Unclear vehicle history
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Comparison
