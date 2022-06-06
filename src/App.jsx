import { useCallback, useEffect, useState } from "react";
import Map from "./components/Map";
import SearchBar from "./components/SearchBar";
import axios from "./config/axios";
import COVIDapi from "./request/COVIDapi";

function App() {
  const [allCountriesData, setAllCountriesData] = useState(null);
  const [countrySelected, setCountrySelected] = useState(null);

  const onChangeCountrySelected = (country) => {
    setCountrySelected(country);
  };

  const fetchData = useCallback(async () => {
    try {
      const COVIDApi = new COVIDapi();
      const data = await COVIDApi.getAllCountriesData();
      setAllCountriesData(data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="w-full min-h-screen bg-white relative">
      <header className="w-full flex justify-center items-center absolute top-0 z-10">
        <SearchBar onChangeCountrySelected={onChangeCountrySelected} />
      </header>
      <main className="w-full z-0">
        <Map countrySelected={countrySelected} />
      </main>
    </div>
  );
}

export default App;
