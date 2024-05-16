// import React, { useState } from "react";
// import Chiperline from "chiperline";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const chiper = new Chiperline(process.env.CPL64_TOKEN, true);

// export default function Navigate() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     termsChecked: false,
//   });
//   const navigate = useNavigate();

//   const handleInputChange = (event) => {
//     const target = event.target;
//     const value = target.type === "checkbox" ? target.checked : target.value;
//     const name = target.name;

//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const PostRequest = async (name, email, password) => {
//     try {
//       toast.info("Loading...", {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//       });
//       let _name = chiper.encrypt(name);
//       let _email = chiper.encrypt(email);
//       let _password = chiper.encrypt(password);
//       const response = await fetch("http://localhost:5000/api/register/new", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ _name, _email, _password }),
//       });
//       const data = await response.json();
//       if (data.created) {
//         navigate("/");
//       } else {
//         toast.error("Email Already in use", {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const { name, email, password, termsChecked } = formData;
//     termsChecked
//       ? PostRequest(name, email, password)
//       : toast.error("Please Agree the terms", {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });
//   };

//   return (
//     <>
//       <ToastContainer />
//       <div className="flex justify-center pt-20 h-screen">
//         <div className="max-w-448 px-3">
//           <div className="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
//             <div className="p-6 mb-0 text-center bg-white border-b-0 rounded-t-2xl">
//               <div className="flex items-center justify-center">
//                 <img
//                   src={require("../../img/esel.png")}
//                   alt="404 Logo"
//                   className="mr-2"
//                 />
//                 <h5 className="font-bold border-l-2 pl-2 border-black">
//                   Register Page
//                 </h5>
//               </div>
//             </div>
//             <div className="flex flex-wrap px-3 -mx-3 sm:px-6 xl:px-12">
//               {/* Social media icons */}
//             </div>
//             <div className="flex-auto p-6">
//               <form onSubmit={handleSubmit} className="text-left">
//                 <div className="mb-4">
//                   <input
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     aria-describedby="email-addon"
//                     aria-label="Name"
//                     placeholder="Name"
//                     className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
//                     type="text"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <input
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     aria-describedby="email-addon"
//                     aria-label="Email"
//                     placeholder="Email"
//                     className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
//                     type="email"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <input
//                     id="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleInputChange}
//                     aria-describedby="password-addon"
//                     aria-label="Password"
//                     placeholder="Password"
//                     className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
//                     type="password"
//                   />
//                 </div>
//                 <div className="min-h-6 pl-7 mb-0.5 block">
//                   <input
//                     id="terms"
//                     name="termsChecked"
//                     checked={formData.termsChecked}
//                     onChange={handleInputChange}
//                     type="checkbox"
//                     className="w-5 h-5 ease-soft -ml-7 rounded-1.4 checked:bg-gradient-to-tl checked:from-gray-900 checked:to-slate-800 after:duration-250 after:ease-soft-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-200 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100"
//                   />
//                   <label
//                     htmlFor="terms"
//                     className="mb-2 ml-1 font-normal cursor-pointer select-none text-sm text-slate-700"
//                   >
//                     I agree the{" "}
//                     <a className="font-bold text-slate-700">
//                       Terms and Conditions
//                     </a>
//                     <svg
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="w-4 h-4 inline ml-1 fill-current text-green-500"
//                     >
//                       <path d="M6.293 9.293a1 1 0 0 1 1.414 0L10 10.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"></path>
//                     </svg>
//                   </label>
//                 </div>

//                 <div className="text-center">
//                   <button
//                     className="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white"
//                     type="submit"
//                   >
//                     Sign up
//                   </button>
//                 </div>
//                 <p className="mt-4 mb-0 leading-normal text-sm">
//                   Already have an account?{" "}
//                   <a
//                     className="font-bold text-slate-700"
//                     href="../login"
//                   >
//                     Sign in
//                   </a>
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }