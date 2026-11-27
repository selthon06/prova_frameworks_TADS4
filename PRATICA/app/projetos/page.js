"use client";

import { useEffect, useMemo, useState } from "react";

const AREAS = ["Frontend", "Backend", "Mobile", "DevOps"];
const CHAVE_STORAGE = "projetos-integradores";

export default function ProjetosPage() {
  const [projetos, setProjetos] = useState([]);
  const [carregado, setCarregado] = useState(false);

  const [nome, setNome] = useState("");
  const [area, setArea] = useState("Frontend");
  const [prazo, setPrazo] = useState("");

  const [busca, setBusca] = useState("");
  const [filtroArea, setFiltroArea] = useState("");

  const nomeInvalido = nome.length > 0 && nome.trim().length < 5;

  // Carrega do localStorage uma única vez
  useEffect(() => {
    try {
      const salvo = localStorage.getItem(CHAVE_STORAGE);
      if (salvo) setProjetos(JSON.parse(salvo));
    } catch (e) {
      console.error("Erro ao ler o localStorage", e);
    }
    setCarregado(true);
  }, []);

  // Salva sempre que a lista mudar (somente depois do carregamento inicial)
  useEffect(() => {
    if (!carregado) return;
    try {
      localStorage.setItem(CHAVE_STORAGE, JSON.stringify(projetos));
    } catch (e) {
      console.error("Erro ao gravar no localStorage", e);
    }
  }, [projetos, carregado]);

  // Filtragem memorizada: só recalcula se a lista ou os filtros mudarem
  const projetosFiltrados = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    return projetos.filter(
      (p) =>
        p.nome.toLowerCase().includes(termo) &&
        (filtroArea === "" || p.area === filtroArea)
    );
  }, [projetos, busca, filtroArea]);

  function handleSubmit(e) {
    e.preventDefault();
    if (nome.trim().length < 5) return;
    setProjetos((atual) => [
      ...atual,
      { id: Date.now(), nome: nome.trim(), area, prazo },
    ]);
    setNome("");
    setArea("Frontend");
    setPrazo("");
  }

  return (
    <main style={{ padding: 24, maxWidth: 720 }}>
      <h1>Projetos Integradores</h1>

      <form onSubmit={handleSubmit} noValidate>
        <div style={{ marginBottom: 12 }}>
          <label htmlFor="nome">Nome do Projeto</label>
          <br />
          <input
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            aria-invalid={nomeInvalido ? "true" : "false"}
            aria-describedby={nomeInvalido ? "erro-nome" : undefined}
            style={{ border: nomeInvalido ? "2px solid red" : "1px solid #999" }}
          />
          {nomeInvalido && (
            <p id="erro-nome" role="alert" style={{ color: "red", margin: "4px 0" }}>
              O nome do projeto deve ter no mínimo 5 caracteres.
            </p>
          )}
        </div>

        <div style={{ marginBottom: 12 }}>
          <label htmlFor="area">Área Temática</label>
          <br />
          <select id="area" value={area} onChange={(e) => setArea(e.target.value)}>
            {AREAS.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: 12 }}>
          <label htmlFor="prazo">Prazo de Conclusão</label>
          <br />
          <input
            id="prazo"
            type="date"
            value={prazo}
            onChange={(e) => setPrazo(e.target.value)}
            required
          />
        </div>

        <button type="submit" disabled={nome.trim().length < 5 || !prazo}>
          Cadastrar projeto
        </button>
      </form>

      <hr style={{ margin: "24px 0" }} />

      <h2>Projetos cadastrados</h2>
      <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
        <div>
          <label htmlFor="busca">Buscar por nome</label>
          <br />
          <input id="busca" value={busca} onChange={(e) => setBusca(e.target.value)} />
        </div>
        <div>
          <label htmlFor="filtro-area">Filtrar por área</label>
          <br />
          <select
            id="filtro-area"
            value={filtroArea}
            onChange={(e) => setFiltroArea(e.target.value)}
          >
            <option value="">Todas</option>
            {AREAS.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>
      </div>

      {projetosFiltrados.length === 0 ? (
        <p>Nenhum projeto encontrado.</p>
      ) : (
        <ul>
          {projetosFiltrados.map((p) => (
            <li key={p.id}>
              <strong>{p.nome}</strong> — {p.area} — prazo: {p.prazo}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
