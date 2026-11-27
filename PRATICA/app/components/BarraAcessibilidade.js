"use client";

import { useAcessibilidade } from "../providers";

export default function BarraAcessibilidade() {
  const { altoContraste, fonteAmpliada, alternarContraste, alternarFonte } =
    useAcessibilidade();

  return (
    <div className="barra" role="toolbar" aria-label="Ferramentas de acessibilidade">
      <button onClick={alternarContraste} aria-pressed={altoContraste}>
        Alto contraste: {altoContraste ? "ativo" : "inativo"}
      </button>
      <button onClick={alternarFonte} aria-pressed={fonteAmpliada}>
        Fonte: {fonteAmpliada ? "Ampliada" : "Normal"}
      </button>
    </div>
  );
}
