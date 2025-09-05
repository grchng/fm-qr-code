"use client";
import React from "react";
import { Card } from "src/components";
import "src/i18n";
import "./page.scss";

// Then, update your import statement to use the absolute path.
// Note: It's common practice to omit `/index.ts` from the import path.
function App() {
  return (
    <>
      <Card />
    </>
  );
}

export default App;
