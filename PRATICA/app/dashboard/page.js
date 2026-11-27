import { Suspense } from "react";
import { buscarMetricasRapidas } from "./dados";
import BlocoEvasao from "./BlocoEvasao";
import SkeletonEvasao from "./SkeletonEvasao";

// Garante renderização a cada requisição (necessário para ver o streaming em produção)
export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const metricas = await buscarMetricasRapidas();

  return (
    <main style={{ padding: 24 }}>
      <h1>Dashboard Analítico Acadêmico</h1>

      <section style={{ border: "1px solid #999", padding: 16, marginBottom: 16 }}>
        <h2>Bloco A — Métricas Rápidas</h2>
        <p>Alunos ativos: {metricas.alunosAtivos}</p>
        <p>Turmas: {metricas.turmas}</p>
        <p>Aprovação geral: {metricas.aprovacaoGeral}</p>
      </section>

      <section style={{ border: "1px solid #999", padding: 16 }}>
        <h2>Bloco B — Relatório Histórico de Evasão</h2>
        <Suspense fallback={<SkeletonEvasao />}>
          <BlocoEvasao />
        </Suspense>
      </section>
    </main>
  );
}
