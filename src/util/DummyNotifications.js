import { icons } from "../constants";
export const DUMMY_NOTIFICATIONS = [
  {
    id: 1,
    type: "success",
    title: "Success",
    message: "Your profile has been updated successfully!",
    autoDismiss: true,
    icon: icons.notification,
    date: '17-10-2024' ,
  },
  {
    id: 2,
    type: "error",
    title: "Error",
    message: "Failed to save your changes. Please try again.",
    autoDismiss: false,
    icon: icons.notification,
    date: '17-10-2024' ,
  },
  {
    id: 3,
    type: "warning",
    title: "Warning",
    message: "Your session will expire in 5 minutes.",
    autoDismiss: true,
    icon: icons.notification,
    date: '17-10-2024' ,
  },
  {
    id: 4,
    type: "info",
    title: "Information",
    message: "Your new message will appear shortly.",
    autoDismiss: true,
    icon: icons.notification,
    date: '17-10-2024' ,
  },
  {
    id: 5,
    type: "success",
    title: "Payment",
    message: "Your payment of $50 has been processed.",
    autoDismiss: true,
    icon: icons.notification,
    date: '17-10-2024' ,
  },
  {
    id: 6,
    type: "error",
    title: "Login Failed",
    message: "Incorrect username or password. Please try again.",
    autoDismiss: true,
    icon: icons.notification,
    date: '17-10-2024' ,
  },
];