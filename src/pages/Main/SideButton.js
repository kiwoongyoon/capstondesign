import { useEffect, useState } from "react";

const SideButton = () => {
  const [toggleBtn, setToggleBtn] = useState(true);
  const handleScroll = () => {
    const { scrollY } = window;
    scrollY > 200 ? setToggleBtn(true) : setToggleBtn(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const MoveTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return toggleBtn ? (
    <div className="side-button" onClick={MoveTop}>
      <img
        src={require("assets/images/logo.png")}
        alt="sideButton"
        style={{ width: "50px", height: "50px" }}
      />
    </div>
  ) : null;
};

export default SideButton;
