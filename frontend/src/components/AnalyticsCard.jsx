function AnalyticsCard({ title, value }) {
    return (
        <div
            style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "20px",
                margin: "10px",
                minWidth: "200px",
                textAlign: "center",
                boxShadow: "0px 2px 5px rgba(0,0,0,0.2)"
            }}
        >
            <h3>{title}</h3>
            <h2>{value}</h2>
        </div>
    );
}

export default AnalyticsCard;