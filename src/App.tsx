import "./App.css";
import { useEffect, useState } from "react";
import { message } from "antd";
import {
  generateRandomString,
  success,
  backendUrl,
  closeMessage,
  openMessage,
} from "./utils";
import { Button, Form, Input, Space } from "antd";
import axios from "axios";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function App() {
  const [messageApi, contextHolder] = message.useMessage();
  const [address, setAddress] = useState("");

  async function connectWallet() {
    const retrievedAddress = window.localStorage.getItem("safeexam-address");
    if (retrievedAddress) {
      success(
        messageApi,
        `Wallet Already Exists\nConnected to ${retrievedAddress}`
      );
      setAddress(retrievedAddress);
    } else {
      const key = generateRandomString(10);
      openMessage(messageApi, key, "Wallet not Found\nCreating new Wallet");
      const res = await axios.post(`${backendUrl}/create-wallet`);
      if (res.status === 200 && res.data.address) {
        closeMessage(
          messageApi,
          key,
          "success",
          `Wallet Created\nConnected to ${res.data.address}`
        );
        setAddress(res.data.address);
        window.localStorage.setItem("safeexam-address", res.data.address);
      } else {
        closeMessage(messageApi, key, "error", "Failed to create wallet");
      }
    }
  }
  useEffect(() => {
    connectWallet();
  }, []);

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
    const key = generateRandomString(10);
    openMessage(messageApi, key, "Writing Transaction");
    try {
      axios
        .post(`${backendUrl}/write-answer`, {
          ...values,
          address: address,
        })
        .then((res) => {
          if (res.status === 200) {
            closeMessage(
              messageApi,
              key,
              "success",
              "Transaction Written\nTransaction Hash: " + res.data.txId,
              () => {
                window.open(res.data.url);
              }
            );
          } else {
            closeMessage(
              messageApi,
              key,
              "error",
              "Failed to write transaction"
            );
          }
        });
    } catch (e) {
      closeMessage(messageApi, key, "error", "Failed to write transaction");
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <>
      <div className="mainWrapper">
        {address != "" ? (
          <main>
            <h1 style={{ textAlign: "center" }}>Safe Exam</h1>
            <h4 style={{ textAlign: "center" }}>Connected to {address}</h4>
            <Button
              type="primary"
              style={{ margin: "20px auto",display:"flex" }}
              onClick={() => {
                window.localStorage.removeItem("safeexam-address");
                setAddress("");
                connectWallet();
              }}
            >
              Disconnect & Connect to New Wallet
            </Button>
            <h2 style={{ textAlign: "center" }}>Write Answer</h2>
            <Form
              {...layout}
              form={form}
              name="control-hooks"
              onFinish={onFinish}
              style={{ maxWidth: 600, margin: "20px auto" }}
            >
              <Form.Item
                name="booklet"
                label="Booklet"
                rules={[{ required: true }]}
                initialValue={"A"}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="center_name"
                label="Center Name"
                rules={[{ required: true }]}
                initialValue={"IITD"}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="city"
                label="City"
                rules={[{ required: true }]}
                initialValue={"Delhi"}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="end_time"
                label="End Time"
                rules={[{ required: true }]}
                initialValue={"-"}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="exam_title"
                label="Exam Title"
                rules={[{ required: true }]}
                initialValue={"JEE MAINS"}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="que_ans"
                label="Question & Answer"
                rules={[{ required: true }]}
                initialValue={"4-D"}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="start_time"
                label="Start Time"
                rules={[{ required: true }]}
                initialValue={"2025-01-12-20-37-06"}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="student_id"
                label="Student Id"
                rules={[{ required: true }]}
                initialValue={"dfc4443f"}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="suspicious_activity_detected"
                label="Suspicious Activity Detected"
                rules={[{ required: true }]}
                initialValue={"no"}
              >
                <Input />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Space>
                  <Button type="primary" htmlType="submit">
                    Write Transaction
                  </Button>
                  <Button htmlType="button" onClick={onReset}>
                    Reset
                  </Button>
                </Space>
              </Form.Item>
            </Form>
          </main>
        ) : (
          <div className="center">Please Create a Wallet First</div>
        )}
        {contextHolder}
      </div>
    </>
  );
}

export default App;
