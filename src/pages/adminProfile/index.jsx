"use client";
import Head from "next/head";
import Image from "next/image";
import {message} from 'antd'

import { useState, useEffect } from "react";
const Index = () => {
 

  const admin = {
    name: "James William",
    first: "James",
    last: "Williams",
    email: "james@email.com",
    phone: "1234567",
    country: "USA",
    city: "New York",
    password: "abcd123",
    address: "333 St Paun, New York , USA",
    role: "Director"
  };

  const [formData, setFormData] = useState({
    firstName: admin.first,
    lastName: admin.last,
    email: admin.email,
    phone: admin.phone,
    country: admin.country,
    city: admin.city,
    password: admin.password,
    address: admin.address,
    role: admin.role
  });

  const [isFormEdited, setIsFormEdited] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setIsFormEdited(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormEdited) {
      message.success('Account is Upto Date')
      
      return;
    }
  
    admin.first = formData.firstName;
    admin.last = formData.lastName;
    admin.email = formData.email;
    admin.phone = formData.phone;
    admin.country = formData.country;
    admin.city = formData.city;
    admin.password = formData.password;
    admin.address = formData.address;
    admin.role = formData.role;

    setFormData({
      firstName: admin.first,
      lastName: admin.last,
      email: admin.email,
      phone: admin.phone,
      country: admin.country,
      city: admin.city,
      password: admin.password,
      address: admin.address,
      role: admin.role
    });
    message.success('Account Updated!')

  };

  return (
    <div className="w-full bg-[#F3F8FF]">
      <Head>
        <title>Profile</title>
      </Head>
      <div className="h-full w-full    overflow-hidden fontItems">
        <div className="w-full h-full flex md:flex-row flex-col items-center md:justify-start my-5 md:mx-8 px-4 md:px-0 ">
          <div className=" w-full md:w-80 flex md:flex-col flex-wrap  ">
            <div className="flex flex-col flex-grow  items-center bg-[#FFFFFF] shadow-sm rounded-md px-3 py-5  md:w-[260px]">
              <div className="flex items-center justify-center mt-1 fontItems">
                <div className="w-30 h-30 rounded-full  overflow-hidden">
                  <Image
                    src="/images/admin.svg"
                    width={100}
                    height={100}
                    alt="Admin Image"
                  />
                </div>
              </div>
              <div className="text-center mt-2">
                <p className="text-black text-[18px] font-[600] fontItems">
                 {admin.name}
                </p>
              </div>
              <div className="text-center mt-2 w-[90px]">
                <p className="text-[#777777] px-1 rounded-sm text-[14px] font-[400]">
                 {admin.role}
                </p>
              </div>
              <div className="text-center mt-2">
                <p className="text-[#2668E8] text-[14px] font-[500] flex items-center relative">
                <Image
                      src="/images/address.svg" // Replace with the path to your location icon image
                      width={13}
                      height={13}
                      className="mr-2"
                      alt="Location Icon"
                    />
                    NewYork, USA
                </p>
              </div>
              <div className="mt-8 w-full">
                <button className="w-full bg-[#2668E8] text-white py-1 rounded-sm text-[16px] font-[500] fontItems">
                  Log Out
                </button>
              </div>
            </div>
            <div className="w-full flex flex-grow flex-1 flex-wrap  ">
              <div className="bg-[#FFFFFF] flex flex-col shadow-sm   justify-around  md:w-[260px] rounded-lg py-3 px-5 sm:ml-3   md:ml-0 md:my-3 w-full  md:h-auto h-full overflow-hidden">
                <div className="flex items-start my-2 fontItems">
                  <div className="relative w-5 h-5 mr-3">
                    <Image
                      src="/images/email.svg" // Replace with the path to your email icon image
                      layout="fill"
                      objectFit="contain"
                      alt="Email Icon"
                    />
                  </div>
                  <p className="text-[14px] font-[400]">admin@example.com</p>
                </div>
                <div className="flex items-center my-2">
                  <div className=" relative w-5 h-5 mr-3">
                    <Image
                      src="/images/phone.svg" // Replace with the path to your phone icon image
                      layout="fill"
                      objectFit="contain"
                      alt="Phone Icon"
                    />
                  </div>
                  <p className="text-[14px] font-[400]">+1 123-456-7890</p>
                </div>
                <div className="flex items-center my-2">
                  <div className="relative w-5 h-5 mr-3">
                    <Image
                      src="/images/address.svg" // Replace with the path to your location icon image
                      layout="fill"
                      objectFit="contain"
                      alt="Location Icon"
                    />
                  </div>
                  <p className="text-[14px] font-[400]">
                    123 Main Street, City, Country
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:flex-row flex flex-col   my-5 md:my-0 mx-4 md:mx-6 lg:mx-10 gap-4">
          <div className="w-full bg-[#FFFFFF] shadow-sm   rounded-md px-6 py-5">
            <h2 className="font-semibold text-[18px]">User Profile</h2>
            <form className="my-3 fontItems" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 fontItems">
                <div>
                  <label
                    htmlFor="firstName"
                    className="text-[16px] font-normal text-[#777777]"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full py-2 px-3 bg-[#B4C7ED24] border border-[#2668E899] rounded transition duration-300 focus:outline-none focus:border-blue-500 hover:border-blue-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="text-[16px] font-normal text-[#777777]"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full py-2 px-3 bg-[#B4C7ED24] border border-[#2668E899] rounded transition duration-300 focus:outline-none focus:border-blue-500 hover:border-blue-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-[16px] font-normal text-[#777777]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full py-2 px-3 bg-[#B4C7ED24] border border-[#2668E899] rounded transition duration-300 focus:outline-none focus:border-blue-500 hover:border-blue-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="text-[16px] font-normal text-[#777777]"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full py-2 px-3 bg-[#B4C7ED24] border border-[#2668E899] rounded transition duration-300 focus:outline-none focus:border-blue-500 hover:border-blue-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="city"
                    className="text-[16px] font-normal text-[#777777]"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full py-2 px-3 bg-[#B4C7ED24] border border-[#2668E899] rounded transition duration-300 focus:outline-none focus:border-blue-500 hover:border-blue-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="city"
                    className="text-[16px] font-normal text-[#777777]"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full py-2 px-3 bg-[#B4C7ED24] border border-[#2668E899] rounded transition duration-300 focus:outline-none focus:border-blue-500 hover:border-blue-300"
                  />
                </div>
                
              </div>
              <div className="w-full mt-3">
                  <label
                    htmlFor="address"
                    className="text-[16px] font-normal text-[#777777]"
                  >
                    Address
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full h-40 py-2 px-3 bg-[#B4C7ED24] border border-[#2668E899] rounded transition duration-300 focus:outline-none focus:border-blue-500 hover:border-blue-300 resize-none"
                  />
                </div>
              <button
                type="submit"
                className="mt-6 bg-[#2668E8] text-white py-2 px-4 rounded transition duration-300 hover:bg-blue-700"
              >
                Update Account
              </button>
            </form>
          </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Index;
