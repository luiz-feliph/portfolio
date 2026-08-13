import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import i18n from "./helper/i18n.ts";
import App from "./App.tsx";

const applyDocumentMetadata = (language: string) => {
  document.documentElement.lang = language.startsWith("pt") ? "pt-BR" : "en";
  document.title = i18n.t("documentTitle");
};

applyDocumentMetadata(i18n.language);
i18n.on("languageChanged", applyDocumentMetadata);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
