export const Navbtn = ({ href, children }) => {
  return (
    <a
      href={href}
      className="p-4 text-white shadow-[0px_0px_20px_#3000f0] rounded-xl px-5 py-2 font-titre"
    >
      {children}
    </a>
  );
};
