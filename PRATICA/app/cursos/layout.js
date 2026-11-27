import Sidebar from "./Sidebar";

export default function CursosLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <section style={{ flex: 1, padding: 24 }}>{children}</section>
    </div>
  );
}
