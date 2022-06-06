import { useState } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import axios from "../config/axios";

export default function SearchBar({ onChangeCountrySelected }) {
  const [inputSearch, setInputSearch] = useState("");

  const searchCountry = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.get(`/countries/${inputSearch}`);
      onChangeCountrySelected(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form className="max-w-xl w-full px-4 md:px-0" onSubmit={searchCountry}>
      <div className="bg-white my-4 flex items-center rounded-md shadow-md px-4 py-2 relative">
        <input
          type="text"
          className="grow focus:outline-none px-4 py-2"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <button type="submit">
          <SearchIcon className="w-5 h-5 text-black" />
        </button>
      </div>
    </form>
  );
}
