import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div>
        <Link to="/" className={styles.link}>
          <img
            src="https://d1l6icgp8w0hse.cloudfront.net/assets/ycdc/ycombinator-logo-7481412385fe6d0f7d4a3339d90fe12309432ca41983e8d350b232301d5d8684.png
"
            alt="Hacker News"
            className={styles.logo}
          />
          Hacker News
        </Link>
      </div>
      <div>
        &nbsp;· <Link to="/new">new</Link> · <Link to="/past">past</Link> ·{" "}
        <Link to="/jobs">jobs</Link>
      </div>
    </header>
  );
};

export default Header;
