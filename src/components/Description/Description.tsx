import React from "react";
import { useTranslation } from "react-i18next";
import { Header, Subtext } from "./components";
import data from "src/data/components/Description/Description.json";

export function Description() {
  const { t } = useTranslation();
  const { header, subtext } = data.Description;

  return (
    <>
      <Header text={t(header)} />
      <Subtext text={t(subtext)} />
    </>
  );
}
