import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:5000";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const downloadFile = (blob, fileName) => {
  const url = window.URL.createObjectURL(new Blob([blob]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const calculateShortestPath = async (start, end, kml) => {
  try {
    const response = await api.post("/calculate_shortest_path", {
      start,
      end,
      kml,
    });
    if (kml) {
      // Handle blob response for KML
      const contentDisposition = response.headers["content-disposition"];
      const fileName = contentDisposition.split("filename=")[1];
      downloadFile(response.data, fileName);
      // No need to return anything or update state here
    } else {
      // Handle JSON response for path
      return response.data; // Adjust the path property based on your actual structure
    }
  } catch (error) {
    console.error("Error in API call:", error);
    throw error;
  }
};

const apiFunctions = {
  calculateShortestPath,
};

export default apiFunctions;
