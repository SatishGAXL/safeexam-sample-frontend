import { MessageInstance } from "antd/es/message/interface";

export const success = (
  messageApi: MessageInstance,
  msg: string,
  onclick: () => void = () => {}
) => {
  messageApi.open({
    type: "success",
    content: msg,
    onClick: onclick,
  });
};

export const error = (messageApi: MessageInstance, msg: string) => {
  messageApi.open({
    type: "error",
    content: msg,
  });
};

export const warning = (messageApi: MessageInstance, msg: string) => {
  messageApi.open({
    type: "warning",
    content: msg,
  });
};

export const openMessage = (
  messageApi: MessageInstance,
  key: string,
  msg: string
) => {
  messageApi.open({
    key,
    type: "loading",
    content: msg,
    duration: 0,
  });
};

export const closeMessage = (
  messageApi: MessageInstance,
  key: string,
  type: "success" | "error",
  msg: string,
  onclick: () => void = () => {}
) => {
  //call hook in a function
  messageApi.open({
    key,
    type: type,
    content: msg,
    onClick: onclick,
    duration: 5,
  });
};

export function generateRandomString(length: number) {
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    randomString += charset[randomIndex];
  }

  return randomString;
}

export const backendUrl = "https://safeexam-api-d4fga3ercpaaekey.centralindia-01.azurewebsites.net";
// export const backendUrl = "http://localhost:3000";