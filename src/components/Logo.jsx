import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <Link to={"/home"}>
      <motion.div
        className="flex items-center gap-3"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <img
          src="/anidel-icon.jpg"
          alt="Anidel"
          className="h-10 w-10 md:h-12 md:w-12 object-contain"
        />
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent select-none">
          Anidel
        </h1>
      </motion.div>
    </Link>
  );
};

export default Logo;

