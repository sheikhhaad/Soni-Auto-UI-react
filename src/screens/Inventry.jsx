import { card_data } from "../utils/Card";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../../src/App.css";

const Inventry = () => {
  return (
    <>
      <div className=" p-4 min-h-screen">
        <div className="flex flex-col md:flex-row">
          <div
            className="md:w-1/4 bg-white p-4 rounded-lg shadow-md self-start side-bar"
            style={{ borderTop: "4px solid black" }}
          >
            <div
              style={{ cursor: "pointer" }}
              className="searchbar flex items-center gap-4"
            >
              <div>
                <img
                  style={{ marginBottom: "12px" }}
                  src="./assets/search-icon.png"
                  alt=""
                />
              </div>
              <h2 className="text-xl font-semibold mb-4">Search</h2>
            </div>
            <form className="space-y-4" style={{ marginTop: "-30px" }}>
              <div className="relative w-[100%] mt-6">
                <select
                  className="w-full p-2 border appearance-none pr-8 text-black"
                  placeholder="Used cars in Toronto, Ontario"
                >
                  <option>Any Make</option>
                  <option>2012</option>
                  <option>2020</option>
                  <option>2024</option>
                  <option>2010</option>
                </select>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "20px",
                    gap: "10px",
                  }}
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-auto text-black"
                >
                  <span
                    style={{ marginBottom: "4px", fontSize: "22px" }}
                  ></span>
                  <i className="fa-solid fa-angle-down"></i>
                </span>
              </div>

              <div className="relative w-[100%] mt-6">
                <select
                  className="w-full p-2 border appearance-none pr-8 text-black"
                  placeholder="Used cars in Toronto, Ontario"
                >
                  <option>Any Model</option>
                  <option>Honda</option>
                  <option>Suzuki</option>
                  <option>Toyota</option>
                  <option>Kia</option>
                </select>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "20px",
                    gap: "10px",
                  }}
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-auto text-black"
                >
                  <span
                    style={{ marginBottom: "4px", fontSize: "22px" }}
                  ></span>
                  <i className="fa-solid fa-angle-down"></i>
                </span>
              </div>

              {/* Second row with two dropdowns */}
              <div className="grid grid-cols-2 gap-4">
                {["Min Year", "Max Year"].map((label) => (
                  <div key={label} className="relative w-[100%] ">
                    <select
                      className="w-full p-2 border appearance-none pr-8 text-black"
                      placeholder="Used cars in Toronto, Ontario"
                    >
                      <option>{label}</option>
                      <option>2012</option>
                      <option>2020</option>
                      <option>2024</option>
                      <option>2010</option>
                    </select>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "20px",
                        gap: "10px",
                      }}
                      className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-auto text-black"
                    >
                      <span
                        style={{ marginBottom: "4px", fontSize: "22px" }}
                      ></span>
                      <i className="fa-solid fa-angle-down"></i>
                    </span>
                  </div>
                ))}
              </div>

              {/* Third row with two dropdowns */}
              <div className="grid grid-cols-2 gap-4">
                {["Min Price", "Max Price"].map((label) => (
                  <div key={label} className="relative w-[100%] ">
                    <select
                      className="w-full p-2 border appearance-none pr-8 text-black"
                      placeholder="Used cars in Toronto, Ontario"
                    >
                      <option>{label}</option>
                      <option>$ 4000</option>
                      <option>$ 3021</option>
                      <option>$ 6000</option>
                      <option>$ 1000</option>
                    </select>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "20px",
                        gap: "10px",
                      }}
                      className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-auto text-black"
                    >
                      <span
                        style={{ marginBottom: "4px", fontSize: "22px" }}
                      ></span>
                      <i className="fa-solid fa-angle-down"></i>
                    </span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                {["Min Km", "Max Km"].map((label) => (
                  <div key={label} className="relative w-[100%] ">
                    <select
                      className="w-full p-2 border appearance-none pr-8 text-black"
                      placeholder="Used cars in Toronto, Ontario"
                    >
                      <option>{label}</option>
                      <option>12000</option>
                      <option>4000</option>
                      <option>3000</option>
                      <option>20000</option>
                    </select>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "20px",
                        gap: "10px",
                      }}
                      className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-auto text-black"
                    >
                      <span
                        style={{ marginBottom: "4px", fontSize: "22px" }}
                      ></span>
                      <i className="fa-solid fa-angle-down"></i>
                    </span>
                  </div>
                ))}
              </div>

              <div className="four-sel" style={{ margin: "10px 0px" }}>
                <div className="relative w-[100%] mt-6">
                  <select
                    className="w-full p-2 border appearance-none pr-8 text-black"
                    placeholder="Used cars in Toronto, Ontario"
                  >
                    <option>Any Color</option>
                    <option>Red</option>
                    <option>Black</option>
                    <option>White</option>
                    <option>Yellow</option>
                  </select>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "20px",
                      gap: "10px",
                    }}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-auto text-black"
                  >
                    <span
                      style={{ marginBottom: "4px", fontSize: "22px" }}
                    ></span>
                    <i className="fa-solid fa-angle-down"></i>
                  </span>
                </div>

                <div className="relative w-[100%] mt-6">
                  <select
                    className="w-full p-2 border appearance-none pr-8 text-black"
                    placeholder="Used cars in Toronto, Ontario"
                  >
                    <option>Any Engine</option>
                    <option>V8</option>
                    <option>Turbo</option>
                    <option>V2</option>
                    <option>1300CC</option>
                  </select>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "20px",
                      gap: "10px",
                    }}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-auto text-black"
                  >
                    <span
                      style={{ marginBottom: "4px", fontSize: "22px" }}
                    ></span>
                    <i className="fa-solid fa-angle-down"></i>
                  </span>
                </div>

                <div className="relative w-[100%] mt-6">
                  <select
                    className="w-full p-2 border appearance-none pr-8 text-black"
                    placeholder="Used cars in Toronto, Ontario"
                  >
                    <option>Any Fuel Type</option>
                    <option>Petrol</option>
                    <option>Diseal</option>
                    <option>CNG</option>
                  </select>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "20px",
                      gap: "10px",
                    }}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-auto text-black"
                  >
                    <span
                      style={{ marginBottom: "4px", fontSize: "22px" }}
                    ></span>
                    <i className="fa-solid fa-angle-down"></i>
                  </span>
                </div>
                <div className="relative w-[100%] mt-6">
                  <select
                    className="w-full p-2 border appearance-none pr-8 text-black"
                    placeholder="Used cars in Toronto, Ontario"
                  >
                    <option>Any Body Type</option>
                    <option>Metal</option>
                    <option>Steal</option>
                  </select>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "20px",
                      gap: "10px",
                    }}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-auto text-black"
                  >
                    <span
                      style={{ marginBottom: "4px", fontSize: "22px" }}
                    ></span>
                    <i className="fa-solid fa-angle-down"></i>
                  </span>
                </div>

                <div className="keyword mt-6">
                  <input
                    className="w-full p-2 border rounded-md"
                    placeholder="KEYWORD SEARCH"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
              </div>

              <button className="w-full bg-black text-white p-2 rounded-md flex justify-center items-center">
                Search
              </button>
              <button className="w-full bg-black text-white p-2 rounded-md flex justify-center items-center">
                Reset
              </button>
            </form>
          </div>

          {/* Car Listings */}

          <div className="md:w-3/4 mt-4 md:mt-0 md:ml-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative w-[95%] sm:mt-3 sm:mb-3 toranto">
                <select
                  className="w-full p-2 border rounded-md appearance-none pr-8"
                  placeholder="Used cars in Toronto, Ontario"
                >
                  <option>Used cars in Toronto, Ontario</option>
                </select>
                <span className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none text-red-500">
                  <i className="fa-solid fa-angle-down"></i>
                </span>
              </div>
            </div>
            {/* Header */}
            <div className="flex items-center mb-4 btn">
              <h2 className="text-xl  flex-1 h2-span invent-text">
                <span style={{ margin: "0px 4px" }}>Sort :</span>
                <span style={{ margin: "0px 4px" }}>
                  Year{" "}
                  <span
                    style={{
                      margin: "0px 6px",
                      fontSize: "20px",
                      fontWeight: "100",
                    }}
                  >
                    |
                  </span>
                </span>
                <span style={{ margin: "0px 4px" }}>
                  Make{" "}
                  <span
                    style={{
                      margin: "0px 6px",
                      fontSize: "20px",
                      fontWeight: "100",
                    }}
                  >
                    |
                  </span>
                </span>
                <span style={{ margin: "0px 4px" }}>
                  Model{" "}
                  <span
                    style={{
                      margin: "0px 6px",
                      fontSize: "20px",
                      fontWeight: "100",
                    }}
                  >
                    |
                  </span>
                </span>
                <span style={{ margin: "0px 4px" }}>
                  BodyStyle{" "}
                  <span
                    style={{
                      margin: "0px 6px",
                      fontSize: "20px",
                      fontWeight: "100",
                    }}
                  >
                    |
                  </span>
                </span>
                <span style={{ margin: "0px 4px" }}>
                  Price{" "}
                  <span
                    style={{
                      margin: "0px 6px",
                      fontSize: "20px",
                      fontWeight: "100",
                    }}
                  >
                    |
                  </span>
                </span>
              </h2>

              <div className="flex items-center">
                <button
                  style={{ fontSize: "22.5px" }}
                  className="p-2  rounded hoverr"
                >
                  <i className="fa-solid fa-list"></i>
                </button>
                <button className="p-2 bg-gray-100 rounded ml-2">
                  <img src="./assets/Vector (13).png" alt="" />
                </button>
              </div>
            </div>

            {/* Car List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
              {card_data.map((item, index) => {
                const {
                  text,
                  link,
                  price,
                  fainance,
                  image,
                  body_style,
                  mileage,
                  transmission,
                  fuelType,
                  engine,
                  driventain,
                } = item;

                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden pb-5"
                  >
                    <img
                      src={image}
                      alt="Car Image"
                      className="w-full h-48 object-cover"
                    />
                    <div className="flex gap-1 mt-4">
                      <button
                        style={{ paddingLeft: "10px" }}
                        className=" text-white"
                      >
                        <img src="./assets/Button (2).png" alt="" />
                      </button>
                      <button className=" text-white">
                        <img src="./assets/Button (3).png" alt="" />
                      </button>
                    </div>

                    <div className="flex justify-between items-center mt-2 px-4">
                      <div className="flex items-center mt-2">
                        <input
                          type="checkbox"
                          id={`showPrice${index}`}
                          className="mr-2"
                        />
                        <label
                          htmlFor={`showPrice${index}`}
                          className="text-gray-700"
                        >
                          Show Prices
                        </label>
                      </div>
                      <p
                        className={`call-price text-xl mt-2 ${
                          price === "call for price"
                            ? "text-red-500"
                            : "text-black"
                        }`}
                      >
                        {price}
                      </p>
                    </div>

                    <div className="px-4 ">
                      <h3 style={{ fontWeight: "500" }} className="text-lg ">
                        {text}
                      </h3>
                      <p style={{ fontSize: "14px" }} className="text-gray-500">
                        {link}
                      </p>
                      {/* Checkbox */}

                      <div
                        className="flex justify-between items-center mt-2 "
                        style={{ borderBottom: " 1px solid gray" }}
                      >
                        <p style={{ fontSize: "14px" }}>Finance Form : </p>
                        <p
                          style={{ fontSize: "17px", fontWeight: "700" }}
                          className={`mt-1 ${
                            fainance === "Sold"
                              ? "text-red-500"
                              : fainance === "Available"
                              ? "text-green-500"
                              : fainance === "Upcoming"
                              ? "text-blue-500"
                              : fainance === "Pending"
                              ? "text-orange-300"
                              : "text-black"
                          }`}
                        >
                          {fainance}
                        </p>
                      </div>

                      <div style={{ lineHeight: "30px" }} className="mt-2">
                        <div
                          style={{ backgroundColor: "#F5F5F5" }}
                          className="flex gap-20 mb-2 px-2 txt-size"
                        >
                          <p className="font-semibold">Mileage:</p>
                          <p>{mileage}</p>
                        </div>

                        <div className="flex gap-[88px] mb-2 px-2 txt-size">
                          <p className="font-semibold">Engine:</p>
                          <p>{engine}</p>
                        </div>

                        <div
                          style={{ backgroundColor: "#F5F5F5" }}
                          className="flex gap-[65px] mb-2 px-2 txt-size"
                        >
                          <p className="font-semibold">Drivetrain:</p>
                          <p> {driventain}</p>
                        </div>

                        <div className="flex gap-[65px] mb-2 px-2 txt-size">
                          <p className="font-semibold">Fuel Type:</p>
                          <p> {fuelType}</p>
                        </div>

                        <div
                          style={{ backgroundColor: "#F5F5F5" }}
                          className="flex gap-[50px] mb-2 txt-size"
                        >
                          <p className="font-semibold">Transmission:</p>
                          <p>{transmission}</p>
                        </div>

                        <div className="flex gap-[68px] mb-2 txt-size">
                          <p className="font-semibold">Body Style:</p>
                          <p>{body_style}</p>
                        </div>
                      </div>

                      <div className="mt-4 flex justify-between">
                        <Link to="/JeepWrangular">
                          {" "}
                          <button className="card-btn border-2 border-red-500 text-black  rounded black-hover">
                            View Details
                          </button>
                        </Link>
                        <button className="card-btn bg-black text-white  rounded c-btn-2 red-hover">
                          Carfax Report
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default Inventry;
