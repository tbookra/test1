import "./App.css";
import {  useState } from "react";
import FilmCard from "./components/FilmCard";
import { useSetFavorites } from "./hooks/useSetFavorites";


function App() {
  // const [films, setFilms] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");
  const [favorsList, setFavorsList] = useState([]);
  const { films } = useSetFavorites(searchTxt, setFavorsList);
  // useEffect(() => {
  //   fetchFilms(searchTxt);
  // }, [searchTxt]);
  // useEffect(() => {
  //   const storedFavors = localStorage.getItem("favorList");
  //   const parsedFavorates = storedFavors ? JSON.parse(storedFavors) : [];
  //   setFavorsList(parsedFavorates);
  // }, []);

  const handleChange = (e) => {
    setSearchTxt(e.target.value);
  };
  // const fetchFilms = async (txt) => {
  //   const res = await axios.get(`${BASE_URL}?q=${txt}`);
  //   setFilms(res?.data);

  // };
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
