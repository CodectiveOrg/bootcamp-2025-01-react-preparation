import { useContext } from "react";

import Button from "../Button/Button.tsx";
import VibeFilter from "../VibeFilter/VibeFilter.tsx";
import Input from "../Input/Input.tsx";

import MingcuteSearchLine from "../../icons/MingcuteSearchLine.tsx";
import MingcuteMoonStarsLine from "../../icons/MingcuteMoonStarsLine.tsx";
import MingcuteSunLine from "../../icons/MingcuteSunLine.tsx";

import { ThemeContext } from "../../providers/ThemeProvider.tsx";

import styles from "./Toolbar.module.css";

function Toolbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleThemeButtonClickHandler = (): void => {
    setTheme((currentTheme) => {
      return currentTheme === "light" ? "dark" : "light";
    });
  };

  return (
    <div className={styles.toolbar}>
      <Input
        placeholder="Search dream..."
        suffixIcon={<MingcuteSearchLine />}
      />
      <VibeFilter />
      <Button
        sameWidthHeight
        className={styles.theme}
        onClick={toggleThemeButtonClickHandler}
      >
        {theme === "light" ? <MingcuteMoonStarsLine /> : <MingcuteSunLine />}
      </Button>
    </div>
  );
}

export default Toolbar;
