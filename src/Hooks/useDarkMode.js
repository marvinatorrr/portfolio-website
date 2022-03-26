import { useEffect, useState } from "react";

export default function useDarkMode() {
  if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "dark");
  }
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === "dark" ? "light" : "dark";
  console.log(colorTheme);
  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
