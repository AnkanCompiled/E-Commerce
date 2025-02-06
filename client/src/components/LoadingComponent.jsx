import React from "react";
import styles from "../styles/LoadingComponent.module.css";

export default function LoadingComponent({ width = "max-content" }) {
  return (
    <div className={styles.page_loader_wrapper} aria-label="Loading">
      <div className={styles.page_loader}></div>
    </div>
  );
}
