import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = ({ content }) => {
  React.useEffect(() => {
    if (content) {
      toast(content);
    }
  }, [content]);

  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default Toast;
