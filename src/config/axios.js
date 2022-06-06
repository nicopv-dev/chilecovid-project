import axios from "axios";

const VERSION = "v3";
const BASE_URL = `https://disease.sh/${VERSION}/covid-19`;

const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance;
