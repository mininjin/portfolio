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
          data: {
            title: env.VITE_APP_TITLE,
            description: env.VITE_DESCRIPTION,
            ogSiteUrl: env.VITE_SITE_URL,
            ogThumbnail: env.VITE_THUMBNAIL_URL,
            ogType: env.VITE_TYPE,
            ogSiteName: env.VITE_SITE_NAME,
            ogTwitterCard: env.VITE_TWITTER_CARD,
            ogTwitterSite: env.VITE_TWITTER_SITE,
          },
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
