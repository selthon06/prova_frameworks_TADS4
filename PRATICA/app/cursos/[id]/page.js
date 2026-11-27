import { notFound } from "next/navigation";
import { buscarCurso } from "../dados";

export default async function CursoPage({ params }) {
  const { id } = await params;
  const curso = buscarCurso(id);

  if (!curso) {
    notFound();
  }

  return (
    <article>
      <h1>{curso.titulo}</h1>
      <p>
        <strong>Carga horária:</strong> {curso.carga}
      </p>
      <h2>Ementa</h2>
      <p>{curso.ementa}</p>
      <h2>Pré-requisitos</h2>
      <ul>
        {curso.requisitos.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>
    </article>
  );
}
