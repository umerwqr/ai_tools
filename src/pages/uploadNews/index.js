"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import { Input, Select, Upload, Button, Form, InputNumber } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Image from 'next/image'
const { Option } = Select;
import { message } from 'antd';


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
    address: "333 St Paun, New York, USA",
    role: "Director"
  };

  const [form] = Form.useForm();

  const [isFormEdited, setIsFormEdited] = useState(false);

  const handleFormChange = () => {
    setIsFormEdited(true);
  };

  const handleCategoryChange = (value) => {
    // You can implement category change logic here
  };

  const handleSubmit = (values) => {
  
      message.success('News Uploaded');

  

    console.log("Form values:", values);
  };
  



  return (
    <div className="w-full h-full bg-[#F3F8FF] flex md:justify-center md:items-center py-5">
      <div className="rounded-md w-full md:w-[55%] px-[1.4rem] py-[2rem] overflow-hidden bg-[#FFFFFF] fontItems">
        <h1 className="text-[24px] font-[700] mb-4">Upload News</h1>
        <Form
          form={form}
          initialValues={{
            firstName: admin.first,
            lastName: admin.last,
            email: admin.email,
            phone: admin.phone,
            country: admin.country,
            city: admin.city,
            password: admin.password,
            address: admin.address,
            role: admin.role,
          }}
          onValuesChange={handleFormChange}
          onFinish={handleSubmit}
        >
          <div className="flex sm:flex-row flex-col items-center w-full">
            <div className="sm:mr-4 flex flex-col w-full">
              <label
                htmlFor="firstName"
                className="text-[16px] font-normal text-[#777777]"
              >
                First Name
              </label>
              <Form.Item name="firstName">
                <Input className="px-3 py-2 rounded-sm w-full" style={{ borderColor: "#2668E899", borderRadius: "5px", background: "#B4C7ED24",  }} />
              </Form.Item>
            </div>
            <div className="w-full ">
              <label
                htmlFor="lastName"
                className="text-[16px] font-normal text-[#777777]"
              >
                Last Name
              </label>
              <Form.Item name="lastName">
                <Input className="px-3 py-2" style={{ borderColor: "#2668E899", borderRadius: "5px", background: "#B4C7ED24",  }} />
              </Form.Item>
            </div>
          </div>
          
          <div className="flex w-full sm:flex-row flex-col">
            
            <div className="sm:mr-4 w-full">
              <label
                htmlFor="email"
                className="text-[16px] font-normal text-[#777777]"
              >
                Email Address
              </label>
              <Form.Item name="email">
              <Input className="px-3 py-2" style={{ borderColor: "#2668E899", borderRadius: "5px", background: "#B4C7ED24",  }} />

              </Form.Item>
            </div>
            <div className="w-full">
              <label
                htmlFor="Phone Number"
                className="text-[16px] font-normal text-[#777777]"
              >
                Phone Number
              </label>
              <Form.Item  name="phone">
              <Input className="px-3 py-2" style={{ borderColor: "#2668E899", borderRadius: "5px", background: "#B4C7ED24",  }} />
              </Form.Item>
            </div>
          </div>
          
          <div className="flex items-center w-full sm:flex-row flex-col">
            <div className="sm:mr-4 w-full">
              <label
                htmlFor="Tool"
                className="text-[16px] font-normal text-[#777777]"
              >
                Tool
              </label>
              <Form.Item name="tool" >
                <Select onChange={handleCategoryChange}  >
                  <Option value="tool1" >Tool 1</Option>
                  <Option value="tool2">Tool 2</Option>
                </Select>
              </Form.Item>
            </div>
            <div className="w-full">
              <label
                htmlFor="Tool"
                className="text-[16px] font-normal text-[#777777]"
              >
                Category
              </label>
              <Form.Item  name="category">
                <Select >
                  {/* Populate options based on selected tool */}
                </Select>
              </Form.Item>
            </div>
          </div>
          
          <div className="w-full   overflow-hidden">
          <Form.Item className="w-full " style={{width: "100% !important"}}>
          <Upload
            listType="picture-card"
              className=""
              style={{ width: "100% !important", height: "100%"}}
            >
             <div className="flex flex-col items-center " style={{width: "100% !important"}}>
                <Image src="/imgs/uploadNews.svg" width={45} height={45} />
                <h1 className="text-[18px] font-[500] text-black">Browse File</h1>
                <p className="text-[#777777]">Drag and drop files here</p>
             </div>
            </Upload>
          </Form.Item>
        </div>
          
          <div className="flex-col items-center">
            <div className="mr-4">
              <label
                htmlFor="Tool"
                className="text-[16px] font-normal text-[#777777]"
              >
                Description
              </label>
              <Form.Item>
                <Input.TextArea  className="px-3 py-2" style={{ borderColor: "#2668E899", borderRadius: "5px", background: "#B4C7ED24", resize: "none"  }}  />
              </Form.Item>
            </div>
          </div>
          
          <button
            type="submit"
            className="mt-6 bg-[#2668E8] w-full sm:w-auto text-white py-2 px-4 rounded transition duration-300 hover:bg-blue-700"
          >
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Index;
