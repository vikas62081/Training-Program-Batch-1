import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Input, List, Row, Typography } from "antd";
import React, { useState } from "react";
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
    id: 3,
    title: "Buy a new laptop",
    status: "pending",
  },
];
const Todo = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const handleChange = (e) => {
    setNewTodoTitle(e.target.value);
  };
  const addNewTodo = () => {
    const newTodo = { id: 4, title: newTodoTitle, status: "pending" };
    setTodos([...todos, newTodo]);
    setNewTodoTitle("");
  };
  return (
    <>
      {/* {todos.map((todo) => (
        <div>
          <h4>{todo.title}</h4>
        </div>
      ))} */}
      <Row justify="center">
        <Col span={10}>
          <Input.Group compact>
            <Input
              name="newTodoTitle"
              value={newTodoTitle}
              onChange={handleChange}
              placeholder="Add your new todo..."
              size="large"
              style={{ width: "calc(100% - 50px)" }}
            />
            <Button type="primary" size="large" onClick={addNewTodo}>
              <PlusOutlined />
            </Button>
          </Input.Group>
          <List
            bordered
            dataSource={todos}
            renderItem={(todo) => <List.Item>{todo.title}</List.Item>}
          />
        </Col>
      </Row>
    </>
  );
};
export default Todo;
