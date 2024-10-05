FROM node:22-alpine3.19

WORKDIR /web-nuxt

COPY web-nuxt/package.json web-nuxt/package-lock.json ./

RUN npm install

COPY web-nuxt/assets ./assets
COPY web-nuxt/pages ./pages
COPY web-nuxt/public ./public
COPY web-nuxt/server ./server
COPY web-nuxt/app.vue web-nuxt/nuxt.config.ts web-nuxt/tailwind.config.ts web-nuxt/tsconfig.json ./

RUN npm run build

CMD ["npm", "run", "dev"]
