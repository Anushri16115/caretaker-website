import React from "react";

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="container">
        © {new Date().getFullYear()} Abhiruchi Caretaker
      </div>
    </footer>
  );
}
