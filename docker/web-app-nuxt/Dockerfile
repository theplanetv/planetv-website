FROM oven/bun:canary-alpine

WORKDIR /web-app-nuxt

COPY web-app-nuxt/package.json web-app-nuxt/bun.lockb ./

RUN bun install
RUN bun -v

COPY web-app-nuxt/components ./components
COPY web-app-nuxt/libs ./libs
COPY web-app-nuxt/pages ./pages
COPY web-app-nuxt/public ./public
COPY web-app-nuxt/server ./server
COPY web-app-nuxt/stores ./stores
COPY web-app-nuxt/app.vue web-app-nuxt/nuxt.config.ts web-app-nuxt/tailwind.config.ts web-app-nuxt/tsconfig.json ./

CMD ["bun", "run", "dev"]
