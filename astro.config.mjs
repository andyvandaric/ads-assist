import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "static", // Pastikan outputnya adalah static
  base: "/ads-assist/", // Jika ini bukan repository utama (sesuai nama repository GitHub Anda)
});
