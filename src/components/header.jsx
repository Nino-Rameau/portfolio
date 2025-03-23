import { useState, useEffect } from "react";
import HeaderMobile from "./headerMobile";
import HeaderDesktop from "./headerDesktop";

const Header = () => {
  // si ecran plus petit que 1080px alors mobile sinon desktop
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1080);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1080);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // renvoie soit compo header mobile ou desktop
  return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
};

export default Header;