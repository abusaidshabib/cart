import api1 from "../lib/axiosInstance";

export const getProducts = async () => {
  try {
    const response = await api1.get(`/products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};
