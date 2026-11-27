export const cursos = [
  {
    id: "1",
    titulo: "Sistemas Web",
    carga: "80h",
    ementa: "Desenvolvimento de aplicacoes web modernas.",
    requisitos: ["Algoritmos", "HTML e CSS"],
  },
  {
    id: "2",
    titulo: "Banco de Dados",
    carga: "80h",
    ementa: "Modelagem relacional e consultas SQL.",
    requisitos: ["Logica de Programacao"],
  },
  {
    id: "3",
    titulo: "Engenharia de Software",
    carga: "60h",
    ementa: "Processos de desenvolvimento e requisitos.",
    requisitos: ["Algoritmos"],
  },
];

export function buscarCurso(id) {
  return cursos.find((c) => c.id === id);
}
