"use client";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";

function ThemBtn() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    if (newMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <Button
      onClick={toggleTheme}
      size="sm"
      variant={isDarkMode ? "light" : "dark"}
      className="rounded-circle text-center p-0"
      style={{
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        height: "5vh",
        width: "5vh",
      }}
    >
      {isDarkMode ? "☀️" : "🌙"}
    </Button>
  );
}

export default ThemBtn;
