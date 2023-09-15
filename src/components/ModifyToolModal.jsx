// ModifyToolModal.jsx

import React from 'react';
import { Modal, Form, Input, DatePicker, InputNumber, Select, Upload, Button } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message } from 'antd';
const { Option } = Select;

const ModifyToolModal = ({ visible, onCancel, data }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    message.success('Tool Modified');
    onCancel();
  };

  return (
    <Modal
      title="Edit Tool"
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
          <Input/>
        </Form.Item>
        <Form.Item name="tooltitle" label="Tool Title" rules={[{ required: true, message: 'Please input tool title!' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="user" label="User">
          <Input style={{width: "100%",}} />
        </Form.Item>
        <Form.Item name="category" label="Category">
          <Input  style={{width: "100%"}}/>
        </Form.Item>
        <Form.Item name="addedDate" label="Added Date">
          <DatePicker  style={{width: "100%"}} />
        </Form.Item>
        <Form.Item name="Favourite" label="Favourite">
          <InputNumber  style={{width: "100%"}} />
        </Form.Item>
        <Form.Item name="Mode" label="Mode">
          <Select >
            <Option value="Premium">Premium</Option>
            <Option value="Free">Free</Option>
          </Select>
        </Form.Item>
        <Form.Item name="toolImg" label="Tool Image">
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
        
        <Form.Item wrapperCol={{ span: 24 }} style={{width: "100%", display: "flex", justifyContent: "end"}}>
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

export default ModifyToolModal;
