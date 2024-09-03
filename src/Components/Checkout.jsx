// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function Checkout({ topMargin }) {
//   const [isActive, setIsActive] = useState(true);
//   const [ischeck, setIsCheck] = useState(false);
//   const [isChecked, setIsChecked] = useState(false);
//   const [selectedAddress, setSelectedAddress] = useState(null);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     streetAddress: "",
//     townCity: "",
//     stateCountry: "",
//     postalCode: "",
//     email: "",
//     phone: "",
//   });

//   const addresses = [
//     {
//       name: "Ram",
//       lastname: "Manda",
//       Address: "Dollars",
//       City: "Dollars",
//       State: "US",
//       Country: "US",
//       Pin: "78906",
//       email: "ram@gmail.com",
//       phone: "7894561230",
//     },
//     {
//       name: "John",
//       lastname: "Doe",
//       Address: "Main Street",
//       City: "Cityville",
//       State: "CA",
//       Country: "US",
//       Pin: "12345",
//       email: "john@example.com",
//       phone: "1234567890",
//     },
//     {
//       name: "Jane",
//       lastname: "Smith",
//       Address: "Park Avenue",
//       City: "Metropolis",
//       State: "NY",
//       Country: "US",
//       Pin: "67890",
//       email: "jane@example.com",
//       phone: "0987654321",
//     },
//   ];

//   const handleClick = () => {
//     setIsActive(true);
//     setIsCheck(!ischeck);
//   };

//   const handleCheck = () => {
//     setIsCheck(!ischeck);
//     setIsActive(!isActive);
//   };

//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);
//   };
//   const handleRadioChange = (index) => {
//     setSelectedAddress(index);
//     setFormData({
//       firstName: addresses[index].name,
//       lastName: addresses[index].lastname,
//       streetAddress: addresses[index].Address,
//       townCity: addresses[index].City,
//       stateCountry: addresses[index].State,
//       postalCode: addresses[index].Pin,
//       email: addresses[index].email,
//       phone: addresses[index].phone,
//     });
//   };

//   const handleNewAddress = () => {
//     setSelectedAddress(null);
//     setFormData({
//       firstName: "",
//       lastName: "",
//       streetAddress: "",
//       townCity: "",
//       stateCountry: "",
//       postalCode: "",
//       email: "",
//       phone: "",
//     });
//   };

//   return (
//     <div
//       style={{ marginTop: `${topMargin}px` }}
//       className="bg-slate-200 w-full h-fit text-lg text-black px-12 py-2"
//     >
//       <h1 className="text-2xl mb-2 text-black">PharmEtrade {`>`} Checkout</h1>
//       <div className="bg-white rounded-lg p-4 w-full h-full">
//         <div className="flex justify-between">
//           <div className="flex flex-col">
//             <h1 className="text-2xl font-semibold text-black mb-2">Checkout</h1>
//             <div className="flex mb-4 flex-col">
//               <h1>
//                 Have a coupon?
//                 </h1>
//                 <h1>
//                 <a href="#" className="text-cart underline">
//                   {" "}
//                   CLICK HERE TO ENTER YOUR CODE
//                 </a>
//                 </h1>
              
//             </div>
//             <h1 className="mb-4 text-xl font-semibold">Billing Details</h1>
//           </div>
//           <div className="border shadow-md rounded-md w-[60%]">
//             <div className="p-2 mx-4">
//               <h1 className="border-b-2 text-base">Your Address</h1>
//              <div  onClick={handleNewAddress} className="ml-1">
//               <input
//                     type="radio"
//                     // checked={selectedAddress === index}
//                     className="mr-2"
//                     // onChange={() => handleRadioChange(index)}
//                   />
//               <button
//                 className="text-base underline"
//                 onClick={handleNewAddress}
//               >
//                 New Address
//               </button>
//               </div>
//               {addresses.map((address, index) => (
//                 <div
//                   key={index}
//                   className="border rounded-md flex my-2 p-1 bg-pink-50 border-orange-200"
//                 >
//                   <input
//                     type="radio"
//                     checked={selectedAddress === index}
//                     className="mr-2"
//                     onChange={() => handleRadioChange(index)}
//                   />{" "}
//                   <div className="flex items-center justify-center text-xs">
//                     <h1 className="font-semibold">{address.name},</h1>
//                     <h1 className=" mx-1">{address.lastname},</h1>
//                     <p className="">{address.Address},</p>
//                     <p className=" mx-1">{address.City},</p>
//                     <p className="">{address.State},</p>
//                     <p className=" mx-1">{address.Country},</p>
//                     <p className="">{address.Pin},</p>
//                     <p className=" mx-1">{address.email},</p>
//                     <p className="">{address.phone}</p>
//                   </div>
//                 </div>
//               ))}

//               {/* <button
//                 className="text-base underline"
//                 onClick={handleNewAddress}
//               >
//                 New Address
//               </button> */}
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-row w-full gap-10">
//           <div className="w-[65%]">
//             <form>
//               <div className="flex flex-row w-full gap-2">
//                 <div className="flex gap-2 mb-2 w-full flex-col">
//                   <label>First name</label>
//                   <input
//                     required
//                     type="text"
//                     className="border-check border-2 rounded-md p-1 h-fit"
//                     placeholder="Enter FirstName"
//                     value={formData.firstName}
//                     onChange={(e) =>
//                       setFormData({ ...formData, firstName: e.target.value })
//                     }
//                   />
//                 </div>
//                 <div className="flex gap-2 mb-2 w-full flex-col">
//                   <label>Last name</label>
//                   <input
//                     required
//                     type="text"
//                     className="border-check border-2 rounded-md p-1 h-fit"
//                     placeholder="Enter LastName"
//                     value={formData.lastName}
//                     onChange={(e) =>
//                       setFormData({ ...formData, lastName: e.target.value })
//                     }
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-row w-full gap-2">
//                 <div className="flex mb-2 gap-2 w-full flex-col">
//                   <label>Street Address</label>
//                   <input
//                     required
//                     type="text"
//                     className="border-check border-2 rounded-md p-1 w-full h-fit"
//                     value={formData.streetAddress}
//                     onChange={(e) =>
//                       setFormData({
//                         ...formData,
//                         streetAddress: e.target.value,
//                       })
//                     }
//                   />
//                 </div>
//                 <div className="flex mb-2 gap-2 w-full flex-col">
//                   <label>Town / City</label>
//                   <input
//                     required
//                     type="text"
//                     className="border-check border-2 rounded-md p-1 w-full h-fit"
//                     value={formData.townCity}
//                     onChange={(e) =>
//                       setFormData({ ...formData, townCity: e.target.value })
//                     }
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-row w-full gap-2">
//                 <div className="flex mb-2 gap-2 w-full flex-col">
//                   <label>State / Country</label>
//                   <input
//                     required
//                     type="text"
//                     className="border-check border-2 rounded-md p-1 w-full h-fit"
//                     value={formData.stateCountry}
//                     onChange={(e) =>
//                       setFormData({
//                         ...formData,
//                         stateCountry: e.target.value,
//                       })
//                     }
//                   />
//                 </div>
//                 <div className="flex mb-2 gap-2 w-full flex-col">
//                   <label>Postal code</label>
//                   <input
//                     required
//                     type="text"
//                     className="border-check border-2 rounded-md p-1 w-full h-fit"
//                     value={formData.postalCode}
//                     onChange={(e) =>
//                       setFormData({ ...formData, postalCode: e.target.value })
//                     }
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-row w-full gap-2">
//                 <div className="flex mb-2 gap-2 w-full flex-col">
//                   <label>Email</label>
//                   <input
//                     required
//                     type="email"
//                     className="border-check border-2 rounded-md p-1 w-full h-fit"
//                     value={formData.email}
//                     onChange={(e) =>
//                       setFormData({ ...formData, email: e.target.value })
//                     }
//                   />
//                 </div>
//                 <div className="flex mb-2 gap-2 w-full flex-col">
//                   <label>Phone</label>
//                   <input
//                     required
//                     type="tel"
//                     className="border-check border-2 rounded-md p-1 w-full h-fit"
//                     value={formData.phone}
//                     onChange={(e) =>
//                       setFormData({ ...formData, phone: e.target.value })
//                     }
//                   />
//                 </div>
//               </div>

