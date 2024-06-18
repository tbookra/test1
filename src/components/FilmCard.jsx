import { useEffect } from "react";

const FilmCard = ({ data, setFavorsList, favorsList }) => {
  //   useEffect(() => {
  //     console.log("favorsList55", favorsList);
  //     localStorage.setItem("favorList", JSON.stringify(favorsList));
  //   }, [favorsList]);

  const handleClick = () => {
    if (favorsList.map((item) => item.show.id).includes(data.show.id)) {
      setFavorsList((prev) =>
        prev.filter((film) => film.show.id !== data.show.id)
      );
      
      localStorage.setItem(
        "favorList",
        JSON.stringify(
          favorsList.filter((film) => film.show.id !== data.show.id)
        )
      );
    } else {
      setFavorsList((prev) => [...prev, data]);
      localStorage.setItem("favorList", JSON.stringify([...favorsList, data]));
    }
  };
  console.log("favorsList", favorsList);
  return (
    <div className="card">
      <div className="image">
        <img height={150} src={data.show?.image?.medium} alt={data.show.name} />
      </div>
      <div className="details">
        <div className="leftSide">
          <div className="upper">
            <div className="name">{data.show.name}</div>
            <div className="score">{data.score}</div>
          </div>
          <div className="down">{data.show.type}</div>
        </div>
        <div className="rightSide">
          <img
            className="heart"
            onClick={handleClick}
            width={25}
            height={25}
            src={
              favorsList.map((item) => item.show.id).includes(data.show.id)
                ? "redHeart.png"
                : "blackHeart.jpg"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
