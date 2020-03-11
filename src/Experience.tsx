import React from "react";
import styles from "./Experience.module.css";

interface ExperienceProps {
  company: string;
  title: string;
  website?: string;
  dates: string;
  children: React.ReactNode;
}

export default function Experience(props: ExperienceProps) {
  return (
    <div className={styles.experience}>
      <h3 className={styles.title}>{props.title}</h3>
      <p className={styles.dates}>{props.dates}</p>
      <p className={styles.company}>{props.company}</p>
      {props.website && (
        <a
          className={styles.website}
          href={props.website}
          rel="nofollow noreferrer"
        >
          {props.website}
        </a>
      )}
      <div className={styles.content}>{props.children}</div>
    </div>
  );
}