//               <div className="flex mb-2 gap-2 flex-col">
//                 <label>Subscribe for SMS updates</label>
//                 <div className="flex">
//                   <input
//                     type="checkbox"
//                     id="consentCheckbox"
//                     className="h-4 w-4 mt-1 text-blue-600 rounded focus:ring-blue-500"
//                     checked={isChecked}
//                     onChange={handleCheckboxChange}
//                   />
//                   <label
//                     htmlFor="consentCheckbox"
//                     className="ml-2 text-lg text-gray-700 w-full"
//                   >
//                     By checking this box and entering your phone number above,
//                     you consent to receive marketing text messages (e.g.{" "}
//                     <span className="font-semibold">promos</span>,{" "}
//                     <span className="font-semibold">cart reminders</span>) from{" "}
//                     <span className="font-semibold">[company name]</span> at the
//                     number provided, including messages sent by autodialer.
//                     Consent is not a condition of purchase. Msg & data rates may
//                     apply. Msg frequency varies. Unsubscribe at any time by
//                     replying STOP or clicking the unsubscribe link (where
//                     available).{" "}
//                     <a href="#" className="text-blue-600 hover:underline">
//                       Privacy Policy
//                     </a>{" "}
//                     &{" "}
//                     <a href="#" className="text-blue-600 hover:underline">
//                       Terms of Service
//                     </a>
//                     .
//                   </label>
//                 </div>
//               </div>
//               <div className="flex mb-2 gap-2 flex-col">
//                 <label>Additional Info</label>
//                 <input
//                   required
//                   type="text"
//                   className="border-check border-2 rounded-md p-3 w-full h-fit"
//                 />
//               </div>
//             </form>
//           </div>

