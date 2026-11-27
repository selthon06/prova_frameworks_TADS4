"use server";

import { revalidatePath } from "next/cache";
import { adicionarManifestacao } from "./repositorio";

export async function registrarManifestacao(estadoAnterior, formData) {
  const nome = String(formData.get("nome") ?? "").trim();
  const tipo = String(formData.get("tipo") ?? "");
  const mensagem = String(formData.get("mensagem") ?? "").trim();

  // Pausa curta apenas para ser possível observar o estado "Registrando manifestação..."
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (mensagem.length < 10) {
    return {
      erro: "A mensagem deve ter no mínimo 10 caracteres.",
      sucesso: false,
      valores: { nome, tipo, mensagem },
    };
  }

  adicionarManifestacao({
    id: Date.now(),
    nome,
    tipo,
    mensagem,
  });

  revalidatePath("/ouvidoria");

  return { erro: null, sucesso: true, valores: { nome: "", tipo: "Elogio", mensagem: "" } };
}
