import { useState } from "react";

import {
    updateProfile,
} from "../services/profileService";

function ProfileCard({

    profile,

    onRefresh,

}) {

    const [username, setUsername] = useState(
        profile.username
    );

    const [email, setEmail] = useState(
        profile.email
    );

    const saveProfile = async () => {

        try {

            await updateProfile(

                profile.username,

                {

                    username,

                    email,

                }

            );

            alert(
                "Profile Updated Successfully"
            );

            if (onRefresh) {

                onRefresh();

            }

        }

        catch (error) {

            console.log(error);

            alert(
                "Unable to Update Profile"
            );

        }

    };

    return (

        <div className="profile-card">

            <h2>

                My Profile

            </h2>

            <label>

                Username

            </label>

            <input
                type="text"
                value={username}
                onChange={(e) =>
                    setUsername(
                        e.target.value
                    )
                }
            />

            <label>

                Email

            </label>

            <input
                type="email"
                value={email}
                onChange={(e) =>
                    setEmail(
                        e.target.value
                    )
                }
            />

            <label>

                Role

            </label>

            <input
                type="text"
                value={profile.role}
                readOnly
            />

            <label>

                Created At

            </label>

            <input
                type="text"
                value={new Date(
                    profile.created_at
                ).toLocaleString()}
                readOnly
            />

            <button
                onClick={saveProfile}
            >

                Save Profile

            </button>

        </div>

    );

}

export default ProfileCard;