//           <div className="bg-gray-100 w-[35%] p-4 h-fit mt-5 ">
//             <h1 className="text-xl font-semibold text-black mb-2">
//               Your Order
//             </h1>
//             <div>
//               <div className="flex flex-row mb-4 gap-4 justify-between">
//                 <div>
//                   <h1>Zahler Real Calm Multivitamin × 1 </h1>
//                 </div>
//                 <div>
//                   <h2>$ amount</h2>
//                 </div>
//               </div>
//               <div className="flex flex-row mb-4 gap-4 justify-between">
//                 <div>
//                   <h1>Oral irrigator Electric × 1 </h1>
//                 </div>
//                 <div>
//                   <h2>$ amount</h2>
//                 </div>
//               </div>
//               <div className="flex flex-row mb-4 gap-4 justify-between">
//                 <div>
//                   <h1>Subtotal </h1>
//                 </div>
//                 <div>
//                   <h2>$ amount</h2>
//                 </div>
//               </div>
//               <div className="flex flex-row mb-4 gap-4 justify-between">
//                 <div>
//                   <h1>Total </h1>
//                 </div>
//                 <div>
//                   <h2>$ amount</h2>
//                 </div>
//               </div>
//             </div>
//             <div className="mb-4 w-full text-black">
//               <h2 className="border-b pb-2 border-gray-300 font-bold">
//                 SHIPPING METHODS
//               </h2>
//               <div className="flex justify-between p-4">
//                 <span className="">$0.00</span>
//                 <span>Shipping Method</span>
//               </div>
//             </div>
//             <div className="bg-white mb-4 p-4 border-black w-full h-fit">
//               <div className="mb-4">
//                 <div className="flex flex-row gap-2 items-center mb-2">
//                   <button
//                     className={
//                       isActive
//                         ? "w-4 h-4 p-1 bg-black border-black border-2 rounded-full"
//                         : "w-4 h-4 border-black border-2 rounded-full"
//                     }
//                     onClick={handleClick}
//                   >
//                     {" "}
//                   </button>{" "}
//                   <h1> Details</h1>
//                 </div>
//                 {isActive && (
//                   <div>
//                     <p className="mb-4">
//                       Make your payment directly into our bank account. Please
//                       use your Order ID as the payment reference. Your order
//                       will not be shipped until the funds have cleared in our
//                       account.
//                     </p>{" "}
//                   </div>
//                 )}
//               </div>
//               <div className="mb-4">
//                 <div className="flex flex-row gap-2 items-center mb-2">
//                   <button
//                     className={
//                       ischeck
//                         ? "w-4 h-4 p-1 bg-black border-black border-2 rounded-full"
//                         : "w-4 h-4 border-black border-2 rounded-full"
//                     }
//                     onClick={handleCheck}
//                   >
//                     {" "}
//                   </button>{" "}
//                   <h1> Check payments</h1>
//                 </div>
//                 {ischeck && (
//                   <div>
//                     <p>
//                       Your personal data will be used to process your order,
//                       support your experience throughout this website, and for
//                       other purposes described in our{" "}
//                       <a href="#" className="text-cart underline">
//                         privacy policy.
//                       </a>
//                       <br />
//                     </p>{" "}
//                   </div>
//                 )}
//               </div>
//             </div>
//             <div className="flex items-center justify-center">
//               <button className="bg-blue-900 px-4 py-2 rounded-3xl text-white font-semibold">
//                 <Link to="/order">Place order</Link>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Checkout;








import React, { useState } from "react";
import { Link } from "react-router-dom";
import cross from '../assets/wrong.png';
import plus from '../assets/Icons/plus[1].png';
import logo from '../assets/logo2.png';
import payment from '../assets/Icons/paymenticons.png'

import {
  Box,
  TextField,
} from "@mui/material";

