import React from "react";
import { useTranslation } from "react-i18next";
import { Header, Subtext } from "./components";
import data from "src/data/components/Description/Description.json";
import styles from "./Description.module.scss";

export function Description() {
  const { t } = useTranslation();
  const { header, subtext } = data.Description;

  return (
    <div className={styles.Description}>
      <Header text={t(header)} />
      <Subtext text={t(subtext)} />
    </div>
  );
}
