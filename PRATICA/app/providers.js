"use client";

import { createContext, useContext, useState } from "react";

const AcessibilidadeContext = createContext(null);

export function AcessibilidadeProvider({ children }) {
  const [altoContraste, setAltoContraste] = useState(false);
  const [fonteAmpliada, setFonteAmpliada] = useState(false);

  const alternarContraste = () => setAltoContraste((v) => !v);
  const alternarFonte = () => setFonteAmpliada((v) => !v);

  const classes = [
    altoContraste ? "alto-contraste" : "",
    fonteAmpliada ? "fonte-ampliada" : "",
  ].join(" ");

  return (
    <AcessibilidadeContext.Provider
      value={{ altoContraste, fonteAmpliada, alternarContraste, alternarFonte }}
    >
      <div className={`app-wrapper ${classes}`}>{children}</div>
    </AcessibilidadeContext.Provider>
  );
}

export function useAcessibilidade() {
  const ctx = useContext(AcessibilidadeContext);
  if (!ctx) {
    throw new Error("useAcessibilidade deve ser usado dentro de AcessibilidadeProvider");
  }
  return ctx;
}
