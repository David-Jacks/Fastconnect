import React from "react";
import Notify from "../notify/notify";
import "./notification.css";

const Notification = () => {
  return (
    <>
      <div className="notification-panel">
        <button className="btn-noti" onClick={() => {}}>
          X
        </button>
        <div className="n-head">you are notified bellow</div>
        <div className="n-body">
          <Notify />
          <Notify />
          <Notify />
          <Notify />
          <Notify />
          <Notify />
          <Notify />
          <Notify />
          <Notify />
          <Notify />
          <Notify />
          <Notify />
          <Notify />
          <Notify />
          <Notify />
        </div>
      </div>
    </>
  );
};

export default Notification;
