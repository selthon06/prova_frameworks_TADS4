import BarraAcessibilidade from "../components/BarraAcessibilidade";
import { listarComunicados } from "../services/comunicados";

export default async function PortalPage() {
  const comunicados = await listarComunicados();

  return (
    <main>
      <BarraAcessibilidade />
      <section className="mural">
        <h1>Mural de Avisos</h1>
        {comunicados.map((c) => (
          <article key={c.id} className="aviso">
            <h2>{c.titulo}</h2>
            <p>{c.texto}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
