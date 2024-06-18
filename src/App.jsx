import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import FilmCard from "./components/FilmCard";

const BASE_URL = "https://api.tvmaze.com/search/shows";

function App() {
  const [films, setFilms] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");
  const [favorsList, setFavorsList] = useState([]);

  useEffect(() => {
    fetchFilms(searchTxt);
  }, [searchTxt]);
  useEffect(() => {
    const storedFavors = localStorage.getItem("favorList");
    const parsedFavorates = storedFavors ? JSON.parse(storedFavors) : [];
    setFavorsList(parsedFavorates);
    // return () => localStorage.setItem("favorList", JSON.stringify(favorsList));
  }, []);
  // useEffect(() => {
  //   console.log("favorsList55", favorsList);
  //   localStorage.setItem("favorList", JSON.stringify(favorsList));
  // }, [favorsList]);

  const handleChange = (e) => {
    setSearchTxt(e.target.value);
  };
  const fetchFilms = async (txt) => {
    const res = await axios.get(`${BASE_URL}?q=${txt}`);
    setFilms(res?.data);
    // console.log("res",res);
  };
  console.log("films", films);
  return (
    <main className="App">
      <div>
        <input value={searchTxt} onChange={handleChange} />
      </div>
      <div className="container">
        <div className="searchResults">
          {films.length ? (
            films.map((film) => (
              <FilmCard
                key={film.show.id}
                data={film}
                favorsList={favorsList}
                setFavorsList={setFavorsList}
              />
            ))
          ) : (
            <div>No Films Found</div>
          )}
        </div>
        <div className="favors">
          {favorsList.map((favor) => (
            <FilmCard
              key={favor.show.id}
              data={favor}
              favorsList={favorsList}
              setFavorsList={setFavorsList}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
