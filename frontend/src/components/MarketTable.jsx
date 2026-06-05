function MarketTable({ marketData }) {

    return (
        <table
            border="1"
            cellPadding="10"
            style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: "20px"
            }}
        >
            <thead>
                <tr>
                    <th>Coin Name</th>
                    <th>Symbol</th>
                    <th>Price</th>
                    <th>Volume</th>
                </tr>
            </thead>

            <tbody>
                {
                    marketData.map((coin) => (
                        <tr key={coin.id}>
                            <td>{coin.coin_name}</td>
                            <td>{coin.symbol}</td>
                            <td>{coin.price}</td>
                            <td>{coin.volume}</td>
                        </tr>
                    ))
                }
            </tbody>

        </table>
    );
}

export default MarketTable;