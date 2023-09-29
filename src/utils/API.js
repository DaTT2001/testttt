import axios from "axios";

const API_URL = 'https://test-3d8e8-default-rtdb.asia-southeast1.firebasedatabase.app/user.json'
export const postObjectToApi = async (objectData) => {
    try {
      const response = await axios.post(API_URL, objectData);
      return response.data;
    } catch (error) {
      console.log(error)
    }
};