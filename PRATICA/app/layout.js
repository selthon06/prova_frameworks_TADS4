import "./globals.css";
import { AcessibilidadeProvider } from "./providers";

export const metadata = {
  title: "Portal de Comunicados",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <AcessibilidadeProvider>{children}</AcessibilidadeProvider>
      </body>
    </html>
  );
}
