import { useState } from "react";
import "../styles/Notification.css";

function Notifications() {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Payment of ₹5000 received.", type: "success", time: "2h ago" },
    { id: 2, message: "Your withdrawal request is pending.", type: "warning", time: "5h ago" },
    { id: 3, message: "Transaction of ₹10000 failed.", type: "error", time: "1d ago" },
  ]);

  return (
    <div className="notifications">
      <h2>Notifications</h2>
      <ul>
        {notifications.map(notif => (
          <li key={notif.id} className={notif.type}>
            <span>{notif.message}</span>
            <small>{notif.time}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
