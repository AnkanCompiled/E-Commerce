import React from "react";
import styles from "../styles/global.module.css";
import NavbarComponent from "../components/NavbarComponent";

export default function HomePage() {
  return (
    <div className={styles.main}>
      <NavbarComponent />
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
    </div>
  );
}
