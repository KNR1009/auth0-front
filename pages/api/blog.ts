import axios from "axios";

export const getPosts = () => {
  axios.get("http://localhost:3000/api/v1/posts").then((res) => {
    return res;
  });
};
