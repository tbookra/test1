import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "https://api.tvmaze.com/search/shows";

export const useSetFavorites = (searchTxt,setFavorsList) => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchFilms(searchTxt);
  }, [searchTxt]);
  useEffect(() => {
    const storedFavors = localStorage.getItem("favorList");
    const parsedFavorates = storedFavors ? JSON.parse(storedFavors) : [];
    setFavorsList(parsedFavorates);
  }, [setFavorsList]);

  const fetchFilms = async (txt) => {
    const res = await axios.get(`${BASE_URL}?q=${txt}`);
    setFilms(res?.data);
  };
  return {films}
};
