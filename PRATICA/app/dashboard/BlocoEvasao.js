import { buscarRelatorioEvasao } from "./dados";

export default async function BlocoEvasao() {
  const relatorio = await buscarRelatorioEvasao();

  return (
    <ul>
      {relatorio.map((r) => (
        <li key={r.periodo}>
          {r.periodo}: {r.taxa}
        </li>
      ))}
    </ul>
  );
}
