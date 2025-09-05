import React from "react";
import styles from "./Header.module.scss";

interface HeaderProps {
  text: string;
}

export function Header({ text }: HeaderProps) {
  return <h2 className={styles.Header}>{text}</h2>;
}
