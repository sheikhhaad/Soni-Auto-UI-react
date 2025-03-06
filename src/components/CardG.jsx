
const CarGallery = () => {
  const images = [
    "./assets/gallery5.png",
    "./assets/gallery6.png",
    "./assets/gallery7.png",
    "./assets/gallery8.png",
    "./assets/gallery9.png",
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={src}
              alt={`Car ${index + 1}`}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarGallery;
