import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:5000";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const calculateShortestPath = async (start, end, kml) => {
  try {
    const response = await api.post("/calculate_shortest_path", {
      start,
      end,
      kml,
    });
    return response.data;
  } catch (error) {
    console.error("Error in API call:", error);
    throw error;
  }
};

const apiFunctions = {
  calculateShortestPath,
};

export default apiFunctions;
