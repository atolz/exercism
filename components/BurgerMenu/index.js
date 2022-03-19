import styles from "./BurgerMenu.module.scss";
import { useState } from "react";

const BurgerMenu = () => {
  const [isCrossed, setIsCrossed] = useState(false);

  const toggleNav = () => {
    setIsCrossed((state) => !state);
  };
  return (
    <div
      className=" p-4 cursor-pointer md:hidden order-1"
      onClick={() => {
        toggleNav();
      }}
    >
      <div className={styles.burger_menu + ` ${isCrossed ? styles.burger_menu_active : ""}`}></div>
    </div>
  );
};

export default BurgerMenu;
