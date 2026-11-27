const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Bloco A: resposta rápida simulada (500ms)
export async function buscarMetricasRapidas() {
  await esperar(500);
  return { alunosAtivos: 420, turmas: 18, aprovacaoGeral: "87%" };
}

// Bloco B: consulta demorada simulada (3 segundos)
export async function buscarRelatorioEvasao() {
  await esperar(3000);
  return [
    { periodo: "2023/1", taxa: "14%" },
    { periodo: "2023/2", taxa: "12%" },
    { periodo: "2024/1", taxa: "11%" },
    { periodo: "2024/2", taxa: "9%" },
  ];
}
