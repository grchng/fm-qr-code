import React from "react";
import styles from "./Subtext.module.scss";

interface SubtextProps {
  text: string;
}

export function Subtext({ text }: { text: string }) {
  return <p className={styles.Subtext}>{text}</p>;
}
