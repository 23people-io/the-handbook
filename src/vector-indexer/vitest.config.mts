import { defineWorkersConfig } from '@cloudflare/vitest-pool-workers/config';

export default defineWorkersConfig({
	test: {
		poolOptions: {
			workers: {
				main: "./src/index.ts",
				miniflare: {
					compatibilityFlags: ["nodejs_compat"],
					compatibilityDate: "2024-12-18",
					bindings: { "AI": { "type": "Ai" } },
				},
			},
		},
	},
});
