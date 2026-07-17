import "../styles/Topbar.css";

function Topbar() {

    const role = localStorage.getItem("role") || "User";

    const today = new Date().toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (

        <header className="topbar">

            <div>

                <h2>Welcome to Army Healthcare AI</h2>

                <p>{today}</p>

            </div>

            <div className="topbar-right">

                <div className="notification">

                    🔔

                </div>

                <div className="profile">

                    <span>👤</span>

                    <div>

                        <h4>{role}</h4>

                        <p>Logged In</p>

                    </div>

                </div>

            </div>

        </header>

    );

}

export default Topbar;