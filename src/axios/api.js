import axios from "axios";
export const getAllUsers = async () => {
  try {
    const res = await axios.get(`http://localhost:3004/users`);
    const data = res.data;
    console.log(res);
    console.log(data);
    return data;
  } catch (err) {
    console.error("Error fetching data", err);
  }
};
