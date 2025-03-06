



const InstagramCard = ({ imgSrc, likes, description }) => {
  return (
    <div className="bg-white  shadow-md overflow-hidden w-full mx-auto card-ki-height">
      {/* Header */}
      <div className="flex items-center p-2 ">
        <img
          src="./assets/soni_auto_1 3.png" 
          alt="Soni Auto Market"
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3">
          <p className="font-semibold">Soni Auto Market</p>
          <p className="text-sm text-gray-500">80 Manitoba St E, Canada</p>
        </div>
        <span className="ml-auto three-dots text-gray-400">•••</span>
      </div>

      {/* Image */}
      <img src={imgSrc} alt="Car" className="w-full h-60 p-3 object-cover" />

      {/* Footer */}
      <div className="p-4">
        <div className="">
          <div className="flex space-x-2 text-gray-600 icons-card">
          <i className="fa-regular fa-heart"></i> 
          <i className="fa-regular fa-comment"></i>
          <i className="fa-regular fa-paper-plane"></i>
          </div>
         <div>
         <p className="text-sm font-semibold">{likes} likes</p>
         </div>
        </div>
        <p className="text-gray-800 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default InstagramCard

