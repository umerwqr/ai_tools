import React, { useState } from 'react';
import { Modal, Form, Input, DatePicker, Select, Upload, Button } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message } from 'antd';
import { updateDoc, doc } from 'firebase/firestore'; // Import Firestore update functions
import { db } from '../config/firebase'; // Import your Firebase configuration

const { Option } = Select;
const ModifyUserModal = ({ visible, onCancel, data }) => {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    console.log("id>>||>>>", values.id  , "thisss");
    console.log("oooooooobject", values);
    try {
      const userRef = doc(db, "users", values.id);

      // Create an object with only the field(s) you want to update
      const updatedFields = { name: values.name, joiningDate: values.joiningDate.$d};

      if (Object.keys(updatedFields).length > 0) {
        await updateDoc(userRef, updatedFields);
        message.success('User Modified');
      }

      onCancel();
    } catch (error) {
      console.error("Error updating user:", error);
      message.error("An error occurred while updating the user.");
    }
  };

  return (
    <Modal
      title="Edit User"
      visible={visible}
      onCancel={onCancel}
      footer={null}
    >
      <Form
        form={form}
        initialValues={data}
        onFinish={onFinish}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <Form.Item name="id" label="ID">
          <Input  />
        </Form.Item>
        <Form.Item name="name" label="User">
          <Input style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item name="joiningDate" label="Joining Date">
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item name="Mode" label="Mode">
          <Select>
            <Option value="Premium">Premium</Option>
            <Option value="Free">Free</Option>
          </Select>
        </Form.Item>
        <Form.Item name="userImg" label="User Image">
          <Upload
            listType="picture-card"
            showUploadList={false}
            customRequest={({ onSuccess }) => {
              setTimeout(() => {
                onSuccess('ok');
              }, 0);
            }}
          >
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }} style={{ width: "100%", display: "flex", justifyContent: "end" }}>
          <button
            type="submit"
            className="mt-6 bg-[#2668E8] text-white py-2 px-4 rounded transition duration-300 hover:bg-blue-700"
          >
            Update
          </button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModifyUserModal;