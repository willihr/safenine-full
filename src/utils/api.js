import axios from "axios";

export default axios.create({
  baseURL: "https://safenine.herokuapp.com/",
  responseType: "json"
});
