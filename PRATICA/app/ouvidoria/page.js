import FormOuvidoria from "./FormOuvidoria";
import { listarManifestacoes } from "./repositorio";

export default function OuvidoriaPage() {
  const manifestacoes = listarManifestacoes();

  return (
    <main style={{ padding: 24, maxWidth: 720 }}>
      <h1>Ouvidoria Acadêmica</h1>

      <FormOuvidoria />

      <hr style={{ margin: "24px 0" }} />

      <h2>Mural público</h2>
      {manifestacoes.length === 0 ? (
        <p>Nenhuma manifestação registrada.</p>
      ) : (
        <ul>
          {manifestacoes.map((m) => (
            <li key={m.id}>
              <strong>{m.tipo}</strong> — {m.nome}: {m.mensagem}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
