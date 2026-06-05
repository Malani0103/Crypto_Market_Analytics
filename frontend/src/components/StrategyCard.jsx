function StrategyCard({ strategy }) {
    return (
        <div
            style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "15px",
                margin: "10px",
                boxShadow: "0px 2px 5px rgba(0,0,0,0.2)"
            }}
        >
            <h3>{strategy.coin_name}</h3>

            <p>
                <strong>Signal:</strong>
                {" "}
                {strategy.signal}
            </p>

            <p>
                <strong>Current Price:</strong>
                {" "}
                {strategy.current_price}
            </p>

            <p>
                <strong>Moving Average:</strong>
                {" "}
                {strategy.moving_average}
            </p>
        </div>
    );
}

export default StrategyCard;