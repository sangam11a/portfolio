import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function copyDotfilesPlugin() {
  return {
    name: "copy-dotfiles",
    closeBundle() {
      const wellKnownSrc = path.resolve(__dirname, "public/.well-known");
      const wellKnownDest = path.resolve(__dirname, "dist/.well-known");
      if (fs.existsSync(wellKnownSrc)) {
        fs.cpSync(wellKnownSrc, wellKnownDest, { recursive: true });
      }
      const nojekyllSrc = path.resolve(__dirname, "public/.nojekyll");
      const nojekyllDest = path.resolve(__dirname, "dist/.nojekyll");
      if (fs.existsSync(nojekyllSrc)) {
        fs.copyFileSync(nojekyllSrc, nojekyllDest);
      }
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss(), viteSingleFile(), copyDotfilesPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
