import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-builder-8c80c.firebaseio.com/",
});

export default instance;
