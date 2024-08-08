import React from "react";

const ReasonsGrid = ({ reasons }) => {
  return (
    <div className="relative container1 mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 items-center z-10">
      {/* Left Corner Grid - 2 Columns */}
      <div className="custom-left-grid col-span-1 lg:col-span-2 flex flex-col justify-end md:justify-center lg:justify-start order-2 lg:order-1 mb-6 md:mb-0">
        <div className="grid grid-cols-1 gap-4">
          {reasons.slice(0, 3).map((reason, index) => (
            <div
              key={index}
              className={`custom-card p-2 md:p-3 custom-border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 relative overflow-hidden mb-6 bg-gradient-to-r from-green-400 to-blue-500`}
            >
              <div className="custom-overlay absolute inset-0 bg-gray-800 bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
                <p className="text-xs md:text-sm px-4 text-center font-serif">
                  {reason.description}
                </p>
              </div>
              <div className="custom-content">
                <h3 className="text-base md:text-lg font-bold text-white">
                  {reason.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-200">{reason.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Center Image */}
      <div className="col-span-1 lg:col-span-2 flex justify-center relative order-1 lg:order-2 mb-6 md:mb-0">
        <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-lg">
          <img
            src="/chooseus-1.jpg"
            alt="RSBlooming Team"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Corner Grid - 2 Columns */}
      <div className="custom-right-grid col-span-1 lg:col-span-2 flex flex-col justify-start md:justify-center lg:justify-end order-3 mb-6 md:mb-0">
        <div className="grid grid-cols-1 gap-4">
          {reasons.slice(3).map((reason, index) => (
            <div
              key={index}
              className={`custom-card p-2 md:p-3 custom-border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 relative overflow-hidden mb-6 bg-gradient-to-r from-purple-400 to-red-500`}
            >
              <div className="custom-overlay absolute inset-0 bg-gray-800 bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
                <p className="text-xs md:text-sm px-4 text-center font-serif">
                  {reason.description}
                </p>
              </div>
              <div className="custom-content">
                <h3 className="text-base md:text-lg font-bold text-white">
                  {reason.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-200">{reason.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReasonsGrid;
