"use client";

import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Link from "next/link";
import { useState, useEffect } from "react";

function AppNav() {
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
    <Navbar
      bg="primary"
      variant="dark"
      expand="lg"
      className="rounded-5 shadow"
      style={{ 
        position: "fixed", 
        top: "1rem", 
        left: "50%", 
        transform: "translateX(-50%)",
        width: "90%",
        zIndex: 1030
      }}
    >
      <Container>
        <Navbar.Brand as={Link} href="/">
          Clinic
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} href="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} href="/contact">
              Contact
            </Nav.Link>
          </Nav>
          <Button
            variant={isDarkMode ? "light" : "dark"}
            onClick={toggleTheme}
            className="ms-2"
            size="sm"
          >
            {isDarkMode ? "☀️ Light" : "🌙 Dark"}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNav;
