import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image"
import { Input, Button, message } from "antd";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleInputChange = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value
    }));
  };

  const handleSignUp = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
      message.error("Please enter all the fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      message.error("Passwords do not match");
      return;
    }
    message.success("Signed up successfully!");
  
    window.location.href = "/";
  };

  return (
    <div className="h-screen flex justify-center items-center bg-[#042757]">
      <div className="p-8 rounded-lg w-full sm:w-[37%]  px-4 sm:px-7 py-7"
       style={{
        backgroundColor: "#4e6583",
        backdropFilter: "blur(20px)", 
        border: "1px solid #41628F",
      }}
      >
        <div className="flex w-full justify-center">
      <div className="relative  flex w-full h-[70px] sm:w-80 sm:h-[100px]">
        <Image src="/aiWorkLogo.png"  fill objectFit="contain"/>
        </div>
        </div>
        <h2 className="text-xl mb-4 tracking-wide text-white text-center">Admin Panel</h2>
        <h3 className="text-2xl text-white font-semibold mb-4 text-center">Sign Up</h3>
        
        <form className="w-full ">
          <div className="mb-4 flex flex-col sm:flex-row">
            <Input placeholder="First Name" className="py-2 flex-grow" value={formData.firstName} onChange={(e) => handleInputChange("firstName", e.target.value)} />
            <Input placeholder="Last Name" className="py-2 flex-grow ml-2" value={formData.lastName} onChange={(e) => handleInputChange("lastName", e.target.value)} />
          </div>
          <div className="mb-4">
            <Input type="email" placeholder="Email" className="py-2" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} />
          </div>
          <div className="mb-4">
            <Input.Password placeholder="Password" className="py-2" value={formData.password} onChange={(e) => handleInputChange("password", e.target.value)} />
          </div>
          <div className="mb-4">
            <Input.Password placeholder="Confirm Password" className="py-2" value={formData.confirmPassword} onChange={(e) => handleInputChange("confirmPassword", e.target.value)} />
          </div>
          <div className="mb-4">
            <Button type="primary" className="bg-[#0E5DCB]" block onClick={handleSignUp}>
              Sign Up
            </Button>
          </div>
        </form>
        
        <p className="text-sm text-white">
          Already have an account?{" "}
          <Link href="/" className="text-blue-500">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
