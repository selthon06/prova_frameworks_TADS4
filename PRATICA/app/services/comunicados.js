import "server-only";

// Dados confidenciais: este módulo nunca deve ser empacotado para o cliente.
const COMUNICADOS_INTERNOS = [
  { id: 1, titulo: "Reunião de colegiado", texto: "Quinta-feira, 14h, sala 3." },
  { id: 2, titulo: "Prazo de lançamento de notas", texto: "Até sexta-feira, 18h." },
  { id: 3, titulo: "Manutenção dos laboratórios", texto: "Sábado, das 8h às 12h." },
];

export async function listarComunicados() {
  return COMUNICADOS_INTERNOS;
}
