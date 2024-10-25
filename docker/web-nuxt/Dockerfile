FROM oven/bun:canary-alpine

WORKDIR /web-nuxt

COPY web-nuxt/package.json web-nuxt/bun.lockb ./

RUN bun install

COPY web-nuxt/assets ./assets
COPY web-nuxt/components ./components
COPY web-nuxt/libs ./libs
COPY web-nuxt/pages ./pages
COPY web-nuxt/public ./public
COPY web-nuxt/server ./server
COPY web-nuxt/stores ./stores
COPY web-nuxt/nuxt.config.ts web-nuxt/tailwind.config.ts web-nuxt/tsconfig.json ./

CMD ["bun", "run", "dev"]
