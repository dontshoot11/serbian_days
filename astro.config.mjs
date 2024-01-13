import { defineConfig } from "astro/config";
import relativeLinks from "astro-relative-links";
export default defineConfig({
	build: {
		assets: "assets",
	},
	site: "https://dontshoot11.github.io",
	integrations: [relativeLinks()],
});
