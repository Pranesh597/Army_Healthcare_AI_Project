import "../styles/StatCard.css";

function StatCard({

    title,

    value,

    icon,

    color,

}) {

    return (

        <div
            className="stat-card"
            style={{
                borderLeft: `6px solid ${color}`,
            }}
        >

            <div className="stat-icon">

                {icon}

            </div>

            <div>

                <h2>{value}</h2>

                <p>{title}</p>

            </div>

        </div>

    );

}

export default StatCard;