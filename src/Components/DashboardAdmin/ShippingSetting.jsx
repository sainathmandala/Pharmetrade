import React from "react";

const ShippingSetting = () => {
  return (
    <div className=" w-[calc(100%-288px)] h-full justify-center flex items-center">
      <div className="w-[95%]  h-full">
        <div className="  flex flex-col my-8">
          <h1 className="text-2xl text-blue-900 font-semibold ">
            Origin Address
          </h1>
        </div>
        <div className="w-full flex justify-between">
          <h2 className=" text-2xl text-gray-600 font-semibold">
            {" "}
            Shipping Origin Address
          </h2>
          <button
            className="border rounded-full w-24 bg-blue-900 text-white h-9"
            // onClick={handleSubmit}
          >
            SAVE
          </button>
        </div>
        {/* section1 start */}

        <div className="flex justify-between items-center text-gray-600 my-6 ">
          <div className="flex flex-col">
            <label className="text-base">
              Company
              <span className="text-red-600 text-2xl ">*</span>
            </label>{" "}
            <input
              type="text"
              id="product_name"
              className=" w-72 h-10 border-slate-300 border"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-base">
              Phone Number<span className="text-red-600 text-2xl ">*</span>
            </label>
            <input
              type="text"
              id="product_name"
              className=" w-72 h-10 border-slate-300 border"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-base">
              Street Address<span className="text-red-600 text-2xl ">*</span>
            </label>{" "}
            <input
              type="text"
              id="product_name"
              className=" w-72 h-10 border-slate-300 border"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-base">
              Address<span className="text-red-600 text-2xl ">*</span>
            </label>
            <input
              type="text"
              id="product_name"
              className=" w-72 h-10 border-slate-300 border"
            />
          </div>
        </div>

        {/* section1 end */}

        {/* section2 start */}
        <div className="flex justify-between items-center text-gray-600 my-6">
          <div className="flex flex-col">
            <label className="text-base">
              City<span className="text-red-600 text-2xl">*</span>
            </label>
            <input
              type="text"
              id="product_name"
              className=" w-72 h-10 border-slate-300 border"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-base">State/province</label>
            <input
              type="text"
              id="product_name"
              className=" w-72 h-10 border-slate-300 border"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-base">
              Zip/Postal Code<span className="text-red-600 text-2xl">*</span>
            </label>
            <input
              type="text"
              id="product_name"
              className=" w-72 h-10 border-slate-300 border"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-base">Country</label>
            <input
              type="text"
              id="Upn_Mem"
              className="w-72 h-10 border-slate-300 border "
            />
          </div>
        </div>

        {/* section2 end */}
      </div>
    </div>
  );
};

export default ShippingSetting;
