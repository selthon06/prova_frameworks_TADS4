"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { registrarManifestacao } from "./actions";

const estadoInicial = {
  erro: null,
  sucesso: false,
  valores: { nome: "", tipo: "Elogio", mensagem: "" },
};

function BotaoEnviar() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Registrando manifestação..." : "Enviar manifestação"}
    </button>
  );
}

export default function FormOuvidoria() {
  const [estado, formAction] = useActionState(registrarManifestacao, estadoInicial);

  return (
    <form action={formAction}>
      <div style={{ marginBottom: 12 }}>
        <label htmlFor="nome">Nome</label>
        <br />
        <input id="nome" name="nome" defaultValue={estado.valores.nome} required />
      </div>

      <div style={{ marginBottom: 12 }}>
        <label htmlFor="tipo">Tipo de Manifestação</label>
        <br />
        <select id="tipo" name="tipo" defaultValue={estado.valores.tipo}>
          <option value="Elogio">Elogio</option>
          <option value="Sugestão">Sugestão</option>
          <option value="Reclamação">Reclamação</option>
        </select>
      </div>

      <div style={{ marginBottom: 12 }}>
        <label htmlFor="mensagem">Mensagem</label>
        <br />
        <textarea
          id="mensagem"
          name="mensagem"
          rows={4}
          defaultValue={estado.valores.mensagem}
        />
      </div>

      {estado.erro && (
        <p role="alert" style={{ color: "red" }}>
          {estado.erro}
        </p>
      )}
      {estado.sucesso && <p>Manifestação registrada com sucesso!</p>}

      <BotaoEnviar />
    </form>
  );
}
