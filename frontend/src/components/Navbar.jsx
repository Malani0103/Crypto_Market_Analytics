import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav
            style={{
                display: "flex",
                gap: "20px",
                padding: "20px",
                justifyContent: "center",
                backgroundColor: "#1e293b"
            }}
        >
            <Link
                to="/"
                style={{
                    color: "white",
                    textDecoration: "none"
                }}
            >
                Dashboard
            </Link>

            <Link
                to="/analytics"
                style={{
                    color: "white",
                    textDecoration: "none"
                }}
            >
                Analytics
            </Link>

            <Link
                to="/strategy"
                style={{
                    color: "white",
                    textDecoration: "none"
                }}
            >
                Strategy
            </Link>
        </nav>
    );
}

export default Navbar;