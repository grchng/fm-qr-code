import React from "react";
import styles from "./Subtext.modules.scss";

export function Subtext({ text }: { text: string }) {
  return <p className={styles.Subtext}>{text}</p>;
}
