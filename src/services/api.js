import axios from "axios";

axios.defaults.baseURL = "https://645a13f665bd868e93101c10.mockapi.io";

export const fetchTweets = async () => {
  try {
    const response = await axios.get("/users");
    return response.data;
  } catch (e) {
    console.log(e.message);
  }
};

export const followTweets = async (id, isFollowing) => {
  try {
    const response = await axios.put(`/users/${id}`, {
      isFollowing: !isFollowing,
    });
    return response.data;
  } catch (e) {
    console.log(e.message);
  }
};
