import axios from "axios";

const SERVER_URL = "http://localhost:8000/api/v1";

export const register = async (userData) => {
  try {
    const res = await axios.post(`${SERVER_URL}/users/register`, userData, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    if (error.response) {
      return {
        success: false,
        message: error.response.data.message,
        errors: error.response.data.errors || [],
      };
    } else {
      return {
        success: false,
        message: "Something went wrong. Please try again.",
      };
    }
  }
};

export const login = async (identifier, password) => {
  try {
    const res = await axios.post(
      `${SERVER_URL}/users/login`,
      { identifier, password },
      { withCredentials: true }
    );

    return res.data;
  } catch (error) {
    return error;
  }
};

export const profileSetup = async (formData) => {
  try {
    const res = await axios.patch(
      `${SERVER_URL}/users/profile-setup`,
      formData,
      { withCredentials: true }
    );

    return res.data;
  } catch (error) {
    return error;
  }
};
