import axios from "axios";

const baseURL = "http://127.0.0.1:5000";

export const authAPI = {
  login: async (formData) => {
    try {
      const res = await axios.post(`${baseURL}/auth/login`, formData);
      return res.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  register: async (formData) => {
    try {
      const res = await axios.post(`${baseURL}/auth/register`, formData);
      return res.data;
    } catch (error) {
      throw error.response.data;
    }
  },
};

export const adminAPI = {
  getCustomers: async () => {
    try {
      const res = await axios.get(`${baseURL}/admin/users`);
      return res.data;
    } catch (error) {
      throw error.response.data;
    }
  },
};
