import Axios from "axios";

const client = Axios.create({
  headers: {
    "content-type": "application/json",
    "x-access-token": localStorage.getItem("token"),
  },
  baseURL: "https://football-games-record.glitch.me/api/v1",
});

export default client;
