import {
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  SlackSquareOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Checkbox,
  Col,
  Input,
  List,
  message,
  Popconfirm,
  Row,
  Tag,
  Tooltip,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
const initialTodos = [
  {
    id: 1,
    title: "Buy a new laptop",
    status: "pending",
  },
  {
    id: 2,
    title: "Go for shoping",
    status: "pending",
  },
  {
    id: 3,
    title: "Buy a new laptop",
    status: "pending",
  },
  {
    id: 4,
    title: "Buy a new laptop",
    status: "completed",
  },
];
const Todo = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingTodoId, seteditingTodoId] = useState("");
  const handleChange = (e) => {
    setNewTodoTitle(e.target.value);
  };

  const addNewTodo = () => {
    const newTodo = { id: uuid(), title: newTodoTitle, status: "pending" };
    setTodos([...todos, newTodo]);
    setNewTodoTitle("");
    message.success("New todo added successfully");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    debugger;
    if (isEditing) {
      const updatedTodos = todos.map((t) => {
        if (t.id === editingTodoId) {
          return { ...t, title: newTodoTitle };
        }
        return t;
      });
      setTodos(updatedTodos);
      setIsEditing(false);
      seteditingTodoId("");
      setNewTodoTitle("");
      message.success("Todo updated successfully");
    } else addNewTodo();
  };

  const handleCheckboxChange = (id) => {
    const updatedTodos = todos.map((t) => {
      if (t.id === id) {
        return { ...t, status: "completed" };
      }
      return t;
    });
    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    message.success("Todo get deleted successfully");
  };
  const handleEdit = (todo) => {
    setIsEditing(true);
    seteditingTodoId(todo.id);
    setNewTodoTitle(todo.title);
  };

  useEffect(() => {
    if (isEditing) {
      document.title = `Id ${editingTodoId} being edit`;
    }
  }, [isEditing]);
  return (
    <>
      {/* {todos.map((todo) => (
        <div>
          <h4>{todo.title}</h4>
        </div>
      ))} */}
      <Row justify="center">
        <Col span={10}>
          <form onSubmit={handleFormSubmit} autoComplete="off">
            <Input.Group compact>
              <Input
                name="newTodoTitle"
                value={newTodoTitle}
                onChange={handleChange}
                placeholder="Add your new todo..."
                size="large"
                style={{ width: "calc(100% - 50px)" }}
                required
              />
              <Button type="primary" size="large">
                {isEditing ? <EditOutlined /> : <PlusOutlined />}
              </Button>
            </Input.Group>
          </form>
          <List
            bordered
            dataSource={todos}
            renderItem={(todo) => (
              <>
                <List.Item key={todo.title}>
                  <List.Item.Meta
                    avatar={
                      <Avatar icon={<UserOutlined />} />
                      // <Avatar>{todo.title.toUpperCase().slice(0, 2)}</Avatar>
                    }
                    title={
                      <Checkbox
                        onChange={() => handleCheckboxChange(todo.id)}
                        disabled={todo.status === "completed"}
                        checked={todo.status === "completed"}
                      >
                        {todo.title}
                      </Checkbox>
                    }
                    description={
                      <Tag
                        color={
                          todo.status === "completed" ? "success" : "warning"
                        }
                      >
                        {todo.status}
                      </Tag>
                    }
                  />
                  <div>
                    {" "}
                    <Popconfirm
                      title="Delete todo"
                      description="Are you sure to delete this todo?"
                      onConfirm={() => handleDelete(todo.id)}
                      okText="Yes"
                      cancelText="No"
                    >
                      <Tooltip title="Delete">
                        <DeleteOutlined />
                      </Tooltip>
                    </Popconfirm>
                    <Tooltip title="Edit">
                      <EditOutlined onClick={() => handleEdit(todo)} />
                    </Tooltip>
                  </div>
                </List.Item>
                {/* <List.Item>
                  <Checkbox
                    onChange={() => handleCheckboxChange(todo.id)}
                    disabled={todo.status === "completed"}
                    checked={todo.status === "completed"}
                  >
                    {todo.title}
                  </Checkbox>
                  <Popconfirm
                    title="Delete todo"
                    description="Are you sure to delete this todo?"
                    onConfirm={() => handleDelete(todo.id)}
                    // onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Tooltip title="Delete">
                      <DeleteOutlined />
                    </Tooltip>
                  </Popconfirm>
                </List.Item> */}
              </>
            )}
          />
        </Col>
      </Row>
    </>
  );
};
export default Todo;
