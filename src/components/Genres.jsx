import { Link } from "react-router-dom";
import useGenresStore from "../store/genresStore";

const Genres = ({ event, className }) => {
  const genres = useGenresStore((state) => state.genres);

  const colors = [
    "var(--primary)",
    "var(--secondary)",
    "var(--accent)",
  ];

  return (
    <ul className={`flex flex-wrap `}>
      {genres.map((genre, index) => (
        <li
          key={genre}
          className="m-1"
        >
          <Link
            onClick={event}
            to={`/animes/genre/${genre}`}
            className="inline-block px-3 py-1 rounded-full text-xs md:text-sm font-medium border border-white/20 text-text-muted hover:border-primary-hover hover:text-primary-hover hover:shadow-glow transition-all duration-300"
          >
            {genre}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Genres;
