import React, { useState } from "react";
import {
  Button,
  Col,
  Row,
  Space,
  Table,
  Tag,
  Typography,
  Modal,
  Checkbox,
  Form,
  Input,
} from "antd";
import Title from "antd/es/typography/Title";
import { v4 as uuid, v4 } from "uuid";
const data = [
  {
    key: "1",
    firstName: "John",
    lastName: "Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    firstName: "Jim",
    lastName: "Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const Users = () => {
  const [userData, setUserData] = useState(data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const columns = [
    {
      title: "Name",
      dataIndex: "firstName",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Address",
      dataIndex: "tags",
      render: (tags) => (
        <>
          {tags?.map((tag) => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: "Action",
      // dataIndex: "tags",
      dataIndex: "key",
      render: (key, user) => (
        <Space size="middle">
          <a
            onClick={() => {
              setIsEditing(true);
              showModal();
              setSelectedUser(user);
            }}
          >
            Edit
          </a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const onFinish = (values) => {
    console.log("Success:", values);
    if (isEditing) {
      const updatedUser = { ...selectedUser, ...values };
      const updatedUsers = userData.map((user) => {
        if (user.key === updatedUser.key) {
          return updatedUser;
        }
        return user;
      });
      setUserData(updatedUsers);
    } else setUserData([...userData, { key: uuid(), ...values }]);
    // setUserData([...userData, { key: uuid(), ...values }]);
    handleOk();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Typography>
        <Title>Users Management</Title>
      </Typography>
      <Row>
        <Col>
          <Button
            type="primary"
            onClick={() => {
              showModal();
              setIsEditing(false);
              setSelectedUser(null);
            }}
          >
            Add
          </Button>
        </Col>
      </Row>

      <Table columns={columns} dataSource={userData} />
      <Modal
        title={isEditing ? "Update user" : "Add New User"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="basic"
          key={selectedUser?.key}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={selectedUser}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="firstName"
            name="firstName"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="age"
            name="age"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input type="number" />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              {isEditing ? "Update" : "Submit"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Users;
