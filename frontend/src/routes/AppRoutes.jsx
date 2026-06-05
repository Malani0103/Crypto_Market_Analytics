import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Navbar from "../components/Navbar";

import Dashboard from "../pages/Dashboard";
import Analytics from "../pages/Analytics";
import Strategy from "../pages/Strategy";


function AppRoutes() {

    return (

        <BrowserRouter>

            <Navbar />

            <Routes>

                <Route
                    path="/"
                    element={<Dashboard />}
                />

                <Route
                    path="/analytics"
                    element={<Analytics />}
                />

                <Route
                    path="/strategy"
                    element={<Strategy />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default AppRoutes;