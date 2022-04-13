import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { createHtmlPlugin } from "vite-plugin-html";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, "./");
  return {
    plugins: [
      vue(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: { title: env.VITE_APP_TITLE },
        },
      }),
    ],
    resolve: {
      alias: {
        "@/": `${__dirname}/src/`,
      },
    },
  };
});
