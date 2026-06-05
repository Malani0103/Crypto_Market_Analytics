import api from "../api/api";

export const getMarketData = async () => {
    const response = await api.get("/markets/");
    return response.data;
};

export const getAnalytics = async () => {
    const response = await api.get("/analytics/");
    return response.data;
};

export const runStrategy = async () => {
    const response = await api.post("/strategy/run");
    return response.data;
};