import useSidebarStore from "../store/sidebarStore";
import { Link, useLocation } from "react-router-dom";
import Genres from "./Genres";

import { useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa";

const Sidebar = () => {
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen);
  const sidebarHandler = useSidebarStore((state) => state.toggleSidebar);

  const location = useLocation();
  const key = location.key;

  useEffect(() => {
    isSidebarOpen ? sidebarHandler() : null;
  }, [key]);

  const list = [
    { name: "Home", link: "/home" },
    { name: "Subbed Anime", link: "/animes/subbed-anime" },
    { name: "Dubbed Anime", link: "/animes/dubbed-anime" },
    { name: "Most Popular", link: "/animes/most-popular" },
    { name: "Top Airing", link: "/animes/top-airing" },
    { name: "most favorite", link: "/animes/most-favorite" },
    { name: "latest completed", link: "/animes/completed" },
    { name: "recently added", link: "/animes/recently-added" },
    { name: "recently updated", link: "/animes/recently-updated" },
    { name: "top upcoming", link: "/animes/top-upcoming" },
    { name: "A-Z List", link: "/animes/az-list/a" },
    { name: "Movies", link: "/animes/movie" },
    { name: "OVAs", link: "/animes/ova" },
    { name: "ONAs", link: "/animes/ona" },
    { name: "Specials", link: "/animes/special" },
  ];

  return (
    <div
      className={`sidebar transition-all fixed overflow-y-auto h-full z-[100] inset-0 w-64 md:w-80 bg-[var(--surface-level-2)] shadow-2xl ${isSidebarOpen ? "translate-x-0" : "translate-x-[-100%]"
        }`}
    >
      <button
        className="w-full py-5 px-4 flex items-center gap-2 hover:text-primary-hover text-base md:text-xl transition-colors"
        onClick={sidebarHandler}
      >
        <FaAngleLeft />
        <span className="font-medium">Close Menu</span>
      </button>
      <ul className="py-2">
        {list.map((item) => (
          <li
            key={item.link}
            onClick={sidebarHandler}
            className="py-4 px-6 hover:text-primary-hover text-base md:text-lg border-b border-white/5 w-full transition-colors flex items-center"
          >
            <Link className="w-full" to={item.link}>{item.name}</Link>
          </li>
        ))}
        <li className="py-4 px-6 text-base md:text-lg w-full font-bold uppercase tracking-wider text-text-muted">Genres</li>
        <div className="px-4 pb-10">
          <Genres
            event={sidebarHandler}
            className="hover:opacity-80 transition-opacity"
          />
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
