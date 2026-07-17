import { useState } from "react";

function NotificationSettings() {

    const [emailNotifications, setEmailNotifications] = useState(true);

    const [smsNotifications, setSmsNotifications] = useState(false);

    const [criticalAlerts, setCriticalAlerts] = useState(true);

    return (

        <div className="profile-card">

            <h2>

                Notification Settings

            </h2>

            <label>

                <input
                    type="checkbox"
                    checked={emailNotifications}
                    onChange={() =>
                        setEmailNotifications(
                            !emailNotifications
                        )
                    }
                />

                Email Notifications

            </label>

            <label>

                <input
                    type="checkbox"
                    checked={smsNotifications}
                    onChange={() =>
                        setSmsNotifications(
                            !smsNotifications
                        )
                    }
                />

                SMS Notifications

            </label>

            <label>

                <input
                    type="checkbox"
                    checked={criticalAlerts}
                    onChange={() =>
                        setCriticalAlerts(
                            !criticalAlerts
                        )
                    }
                />

                Critical Patient Alerts

            </label>

        </div>

    );

}

export default NotificationSettings;