import { apiInstance } from "./api";

// centralized error handler
const handleError = (error) => {
  const message =
    error?.response?.data?.message ||
    error?.message ||
    "Something went wrong. Please try again.";

  // log once for debugging
  console.warn("API Error:", message);
  return message; // return instead of throwing
};

// wrappers
export const getFetch = async (url) => {
  try {
    const response = await apiInstance.get(url);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const postFetch = async (url, body) => {
  try {
    const response = await apiInstance.post(url, body);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const putFetch = async (url, body) => {
  try {
    const response = await apiInstance.put(url, body);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const patchFetch = async (url, body) => {
  try {
    const response = await apiInstance.patch(url, body);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const deleteFetch = async (url) => {
  try {
    const response = await apiInstance.delete(url);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

