"use client";

import { useState } from "react";
import Link from "next/link";
import { cursos } from "./dados";

export default function Sidebar() {
  const [aberto, setAberto] = useState(true);

  return (
    <aside style={{ width: aberto ? 240 : 64, padding: 12, borderRight: "1px solid #999" }}>
      <button onClick={() => setAberto((v) => !v)}>
        {aberto ? "Recolher" : "Expandir"}
      </button>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {cursos.map((c) => (
            <li key={c.id} style={{ margin: "8px 0" }}>
              <Link href={`/cursos/${c.id}`} prefetch={true}>
                {aberto ? c.titulo : c.id}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
