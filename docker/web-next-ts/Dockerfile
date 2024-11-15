FROM node:23-alpine3.19

WORKDIR /web-next-ts

# Download packages
COPY web-next-ts/package.json web-next-ts/package-lock.json ./
RUN npm install --force

# Copy source
COPY web-next-ts/src ./src
COPY web-next-ts/.eslintrc.json web-next-ts/next.config.ts web-next-ts/postcss.config.mjs web-next-ts/tailwind.config.ts web-next-ts/tsconfig.json ./

ENTRYPOINT ["npm", "run", "dev"]
