// Repositório simulado em memória (reinicia quando o servidor reinicia)
const manifestacoes = [];

export function listarManifestacoes() {
  return manifestacoes;
}

export function adicionarManifestacao(item) {
  manifestacoes.unshift(item);
}
