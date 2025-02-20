// Import message interface from Ant Design library
import { MessageInstance } from "antd/es/message/interface";

/**
 * Display a success message notification
 * @param messageApi - Ant Design message instance
 * @param msg - Message content to display
 * @param onclick - Optional callback function when message is clicked
 */
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

/**
 * Display an error message notification
 * @param messageApi - Ant Design message instance
 * @param msg - Error message content to display
 */
export const error = (messageApi: MessageInstance, msg: string) => {
  messageApi.open({
    type: "error",
    content: msg,
  });
};

/**
 * Display a warning message notification
 * @param messageApi - Ant Design message instance
 * @param msg - Warning message content to display
 */
export const warning = (messageApi: MessageInstance, msg: string) => {
  messageApi.open({
    type: "warning",
    content: msg,
  });
};

/**
 * Open a loading message notification that persists until closed
 * @param messageApi - Ant Design message instance
 * @param key - Unique identifier for the message
 * @param msg - Loading message content to display
 */
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

/**
 * Close an existing message and replace it with a success/error message
 * @param messageApi - Ant Design message instance
 * @param key - Unique identifier of the message to close
 * @param type - Type of the new message ('success' or 'error')
 * @param msg - New message content to display
 * @param onclick - Optional callback function when message is clicked
 */
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

/**
 * Generate a random string of specified length
 * @param length - Length of the random string to generate
 * @returns Random string containing alphanumeric characters
 */
export function generateRandomString(length: number) {
  // Define the character set for random string generation
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";

  // Generate random string by picking random characters from charset
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    randomString += charset[randomIndex];
  }

  return randomString;
}

// Backend API URL configuration
// Production URL
export const backendUrl = "https://safeexam-api-d4fga3ercpaaekey.centralindia-01.azurewebsites.net";
// Development URL (commented out)
// export const backendUrl = "http://localhost:3000";