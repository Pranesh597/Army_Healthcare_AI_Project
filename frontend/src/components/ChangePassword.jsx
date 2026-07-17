import { useState } from "react";

import {
    changePassword,
} from "../services/profileService";

function ChangePassword({

    username,

}) {

    const [currentPassword, setCurrentPassword] = useState("");

    const [newPassword, setNewPassword] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");

    const updateUserPassword = async () => {

        if (
            currentPassword === "" ||
            newPassword === "" ||
            confirmPassword === ""
        ) {

            alert("Please fill all fields.");

            return;

        }

        if (
            newPassword !== confirmPassword
        ) {

            alert("Passwords do not match.");

            return;

        }

        try {

            const response = await changePassword(

                username,

                {

                    current_password: currentPassword,

                    new_password: newPassword,

                }

            );

            alert(response.message);

            setCurrentPassword("");

            setNewPassword("");

            setConfirmPassword("");

        }

        catch (error) {

            console.log(error);

            alert("Unable to change password.");

        }

    };

    return (

        <div className="profile-card">

            <h2>

                Change Password

            </h2>

            <label>

                Current Password

            </label>

            <input
                type="password"
                value={currentPassword}
                onChange={(e) =>
                    setCurrentPassword(
                        e.target.value
                    )
                }
            />

            <label>

                New Password

            </label>

            <input
                type="password"
                value={newPassword}
                onChange={(e) =>
                    setNewPassword(
                        e.target.value
                    )
                }
            />

            <label>

                Confirm Password

            </label>

            <input
                type="password"
                value={confirmPassword}
                onChange={(e) =>
                    setConfirmPassword(
                        e.target.value
                    )
                }
            />

            <button
                onClick={updateUserPassword}
            >

                Change Password

            </button>

        </div>

    );

}

export default ChangePassword;