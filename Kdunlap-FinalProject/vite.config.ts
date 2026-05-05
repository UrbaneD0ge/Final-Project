import { defineConfig } from "vite";

// const apiKey = import.meta.env.apiKey;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  server: {
    open: true,
    // proxy: {
    //   '/api': {
    //     target: `https://developerservices.itsmarta.com:18096/itsmarta/railrealtimearrivals/developerservices/traindata?apiKey=${apiKey}`,
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ''),
    //   },
    }
  },
  build: {
    outDir: "dist",
  },
});
