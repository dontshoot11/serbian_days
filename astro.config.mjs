import { defineConfig } from "astro/config";

export default defineConfig({
	build: {
		assets: "assets",
		site: "https://dontshoot11.github.io",
		base: "/src/projects/serbian_days",
	},
});
