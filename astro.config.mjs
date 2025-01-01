import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static", // Output sebagai file statis, diperlukan untuk Vercel
  base: "/", // Base path tidak diperlukan di Vercel karena semua resource otomatis di-root
});