function Address({ topMargin }) {
  const [isActive, setIsActive] = useState(true);
  const [ischeck, setIsCheck] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    townCity: "",
    stateCountry: "",
    postalCode: "",
    email: "",
    phone: "",
  });

  const [isPopupShow,setIsPopupShow]= useState(false)
  const handleopen =()=>{
      setIsPopupShow (true)
  }
  // const details = {
  //   name: "Ram",
  //   lastname: 'Manda',
  //   Address: "Dollars",
  //   City: "Dollars",
  //   State: "US",
  //   Country: 'US',
  //   Pin: '78906',
  //   email: "ram@gmail.com",
  //   phone: 7894561230
  // };

  const [isTotalHidden, setIsTotalHidden] = useState(false);

  // Function to handle the "Use this address" button click
  const handleUseAddress = () => {
    setIsTotalHidden(true);
  };

  const details = [
    {
      name: "Ram",
      // lastname: "Smith",
      // Address: 'h-no:4-567/Dollars',
      City: "Dollars",
      State: "Dollars",
      Country: "US",
      Pin: 56789,
      email: "ram@example.com",
      phone: "+1234567890"
    }
  ];

  const [showPopUp, setShowPopUp] = useState(false);

  const handleOpen = () => {
    setShowPopUp(true);
    document.body.style.overflow = 'hidden'; // Disable scrolling
  };

  const handleRemove = () => {
    setShowPopUp(false);
    document.body.style.overflow = 'auto'; // Enable scrolling
  };

  // const handleUseAddress = () => {
  //   setFormData({
  //     ...formData,
  //     firstName: details.name,
  //     lastName: details.lastname,
  //     streetAddress: details.Address,
  //     townCity: details.City,
  //     stateCountry: details.State,
  //     postalCode: details.Pin,
  //     email: details.email,
  //     phone: details.phone
  //   });
  //   handleRemove();
  // };

  return (
    <div
      style={{ marginTop: `${topMargin}px` }}
      className="bg-white w-full h-fit text-lg text-black px-12 py-2 relative"
    >
      <img src={logo} className="w-48 h-16" alt="Logo" />
      <h1 className="text-3xl flex justify-center items-center text-black mb-3">Checkout</h1>
      <div className="bg-white p-4 w-full h-full border-t">
        <div className="flex flex-col">
{/* <div>
          <h1 className="text-orange-700 font-semibold text-lg my-2">1 Select a delivery and service address</h1>
          <div className="flex justify-between">
          
           
            <div className="border shadow-md rounded-md w-[75%] h-full">
              <div className="p-2 mx-4">
                <h1 className="border-b-2 text-base">Your Address</h1>
                <div className="border rounded-md flex my-2 p-2 bg-pink-50 border-orange-200">
                  <input type="radio" checked className="mr-2" readOnly />{" "}
                  <div className="flex items-center justify-center text-base">
                    <h1 className="font-semibold">{details.name},</h1>
                    <h1 className=" mx-1">{details.lastname},</h1>
                    <p className="">{details.Address},</p>
                    <p className=" mx-1">{details.City},</p>
                    <p className="">{details.State},</p>
                    <p className=" mx-1">{details.Country},</p>
                    <p className="">{details.Pin},</p>
                    <p className=" mx-1">{details.email},</p>
                    <p className="">{details.phone}</p>
                    <p className="mx-2 text-sm hover:text-red-500 hover:underline font-semibold text-cyan-500">Edit Address |</p>
                    <div>
                      <p className="text-sm hover:text-red-500 hover:underline font-semibold text-cyan-500">Delivery Instructions</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex my-2 cursor-pointer" onClick={handleOpen}>
                    <img src={plus} className="w-6 h-5" alt="Add Icon" />
                    <h1 className="text-base hover:text-red-400 hover:underline text-cyan-500">Add a new address</h1>
                  </div>

                  {showPopUp && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                      <div className="bg-white p-6 w-[50%] rounded-md shadow-lg relative">
                        <div className="flex justify-between border-b pb-4 items-center">
                          <h1>Add a new address</h1>
                          <img src={cross} className="w-5 h-5 cursor-pointer" onClick={handleRemove} alt="Close Icon" />
                        </div>
                        <div className="my-4">
                          <TextField
                            label="First Name"
                            id="outlined-size-small"
                            name="First_Name"
                            size="small"
                            className="w-full"
                          />
                        </div>
                        <div className="my-4">
                          <TextField
                            label="Phone Number"
                            id="outlined-size-small"
                            name="Phone_Number"
                            size="small"
                            className="w-full"
                          />
                        </div>
                        <div className="my-4">
                          <TextField
                            label="Pin Code"
                            id="outlined-size-small"
                            name="Pin_Code"
                            size="small"
                            className="w-full"
                          />
                        </div>
                        <div className="my-4">
                          <TextField
                            label="Flat, House-No, Building, Company"
                            id="outlined-size-small"
                            name="Flat_HouseNo_Building_Company"
                            size="small"
                            className="w-full"
                          />
                        </div>
                        <div className="my-4">
                          <TextField
                            label="Area, Street"
                            id="outlined-size-small"
                            name="Area_Street"
                            size="small"
                            className="w-full"
                          />
                        </div>
                        <div className="my-4">
                          <TextField
                            label="LandMark"
                            id="outlined-size-small"
                            name="LandMark"
                            size="small"
                            className="w-full"
                          />
                        </div>
                        <div className="my-4">
                          <TextField
                            label="Town/City"
                            id="outlined-size-small"
                            name="Town_City"
                            size="small"
                            className="w-full"
                          />
                        </div>

                        <div className="my-4">
                          <input type="checkbox" id="default-address" />
                          <label htmlFor="default-address" className="ml-2">Make this my default address</label>
                        </div>

                        <div className="my-4 cursor-pointer">
                          <h1>Delivery instructions (optional)</h1>
                          <p className="hover:text-red-400 hover:underline text-base">
                            Add Preference, notes, access codes and more
                          </p>
                        </div>

                        <button
                          className="border rounded-full h-8 text-sm w-32 bg-blue-900 text-white"
                          onClick={handleUseAddress}
                        >
                          Use this address
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <button
                  className="border rounded-full h-8 text-sm w-32 bg-blue-900 text-white mt-6"
                  onClick={handleUseAddress}
                >
                  Use this address
                </button>
              </div>

             
             </div>
           
         

            <div className="w-[25%] h-full border ml-6 p-3 rounded-lg shadow-lg">
              <div className="border-b ">
                <div className="flex items-center justify-center">
                  <button className="border rounded-full text-sm flex justify-center items-center w-32 h-8 bg-blue-900 text-white">Use this address</button>
                </div>
                <div className="text-xs flex items-center justify-center flex-col my-1 border-b">
                  <p>Choose a shipping address and payment</p>
                  <p>method to calculate shipping, handling and</p>
                  <p>tax.</p>
                </div>
                <div>
                  <h1 className="font-semibold text-xl my-2">Order Summary</h1>
                </div>
                <div className="flex justify-between text-sm mt-3">
                  <p>Items :</p>
                  <p>--</p>
                </div>
                <div className="flex justify-between text-sm border-b mb-2">
                  <p>Delivery :</p>
                  <p>--</p>
                </div>
                <div className="flex justify-between text-red-500 font-semibold">
                  <p>Order Total:</p>
                  <p>$10,000</p>
                </div>
              </div>

              <div className="my-3 flex justify-center items-center">
                <p className="text-xs">This order contains a gift</p>
              </div>
              
            </div>
          </div>
          </div> */}


<div>

      <h1 className="text-orange-700 font-semibold text-lg my-2">1 Select a delivery and service address</h1>
      <div className="flex justify-between">
      {!isTotalHidden && (
        <div className="border shadow-md rounded-md h-full w-full">
          <div className="p-2 mx-4">
            <h1 className="border-b-2 text-base">Your Address</h1>
            <div className="border rounded-md flex my-2 p-2 bg-pink-50 border-orange-200">
              <input type="radio" checked className="mr-2" readOnly />
              <div className="flex items-center justify-center text-base">
                <h1 className="font-semibold">{details[0].name},</h1>
                {/* <h1 className="mx-1">{details[0].lastname},</h1> */}
                {/* <p>{details[0].Address},</p> */}
                <p className="mx-1">{details[0].City},</p>
                <p>{details[0].State},</p>
                <p className="mx-1">{details[0].Country},</p>
                <p>{details[0].Pin},</p>
                <p className="">{details[0].email},</p>
                <p>{details[0].phone}</p>
                <p className="mx-2 text-sm flex hover:text-red-500 hover:underline font-semibold text-cyan-500">Edit  </p>
                <div>
                  <p className="text-sm hover:text-red-500 hover:underline font-semibold text-cyan-500">Address</p>
                </div>
              </div>
            </div>

            {/* Hide this button after it's clicked */}
            <button
              className="border rounded-full h-8 text-sm w-32 bg-blue-900 text-white mt-6"
              onClick={handleUseAddress}
            >
              Use this address
            </button>
          </div>
        </div>
      )}



        <div className="flex justify-between w-full">

        <div className="flex flex-col w-[70%]">
          {isTotalHidden && (

            <div className='flex flex-col justify-between mx-2 border-b'>
              <div className="flex justify-between">
              <h1>1 Delivery address</h1>
              <div>
                {
                  details.map((detail, index) => (
                    <div key={index}>
                      <p>{detail.name}</p>
                      <p>{detail.Address}</p>
                      <p>{detail.City}</p>
                      <div className='flex'>
                        <p>{detail.State},</p>
                        <p className='mx-2'>{detail.Country},</p>
                        <p>{detail.Pin}</p>
                      </div>
                      <p className='text-cyan-500 hover:text-red-400 hover:underline'>Add a new address</p>
                    </div>
                  ))
                }
              </div>
              <div>
                <p>Change</p>
              </div>
</div>
              {/* Add your additional logic or content here */}


              <div>
                    <h2 className='text-orange-500'>2 Select a payment method</h2>

                    <div className='border rounded-md p-4'>
                        <h1 className='border-b text-lg'>Your available balance</h1>

                        <div className='flex items-center my-3'>
                            <img src={plus} className='w-5 h-5 mr-3' />
                            <TextField
                                label="Enter Code"
                                id="outlined-size-small"
                                name="Enter Code"
                                //   value={formData.First_Name}
                                //   onChange={handleInputChange}
                                //   error={!!errors.First_Name}
                                size="small"
                                className="w-52 "
                            />
                            <button className='border mx-3 w-14 h-7 flex items-center justify-center rounded-full'>Apply</button>
                        </div>

                        <div>
                            <h1 className='border-b'>Another payment method</h1>
                        </div>

                        <div>
                            <div className='flex flex-col'>
                                <div className='flex my-2'>
                                <input type='radio'onClick={handleopen} />
                                <span className="mx-2">Credit or debit card</span>
                                </div>
                                <div>
                                <img src={payment} className='w-80 h-9'/>
                                </div>
                                {
                                    isPopupShow &&(
                                        <div className='flex my-2'>
                                            <img src={plus} className='w-5 h-5'/>
                                            <p>Enter  card details</p>
                                            </div>

                                    )
                                }

                            </div>

                            <div className='flex my-2'>
                                <input type='radio' />
                                <span className="mx-2">
                                    Net Banking
                                </span>
                            </div>
                            <div className='flex my-2'>
                                <input type='radio' />
                                <span className="mx-2">
                                   EMI
                                </span>
                            </div>

                            <div className='flex my-2'>
                                <input type='radio' />
                                <span className="mx-2">
                                Cash on Delivery
                                </span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
          )}
        </div>

        {/* <div className=" w-[30%]  ml-6 flex flex-col pt-2 items-center">
          
            <div className="border-b ">
              <div className="flex items-center justify-center">
                <button className="border rounded-full text-sm flex justify-center items-center w-32 h-8 bg-blue-900 text-white">Use</button>
              </div>
              <div className="text-xs flex items-center justify-center flex-col my-1 border-b">
                <p>Choose a shipping address and payment</p>
                <p>method to calculate shipping, handling and</p>
                <p>tax.</p>
              </div>
              <div>
                <h1 className="font-semibold text-xl my-2">Order Summary</h1>
              </div>
              <div className="flex justify-between text-sm mt-3">
                <p>Items :</p>
                <p>--</p>
              </div>
              <div className="flex justify-between text-sm border-b mb-2">
                <p>Delivery :</p>
                <p>--</p>
              </div>
              <div className="flex justify-between text-red-500 font-semibold">
                <p>Order Total:</p>
                <p>$10,000</p>
              </div>
            </div>
         

        
        </div> */}
        </div>







      </div>
    </div>
          
        {/* other components start */}
        <div className="w-[75%]">
         <div className="border-b my-3">
             <h1>2 Payment method</h1>
         </div>
         <div className="border-b my-3">
             <h1>3 Offers</h1>
         </div>
         <div className="border-b my-3">
             <h1>4 Items and delivery</h1>
         </div>

         </div>
        </div>
      </div>
    </div>
  );
}

export default Address;

