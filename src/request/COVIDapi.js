import axios from "../config/axios";

class COVIDapi {
  async getAllCountriesData() {
    const { data } = await axios.get(`/countries`);
    return data;
  }
}

export default COVIDapi;
