export default function SkeletonEvasao() {
  const barra = { background: "#ddd", height: 16, marginBottom: 10, borderRadius: 4 };
  return (
    <div aria-busy="true" aria-label="Carregando relatório de evasão">
      <div style={{ ...barra, width: "40%" }} />
      <div style={{ ...barra, width: "90%" }} />
      <div style={{ ...barra, width: "80%" }} />
      <div style={{ ...barra, width: "85%" }} />
    </div>
  );
}
