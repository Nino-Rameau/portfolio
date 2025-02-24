import { Link } from "react-router-dom";

export const Navbtn = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="p-4 text-black dark:text-white shadow-[0px_0px_20px_#3000f0] rounded-xl px-5 py-2 font-titre"
      onClick={() => window.scrollTo(0, 0)}
    >
      {children}
    </Link>
  );
};
