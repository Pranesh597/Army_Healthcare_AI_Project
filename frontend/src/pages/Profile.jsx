import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import ProfileCard from "../components/ProfileCard";
import ChangePassword from "../components/ChangePassword";

import { getProfile } from "../services/profileService";

import "../styles/Profile.css";

function Profile() {

    const [profile, setProfile] = useState(null);

    const username = localStorage.getItem("username");

    const loadProfile = async () => {

        try {

            const data = await getProfile(username);

            setProfile(data);

        }

        catch (error) {

            console.log(error);

        }

    };

    useEffect(() => {

        loadProfile();

    }, []);

    if (!profile) {

        return <h2>Loading...</h2>;

    }

    return (

        <div className="layout">

            <Sidebar />

            <div className="main-content">

                <Topbar
                    title="My Profile"
                />

                <div className="profile-page">

                    <ProfileCard
                        profile={profile}
                        onRefresh={loadProfile}
                    />

                    <ChangePassword
                        username={profile.username}
                    />

                </div>

            </div>

        </div>

    );

}

export default Profile;