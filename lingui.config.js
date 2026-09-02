import { formatter } from "@lingui/format-po";

export default {
  // Locales suportados
  locales: ["en", "pt",],
  // Locale padrão do código fonte
  sourceLocale: "en",
  // Onde os catálogos serão salvos (agora com extensão .po)
  catalogs: [
    {
      path: "src/locales/{locale}/messages",
      include: ["src"],
    },
  ],
  // Usando o formatador PO
  format: formatter(),
};