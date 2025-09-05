import React from "react";
import { QR } from "src/assets/QR";
import { Description } from "src/components/Description";

import styles from "./Card.module.scss";

export function Card() {
  return (
    <div className={styles.Card}>
      <QR />
      <Description />
    </div>
  );
}
